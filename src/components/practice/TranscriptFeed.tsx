'use client';

import { useEffect, useRef } from 'react';
import { Message } from '@/types';
import { clsx } from 'clsx';

interface TranscriptFeedProps {
    messages: Message[];
    isAIThinking: boolean;
}

export function TranscriptFeed({ messages, isAIThinking }: TranscriptFeedProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isAIThinking]);

    if (messages.length === 0 && !isAIThinking) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <p className="text-muted-foreground text-sm text-center">
                    The AI will speak first.<br />Then hold the mic button to respond.
                </p>
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {messages.map((msg, i) => (
                <div
                    key={i}
                    className={clsx(
                        'flex gap-2 animate-fade-in-up',
                        msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                    )}
                >
                    {/* Avatar */}
                    <div
                        className={clsx(
                            'w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-semibold',
                            msg.role === 'user'
                                ? 'bg-primary/20 text-primary'
                                : 'bg-accent/20 text-accent'
                        )}
                    >
                        {msg.role === 'user' ? 'You' : 'AI'}
                    </div>

                    {/* Bubble */}
                    <div
                        className={clsx(
                            'max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                            msg.role === 'user'
                                ? 'bg-primary/15 text-foreground rounded-tr-sm'
                                : 'bg-muted/60 text-foreground rounded-tl-sm'
                        )}
                    >
                        {msg.content}
                    </div>
                </div>
            ))}

            {/* Thinking indicator */}
            {isAIThinking && (
                <div className="flex gap-2 animate-fade-in-up">
                    <div className="w-7 h-7 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-semibold flex-shrink-0">
                        AI
                    </div>
                    <div className="bg-muted/60 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                                style={{
                                    animation: `thinking-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div ref={bottomRef} />
        </div>
    );
}
