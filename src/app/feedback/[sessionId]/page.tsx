'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSessionStore } from '@/store/sessionStore';
import { useFlashcardStore } from '@/store/flashcardStore';
import { FeedbackResult, SessionResult, LocalizedString } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { useIndustry } from '@/context/IndustryContext';
import { ScoreCard } from '@/components/feedback/ScoreCard';
import { FeedbackSection } from '@/components/feedback/FeedbackSection';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, LayoutDashboard, Loader2, BookOpen, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function FeedbackPage() {
    const params = useParams();
    const router = useRouter();
    const sessionId = params.sessionId as string;
    const { getResult, saveResult } = useSessionStore();
    const { addFlashcards } = useFlashcardStore();
    const { language, t } = useLanguage();
    const { selectedIndustry } = useIndustry();

    const getLR = (str: LocalizedString | string | undefined) => {
        if (!str) return '';
        if (typeof str === 'string') return str;
        return str[language] || str['en'] || '';
    };

    const [session, setSession] = useState<SessionResult | null>(null);
    const [feedback, setFeedback] = useState<FeedbackResult | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isGeneratingFlashcards, setIsGeneratingFlashcards] = useState(false);

    useEffect(() => {
        const result = getResult(sessionId);
        if (!result) {
            router.push('/scenarios');
            return;
        }
        setSession(result);

        if (result.feedback) {
            setFeedback(result.feedback);
            setIsLoading(false);
            return;
        }

        // Fetch feedback from API
        (async () => {
            try {
                const res = await fetch('/api/feedback', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ transcript: result.transcript, scenarioId: result.scenarioId, language, industry: selectedIndustry }),
                });
                
                if (!res.ok) {
                    const errorData = await res.json();
                    const errorMessage = errorData?.error || 'Failed to generate feedback';
                    throw new Error(errorMessage);
                }

                const data: FeedbackResult = await res.json();
                if ('error' in data) throw new Error(String((data as { error: string }).error));

                setFeedback(data);
                // Persist feedback into the session
                saveResult({ ...result, feedback: data });
            } catch (err) {
                console.error('[Feedback Error]', err);
                const errorMsg = err instanceof Error ? err.message : 'Could not generate feedback';
                setError(`${errorMsg}. Check your OpenAI API key and ensure you recorded a conversation.`);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [sessionId, getResult, router, saveResult, language, selectedIndustry]);

    const formatDuration = (s: number) =>
        `${Math.floor(s / 60)}m ${s % 60}s`;

    const handleCreateFlashcards = async () => {
        if (!session || !feedback) return;
        setIsGeneratingFlashcards(true);

        try {
            const res = await fetch('/api/flashcards/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    feedback,
                    sessionId: session.id,
                    category: session.scenarioId,
                    difficulty: 'Intermediate',
                    language,
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to generate flashcards');
            }

            const data = await res.json();
            if (data.flashcards && Array.isArray(data.flashcards)) {
                addFlashcards(data.flashcards);
                // Redirect to flashcards page
                router.push('/flashcards');
            }
        } catch (err) {
            console.error('Error generating flashcards:', err);
            alert(language === 'en' ? 'Failed to generate flashcards' : 'Error al generar flashcards');
        } finally {
            setIsGeneratingFlashcards(false);
        }
    };

    return (
        <main className="min-h-screen pt-20 pb-12">
            <div className="max-w-2xl mx-auto px-4 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link
                        href="/scenarios"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t('navPractice')}
                    </Link>
                    <h1 className="text-lg font-bold text-foreground">{t('feedbackTitle')}</h1>
                    <div className="w-20" />
                </div>

                {/* Session meta */}
                {session && (
                    <div className="glass rounded-xl px-5 py-4 flex items-center justify-between text-sm">
                        <div>
                            <p className="font-medium text-foreground">{getLR(session.scenarioTitle)}</p>
                            <p className="text-muted-foreground text-xs mt-0.5">
                                {new Date(session.createdAt).toLocaleDateString()} · {formatDuration(session.durationSeconds)} · {session.transcript.length} {t('feedbackTurns')}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button asChild size="sm" variant="ghost" className="gap-1.5 text-muted-foreground hover:text-foreground">
                                <Link href={`/practice/${session.scenarioId}`}>
                                    <RefreshCw className="w-3.5 h-3.5" />
                                    {t('back')}
                                </Link>
                            </Button>
                            <Button asChild size="sm" variant="ghost" className="gap-1.5 text-muted-foreground hover:text-foreground">
                                <Link href="/dashboard">
                                    <LayoutDashboard className="w-3.5 h-3.5" />
                                    {t('navDashboard')}
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}

                {/* Loading */}
                {isLoading && (
                    <div className="flex flex-col items-center gap-6 py-12">
                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                        <p className="text-muted-foreground text-sm text-center">
                            {t('feedbackLoading')}<br />
                            <span className="text-xs">{t('feedbackLoadingSub')}</span>
                        </p>
                        <div className="w-full space-y-3">
                            <Skeleton className="h-32 w-full rounded-2xl" />
                            <Skeleton className="h-48 w-full rounded-xl" />
                        </div>
                    </div>
                )}

                {/* Error */}
                {error && !isLoading && (
                    <div className="glass rounded-xl p-6 text-center border border-destructive/30">
                        <p className="text-destructive text-sm">{error}</p>
                    </div>
                )}

                {/* Feedback */}
                {!isLoading && feedback && (
                    <>
                        <ScoreCard score={feedback.score} />
                        <Button
                            onClick={handleCreateFlashcards}
                            disabled={isGeneratingFlashcards}
                            className="w-full gap-2 bg-primary"
                        >
                            <BookOpen className="w-4 h-4" />
                            {isGeneratingFlashcards
                                ? language === 'en'
                                    ? 'Generating Flashcards...'
                                    : 'Generando Flashcards...'
                                : language === 'en'
                                    ? 'Create Flashcards from Feedback'
                                    : 'Crear Flashcards del Feedback'}
                        </Button>
                        <FeedbackSection feedback={feedback} />
                    </>
                )}

                {/* Transcript accordion (collapsed by default) */}
                {!isLoading && session && session.transcript.length > 0 && (
                    <details className="glass rounded-xl overflow-hidden">
                        <summary className="px-5 py-4 text-sm font-medium cursor-pointer hover:bg-white/5 transition-colors list-none flex items-center justify-between">
                            <span>{t('feedbackTranscript')}</span>
                            <span className="text-muted-foreground text-xs">{session.transcript.length} {t('feedbackTranscriptMsg')}</span>
                        </summary>
                        <div className="px-5 pb-5 space-y-3 max-h-80 overflow-y-auto">
                            {session.transcript.map((msg, i) => (
                                <div key={i} className="text-sm">
                                    <p className={`text-xs font-medium mb-1 ${msg.role === 'user' ? 'text-primary' : 'text-accent'}`}>
                                        {msg.role === 'user' ? t('feedbackRoleYou') : t('feedbackRoleAI')}
                                    </p>
                                    <p className="text-muted-foreground">{msg.content}</p>
                                </div>
                            ))}
                        </div>
                    </details>
                )}
            </div>
        </main>
    );
}
