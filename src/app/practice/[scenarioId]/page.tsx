'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useSessionStore } from '@/store/sessionStore';
import { useLanguage } from '@/context/LanguageContext';
import { getScenario } from '@/data/scenarios';
import { MicButton } from '@/components/practice/MicButton';
import { AudioWave } from '@/components/practice/AudioWave';
import { TranscriptFeed } from '@/components/practice/TranscriptFeed';
import { Button } from '@/components/ui/button';
import { PhoneOff, AlertCircle, ArrowLeft, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { TIPS } from '@/data/tips';
import { POCKETS } from '@/data/pockets';
import { TipCard } from '@/components/tips/TipCard';
import { PocketCard } from '@/components/pockets/PocketCard';
import { LocalizedString } from '@/types';

interface PracticePageProps {
    params: { scenarioId: string };
}

export default function PracticePage({ params }: PracticePageProps) {
    const router = useRouter();
    const scenario = getScenario(params.scenarioId);
    const {
        messages,
        isRecording,
        isAIThinking,
        isAISpeaking,
        startSession,
        addMessage,
        setIsRecording,
        setIsAIThinking,
        setIsAISpeaking,
        endSession,
        saveResult,
    } = useSessionStore();
    const { language, t } = useLanguage();

    const [micError, setMicError] = useState<string | null>(null);
    const [sessionStarted, setSessionStarted] = useState(false);
    const [callDuration, setCallDuration] = useState(0);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const streamRef = useRef<MediaStream | null>(null);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Redirect if invalid scenario
    useEffect(() => {
        if (!scenario) router.push('/scenarios');
    }, [scenario, router]);

    // Start call timer
    useEffect(() => {
        if (sessionStarted) {
            timerRef.current = setInterval(() => setCallDuration((d) => d + 1), 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [sessionStarted]);

    // Format duration
    const formatTime = (s: number) =>
        `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

    // Play AI audio
    const playAIAudio = useCallback(async (text: string) => {
        setIsAISpeaking(true);
        try {
            const res = await fetch('/api/tts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
            });
            if (!res.ok) throw new Error('TTS failed');
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const audio = new Audio(url);
            await new Promise<void>((resolve) => {
                audio.onended = () => {
                    URL.revokeObjectURL(url);
                    resolve();
                };
                audio.onerror = () => resolve();
                audio.play().catch(() => resolve());
            });
        } catch (err) {
            console.error('TTS error:', err);
        } finally {
            setIsAISpeaking(false);
        }
    }, [setIsAISpeaking]);

    // Get AI response
    const getAIResponse = useCallback(
        async (updatedMessages: typeof messages) => {
            setIsAIThinking(true);
            try {
                const res = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ messages: updatedMessages, scenarioId: scenario?.id, language }),
                });
                const data = await res.json();
                if (data.error) throw new Error(data.error);

                addMessage({ role: 'assistant', content: data.reply });
                setIsAIThinking(false);
                await playAIAudio(data.reply);
            } catch (err) {
                console.error('Chat error:', err);
                setIsAIThinking(false);
            }
        },
        [scenario, addMessage, setIsAIThinking, playAIAudio, language]
    );

    // Start session: AI speaks first
    const handleStartCall = useCallback(async () => {
        if (!scenario) return;
        setMicError(null);

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;
        } catch {
            setMicError('Microphone access denied. Please allow microphone access and try again.');
            return;
        }

        startSession(scenario);
        setSessionStarted(true);

        // AI intro
        setIsAIThinking(true);
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [], scenarioId: scenario.id, language }),
            });
            const data = await res.json();
            if (!data.error) {
                addMessage({ role: 'assistant', content: data.reply });
                setIsAIThinking(false);
                await playAIAudio(data.reply);
            } else {
                setIsAIThinking(false);
            }
        } catch {
            setIsAIThinking(false);
        }
    }, [scenario, startSession, addMessage, setIsAIThinking, playAIAudio, language]);

    // Recording handlers
    const startRecording = useCallback(() => {
        if (!streamRef.current || isAIThinking || isAISpeaking) return;
        audioChunksRef.current = [];
        const recorder = new MediaRecorder(streamRef.current, { mimeType: 'audio/webm' });
        recorder.ondataavailable = (e) => {
            if (e.data.size > 0) audioChunksRef.current.push(e.data);
        };
        recorder.start();
        mediaRecorderRef.current = recorder;
        setIsRecording(true);
    }, [isAIThinking, isAISpeaking, setIsRecording]);

    const stopRecording = useCallback(async () => {
        const recorder = mediaRecorderRef.current;
        if (!recorder || recorder.state === 'inactive') return;
        setIsRecording(false);

        await new Promise<void>((resolve) => {
            recorder.onstop = () => resolve();
            recorder.stop();
        });

        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        console.log('[Recording] Audio blob size:', audioBlob.size, 'bytes');
        
        if (audioBlob.size < 500) {
            console.warn('[Recording] Audio too short or silent, skipping transcription');
            return; // too short / silence
        }

        setIsAIThinking(true);
        try {
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.webm');
            formData.append('language', language);
            console.log('[Recording] Sending audio to transcribe with language:', language);
            
            const res = await fetch('/api/transcribe', { method: 'POST', body: formData });
            const data = await res.json();
            
            if (data.error) {
                console.error('[Recording] Transcription error:', data.error);
                setIsAIThinking(false);
                return;
            }
            
            if (!data.text?.trim()) {
                console.warn('[Recording] Empty transcription result');
                setIsAIThinking(false);
                return;
            }
            
            console.log('[Recording] Transcription success:', data.text);
            addMessage({ role: 'user', content: data.text });
            const updated = [...messages, { role: 'user' as const, content: data.text, timestamp: Date.now() }];
            await getAIResponse(updated);
        } catch (err) {
            console.error('[Recording] Error during transcription:', err);
            setIsAIThinking(false);
        }
    }, [setIsRecording, setIsAIThinking, addMessage, messages, getAIResponse, language]);

    // End call
    const handleEndCall = useCallback(async () => {
        streamRef.current?.getTracks().forEach((t) => t.stop());
        if (timerRef.current) clearInterval(timerRef.current);
        const result = endSession();
        saveResult(result);
        router.push(`/feedback/${result.id}`);
    }, [endSession, saveResult, router]);

    const getLR = (str: LocalizedString | string | undefined) => {
        if (!str) return '';
        if (typeof str === 'string') return str;
        return str[language] || str['en'] || '';
    };

    if (!scenario) return null;

    const isDisabled = isAIThinking || isAISpeaking;

    return (
        <main className="min-h-screen pt-16 flex flex-col">
            <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link
                        href="/scenarios"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t('practiceScenarios')}
                    </Link>
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">{scenario.icon}</span>
                        <div>
                            <p className="text-sm font-semibold text-foreground">{getLR(scenario.title)}</p>
                            {sessionStarted && (
                                <p className="text-xs text-muted-foreground font-mono">{t('callIntro')} · {formatTime(callDuration)}</p>
                            )}
                        </div>
                    </div>
                    <div className="w-20" />
                </div>

                {/* Mic error */}
                {micError && (
                    <div className="flex items-start gap-3 bg-destructive/10 border border-destructive/30 rounded-xl p-4 text-sm text-red-400">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {micError}
                    </div>
                )}

                {!sessionStarted ? (
                    /* Pre-call card */
                    <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
                        <div className="text-5xl">{scenario.icon}</div>
                        <div>
                            <h1 className="text-2xl font-bold text-foreground mb-2">{getLR(scenario.title)}</h1>
                            <p className="text-muted-foreground text-sm max-w-sm">{getLR(scenario.description)}</p>
                        </div>
                        <ul className="text-left space-y-2 max-w-xs w-full">
                            {scenario.tips.map((tip, i) => (
                                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                    <span className="text-accent font-bold">→</span> {getLR(tip)}
                                </li>
                            ))}
                        </ul>
                        <Button
                            onClick={handleStartCall}
                            size="lg"
                            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                        >
                            📞 {t('startCall')}
                        </Button>

                        {/* Related Tips */}
                        <div className="w-full pt-12 border-t border-border/20 space-y-12">
                            {/* Tips Section */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5 text-primary" />
                                        {t('practiceRelatedTips')}
                                    </h2>
                                    <Link
                                        href="/tips"
                                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                                    >
                                        {t('practiceBrowseLibrary')} <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                    {TIPS.filter(t => t.category === scenario.category).slice(0, 2).map((tip) => (
                                        <TipCard key={tip.id} tip={tip} />
                                    ))}
                                </div>
                            </div>

                            {/* Pockets Section */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                        {t('practiceSuggestedPockets')}
                                    </h2>
                                    <Link
                                        href="/pockets"
                                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                                    >
                                        {t('practiceViewPockets')} <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                    {POCKETS.filter(p => p.category === scenario.category).slice(0, 2).map((pocket) => (
                                        <PocketCard key={pocket.id} pocket={pocket} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Active call */
                    <>
                        {/* AI status indicator */}
                        <div className="glass rounded-xl p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div
                                    className={clsx(
                                        'w-2 h-2 rounded-full',
                                        isAISpeaking ? 'bg-accent animate-pulse' : isAIThinking ? 'bg-amber-400 animate-pulse' : 'bg-muted-foreground/40'
                                    )}
                                />
                                <span className="text-xs text-muted-foreground">
                                    {isAISpeaking ? t('callSpeaking') : isAIThinking ? t('callThinking') : t('practiceYourTurn')}
                                </span>
                            </div>
                            <AudioWave isActive={isAISpeaking} isAI className="scale-75 origin-right" />
                        </div>

                        {/* Transcript */}
                        <div className="flex-1 glass rounded-xl p-4 flex flex-col min-h-0" style={{ maxHeight: '40vh' }}>
                            <TranscriptFeed messages={messages} isAIThinking={isAIThinking} />
                        </div>

                        {/* Controls */}
                        <div className="glass rounded-xl p-6 flex flex-col items-center gap-4">
                            <AudioWave isActive={isRecording} className="mb-2" />
                            <MicButton
                                isRecording={isRecording}
                                isDisabled={isDisabled}
                                onMouseDown={startRecording}
                                onMouseUp={stopRecording}
                                onTouchStart={startRecording}
                                onTouchEnd={stopRecording}
                            />
                            <Button
                                onClick={handleEndCall}
                                variant="destructive"
                                size="sm"
                                className="gap-2 mt-2"
                            >
                                <PhoneOff className="w-4 h-4" />
                                {t('endCall')}
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
