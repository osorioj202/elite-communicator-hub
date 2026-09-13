import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Message, FeedbackResult, Category } from '@/types';
import { getScenario } from '@/data/scenarios';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const BASE_JSON_STRUCTURE = `
Provide ONLY a JSON response (no markdown, no extra text) in exactly this structure:
{
  "score": <0-10 integer>,
  "strengths": ["<specific thing they did well>", "<another strength>"],
  "improvements": ["<specific area to improve>", "<another area>"],
  "rewrites": [
    { "original": "<exact sentence user said>", "better": "<improved version>" },
    { "original": "<exact sentence user said>", "better": "<improved version>" },
    { "original": "<exact sentence user said>", "better": "<improved version>" }
  ]
}
`;

const PROMPTS: Record<Category, string> = {
    Sales: `You are a supportive, expert sales coach analyzing a cold-calling practice session.
    Scoring guide:
    - 0–3: Major issues (no value prop, aggressive, no listening)
    - 4–6: Some good elements, room to improve
    - 7–8: Solid performance, minor polish needed
    - 9–10: Exceptional, textbook sales call
    Focus on objections handled, call-to-action, and clarity.`,

    Executive: `You are a senior executive communication coach. Analyze this briefing/pitch.
    Scoring guide:
    - 0–3: Rambling, unclear, lacks strategy
    - 4–6: Decent points but too verbose or tactical
    - 7–8: Clear, concise, strategic
    - 9–10: Executive presence, BLUF (Bottom Line Up Front), high impact
    Focus on brevity, strategy, and confidence. Penalize filler words and lack of structure.`,

    Social: `You are a social dynamics expert. Analyze this social interaction.
    Scoring guide:
    - 0–3: Awkward, interrogator-vibes, self-absorbed
    - 4–6: Polite but surface-level
    - 7–8: Engaging, good listener, interesting
    - 9–10: Magnetic, charismatic, deep connection
    Focus on open-ended questions, active listening, and storytelling.`,

    Dating: `You are a dating and relationship coach. Analyze this interaction for connection and respect.
    Scoring guide:
    - 0–3: Disrespectful, creepy, or boring
    - 4–6: Polite but no spark
    - 7–8: Warm, authentic, good banter
    - 9–10: Charming, respectful, genuine connection
    Focus on empathy, humor, and respect. SAFETY: If the user was disrespectful or aggressive, give a 0 score and harsh feedback.`,
};

export async function POST(req: NextRequest) {
    try {
        const { transcript, scenarioId, language } = (await req.json()) as {
            transcript: Message[];
            scenarioId: string;
            language?: string;
        };

        if (!transcript || transcript.length === 0) {
            return NextResponse.json({ error: 'Empty transcript' }, { status: 400 });
        }

        const scenario = getScenario(scenarioId);
        const category: Category = scenario?.category ?? 'Sales';

        const systemPrompt = `
        ${PROMPTS[category]}
        
        ${BASE_JSON_STRUCTURE}
        
        Be specific and constructive. For rewrites, pick real sentences from the transcript and show a genuinely better alternative.
        
        ${language === 'es' ? 'CRITICAL: Provide ALL feedback (strengths, improvements, rewrites) in Spanish.' : ''}
        `;

        const transcriptText = transcript
            .map((m) => `${m.role === 'user' ? 'User' : 'AI'}: ${m.content}`)
            .join('\n');

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: systemPrompt },
                {
                    role: 'user',
                    content: `Here is the transcript for a "${scenario?.title ?? 'Unknown'}" scenario:\n\n${transcriptText}\n\nProvide your JSON feedback now.`,
                },
            ],
            max_tokens: 800,
            temperature: 0.4,
            response_format: { type: 'json_object' },
        });

        const raw = completion.choices[0]?.message?.content ?? '{}';
        const feedback: FeedbackResult = JSON.parse(raw);

        return NextResponse.json(feedback);
    } catch (error: unknown) {
        console.error('[/api/feedback] Error:', error);
        const message = error instanceof Error ? error.message : 'Feedback generation failed';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
