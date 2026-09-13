import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const audioFile = formData.get('audio') as File | null;
        const language = formData.get('language') as string || 'en';

        if (!audioFile) {
            return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
        }

        const transcription = await openai.audio.transcriptions.create({
            file: audioFile,
            model: 'whisper-1',
            language: language,
        });

        return NextResponse.json({ text: transcription.text });
    } catch (error: unknown) {
        console.error('[/api/transcribe] Error:', error);
        const message = error instanceof Error ? error.message : 'Transcription failed';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
