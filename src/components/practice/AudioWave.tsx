'use client';

import { useEffect, useRef } from 'react';
import { clsx } from 'clsx';

interface AudioWaveProps {
    isActive: boolean;
    isAI?: boolean;
    className?: string;
}

const BAR_COUNT = 16;

export function AudioWave({ isActive, isAI = false, className }: AudioWaveProps) {
    const barsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!isActive) {
            barsRef.current.forEach((bar) => {
                if (bar) bar.style.transform = 'scaleY(0.15)';
            });
            return;
        }

        const intervals: ReturnType<typeof setInterval>[] = [];

        barsRef.current.forEach((bar, i) => {
            if (!bar) return;
            const delay = (i * 80) % 500;
            const interval = setInterval(() => {
                const scale = 0.15 + Math.random() * 0.85;
                bar.style.transform = `scaleY(${scale})`;
            }, 120 + Math.random() * 80);
            intervals.push(interval);
            // stagger start
            setTimeout(() => { }, delay);
        });

        return () => intervals.forEach(clearInterval);
    }, [isActive]);

    return (
        <div className={clsx('flex items-center gap-[3px] h-10', className)}>
            {Array.from({ length: BAR_COUNT }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        barsRef.current[i] = el;
                    }}
                    className={clsx(
                        'w-1 rounded-full transition-transform duration-100 origin-center',
                        isAI ? 'bg-accent/70' : 'bg-primary/70'
                    )}
                    style={{
                        height: '100%',
                        transform: 'scaleY(0.15)',
                    }}
                />
            ))}
        </div>
    );
}
