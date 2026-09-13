import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Flashcard, FeedbackResult } from '@/types';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
    try {
        const { feedback, sessionId, category, difficulty, language } = (await req.json()) as {
            feedback: FeedbackResult;
            sessionId: string;
            category: string;
            difficulty: string;
            language?: string;
        };

        if (!feedback || !sessionId) {
            return NextResponse.json({ error: 'Missing feedback or sessionId' }, { status: 400 });
        }

        const systemPrompt = language === 'es'
            ? `Eres un experto en crear flashcards de estudio. Tu tarea es convertir el feedback de una llamada de práctica en flashcards educativas.
            
Genera exactamente 5 flashcards basadas en el feedback proporcionado. Cada flashcard debe tener:
- Una pregunta/concepto clara en el frente
- Una respuesta/explicación concisa en el reverso (máximo 2 oraciones)
- Deben ser prácticas y aplicables

Responde SOLO con un JSON array válido, sin markdown ni texto adicional:
[
  { "front": "pregunta aquí", "back": "respuesta aquí" },
  ...
]`
            : `You are an expert at creating study flashcards. Your task is to convert practice call feedback into educational flashcards.

Generate exactly 5 flashcards based on the provided feedback. Each flashcard should have:
- A clear question/concept on the front
- A concise answer/explanation on the back (max 2 sentences)
- They should be practical and actionable

Respond ONLY with a valid JSON array, no markdown or extra text:
[
  { "front": "question here", "back": "answer here" },
  ...
]`;

        const userPrompt = language === 'es'
            ? `Feedback de la llamada:
Puntuación: ${feedback.score}/10
Fortalezas: ${feedback.strengths.join(', ')}
Áreas de mejora: ${feedback.improvements.join(', ')}
Ejemplos de mejora: ${feedback.rewrites.map((r) => `Original: "${r.original}" → Mejor: "${r.better}"`).join('; ')}

Crea flashcards que ayuden a reforzar estos puntos clave.`
            : `Call Feedback:
Score: ${feedback.score}/10
Strengths: ${feedback.strengths.join(', ')}
Areas to Improve: ${feedback.improvements.join(', ')}
Rewrite Examples: ${feedback.rewrites.map((r) => `Original: "${r.original}" → Better: "${r.better}"`).join('; ')}

Create flashcards that reinforce these key points.`;

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt },
            ],
            max_tokens: 1000,
            temperature: 0.7,
        });

        const responseText = completion.choices[0]?.message?.content ?? '[]';
        
        // Extract JSON array from response
        const jsonMatch = responseText.match(/\[[\s\S]*\]/);
        if (!jsonMatch) {
            console.error('Failed to extract JSON from OpenAI response:', responseText);
            return NextResponse.json({ error: 'Failed to generate flashcards' }, { status: 500 });
        }

        const parsed = JSON.parse(jsonMatch[0]);
        
        // Convert to Flashcard objects
        const flashcards: Flashcard[] = parsed.map((card: any, index: number) => ({
            id: `fc-${sessionId}-${index}-${Date.now()}`,
            front: language === 'es'
                ? { en: card.front, es: card.front }
                : { en: card.front, es: card.front },
            back: language === 'es'
                ? { en: card.back, es: card.back }
                : { en: card.back, es: card.back },
            category: category as any,
            source: 'feedback' as const,
            sourceId: sessionId,
            difficulty: difficulty as any,
            createdAt: Date.now(),
            correctCount: 0,
            reviewCount: 0,
        }));

        return NextResponse.json({ flashcards });
    } catch (error: unknown) {
        console.error('[/api/flashcards/generate] Error:', error);
        const message = error instanceof Error ? error.message : 'Failed to generate flashcards';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
