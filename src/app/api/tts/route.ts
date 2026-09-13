import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
    try {
        const { text } = (await req.json()) as { text: string };

        if (!text?.trim()) {
            return NextResponse.json({ error: 'No text provided' }, { status: 400 });
        }

        const mp3 = await openai.audio.speech.create({
            model: 'tts-1',
            voice: 'alloy',
            input: text,
            speed: 1.0,
        });

        const buffer = Buffer.from(await mp3.arrayBuffer());

        return new NextResponse(buffer, {
            status: 200,
            headers: {
                'Content-Type': 'audio/mpeg',
                'Content-Length': buffer.length.toString(),
                'Cache-Control': 'no-store',
            },
        });
    } catch (error: unknown) {
        console.error('[/api/tts] Error:', error);
        const message = error instanceof Error ? error.message : 'TTS failed';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
