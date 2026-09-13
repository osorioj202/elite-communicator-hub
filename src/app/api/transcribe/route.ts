import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const audioFile = formData.get('audio') as File | null;
        let language = formData.get('language') as string || 'en';

        console.log('[/api/transcribe] Received audio file:', audioFile?.name, 'Language:', language);

        if (!audioFile) {
            console.error('[/api/transcribe] No audio file provided');
            return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
        }

        console.log('[/api/transcribe] Audio file size:', audioFile.size, 'bytes');

        // Map language codes for Whisper API
        const languageMap: Record<string, string> = {
            'en': 'en',
            'es': 'es',
            'fr': 'fr',
            'de': 'de',
            'it': 'it',
            'pt': 'pt',
        };
        
        const whisperLanguage = languageMap[language] || 'en';
        console.log('[/api/transcribe] Using Whisper language:', whisperLanguage);

        const transcription = await openai.audio.transcriptions.create({
            file: audioFile,
            model: 'whisper-1',
            language: whisperLanguage,
        });

        console.log('[/api/transcribe] Transcription result:', transcription.text);
        return NextResponse.json({ text: transcription.text });
    } catch (error: unknown) {
        console.error('[/api/transcribe] Error:', error);
        const message = error instanceof Error ? error.message : 'Transcription failed';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
