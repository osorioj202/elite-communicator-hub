import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getScenario } from '@/data/scenarios';
import { getIndustry, INDUSTRIES } from '@/data/industries';
import { Message, Industry } from '@/types';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const validIndustries = Object.keys(INDUSTRIES) as Industry[];

export async function POST(req: NextRequest) {
    try {
        const { messages, scenarioId, language, industry } = (await req.json()) as {
            messages: Message[];
            scenarioId: string;
            language?: string;
            industry?: string;
        };

        const scenario = getScenario(scenarioId);
        if (!scenario) {
            return NextResponse.json({ error: 'Scenario not found' }, { status: 404 });
        }

        const industryData = industry && validIndustries.includes(industry as Industry) ? getIndustry(industry as Industry) : null;

        let systemPrompt = scenario.prospectSystemPrompt;
        
        // Add industry context if specified
        if (industryData && industry !== 'general') {
            systemPrompt += `\n\nINDUSTRY CONTEXT: ${language === 'es' ? industryData.keyContext.es : industryData.keyContext.en}`;
        }
        
        if (language === 'es') {
            systemPrompt += "\n\nCRITICAL: The user wants to practice in Spanish. Please conduct the entire conversation and provide all feedback in Spanish. Maintain your persona but translate your persona's voice and style to Spanish.";
        }

        const chatMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
            { role: 'system', content: systemPrompt },
            ...messages.map((m) => ({
                role: m.role as 'user' | 'assistant',
                content: m.content,
            })),
        ];

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: chatMessages,
            max_tokens: 150,
            temperature: 0.8,
        });

        const reply = completion.choices[0]?.message?.content ?? "I'm sorry, could you repeat that?";
        return NextResponse.json({ reply });
    } catch (error: unknown) {
        console.error('[/api/chat] Error:', error);
        const message = error instanceof Error ? error.message : 'Chat failed';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
