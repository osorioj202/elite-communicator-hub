'use client';

import { Mic, MicOff, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

interface MicButtonProps {
    isRecording: boolean;
    isDisabled: boolean;
    onMouseDown: () => void;
    onMouseUp: () => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
}

export function MicButton({
    isRecording,
    isDisabled,
    onMouseDown,
    onMouseUp,
    onTouchStart,
    onTouchEnd,
}: MicButtonProps) {
    return (
        <div className="flex flex-col items-center gap-3 select-none">
            {/* Main mic button */}
            <button
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                disabled={isDisabled}
                className={clsx(
                    'w-24 h-24 rounded-full flex items-center justify-center transition-all duration-200 border-2 relative',
                    isRecording
                        ? 'bg-rose-500/20 border-rose-500 text-rose-400 animate-recording-pulse scale-110'
                        : isDisabled
                            ? 'bg-muted/30 border-border text-muted-foreground cursor-not-allowed opacity-50'
                            : 'bg-primary/10 border-primary/40 text-primary hover:bg-primary/20 hover:border-primary hover:scale-105 animate-pulse-glow cursor-pointer active:scale-95'
                )}
                aria-label={isRecording ? 'Release to send' : 'Hold to speak'}
            >
                {isDisabled && !isRecording ? (
                    <Loader2 className="w-8 h-8 animate-spin" />
                ) : isRecording ? (
                    <MicOff className="w-8 h-8" />
                ) : (
                    <Mic className="w-8 h-8" />
                )}
            </button>

            {/* Label */}
            <p className="text-xs text-muted-foreground font-medium">
                {isRecording
                    ? '🔴 Recording… release to send'
                    : isDisabled
                        ? 'AI is responding…'
                        : 'Hold to speak'}
            </p>
        </div>
    );
}
