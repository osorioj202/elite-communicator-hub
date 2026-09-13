'use client';

import { clsx } from 'clsx';

interface ScoreCardProps {
    score: number;
}

const getScoreConfig = (score: number) => {
    if (score >= 8) return { label: 'Excellent', color: 'text-emerald-400', ring: 'stroke-emerald-400', bg: 'bg-emerald-500/10' };
    if (score >= 6) return { label: 'Good', color: 'text-blue-400', ring: 'stroke-blue-400', bg: 'bg-blue-500/10' };
    if (score >= 4) return { label: 'Fair', color: 'text-amber-400', ring: 'stroke-amber-400', bg: 'bg-amber-500/10' };
    return { label: 'Needs Work', color: 'text-rose-400', ring: 'stroke-rose-400', bg: 'bg-rose-500/10' };
};

export function ScoreCard({ score }: ScoreCardProps) {
    const config = getScoreConfig(score);
    const circumference = 2 * Math.PI * 44;
    const dashOffset = circumference - (score / 10) * circumference;

    return (
        <div className={clsx('glass rounded-2xl p-8 flex flex-col items-center gap-3', config.bg)}>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Your Score</p>

            {/* Circular progress */}
            <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background ring */}
                    <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8" className="text-border" />
                    {/* Score ring */}
                    <circle
                        cx="50"
                        cy="50"
                        r="44"
                        fill="none"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        className={clsx('transition-all duration-1000', config.ring)}
                    />
                </svg>
                {/* Score text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={clsx('text-3xl font-bold', config.color)}>{score}</span>
                    <span className="text-xs text-muted-foreground">/10</span>
                </div>
            </div>

            <p className={clsx('text-lg font-semibold', config.color)}>{config.label}</p>
        </div>
    );
}
