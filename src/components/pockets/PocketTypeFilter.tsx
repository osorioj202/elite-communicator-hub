'use client';

import React from 'react';
import { PocketType } from '@/types';
import { clsx } from 'clsx';
import {
    Quote,
    BookOpen,
    HelpCircle,
    RotateCcw,
    FastForward,
    Mic2,
    LogOut,
    Ear,
    Award,
    Globe,
    Star
} from 'lucide-react';

interface PocketTypeFilterProps {
    selectedType: PocketType | 'All' | 'Saved';
    onTypeChange: (type: PocketType | 'All' | 'Saved') => void;
}

const types: { value: PocketType | 'All' | 'Saved', label: string, icon: React.ElementType | null }[] = [
    { value: 'All', label: 'All Pockets', icon: null },
    { value: 'Saved', label: 'Saved', icon: Star },
    { value: 'phrase', label: 'Phrases', icon: Quote },
    { value: 'story', label: 'Stories', icon: BookOpen },
    { value: 'question', label: 'Questions', icon: HelpCircle },
    { value: 'recovery', label: 'Recovery', icon: RotateCcw },
    { value: 'transition', label: 'Transitions', icon: FastForward },
    { value: 'delivery', label: 'Delivery', icon: Mic2 },
    { value: 'closing', label: 'Closing', icon: LogOut },
    { value: 'listening', label: 'Listening', icon: Ear },
    { value: 'confidence', label: 'Confidence', icon: Award },
    { value: 'cultural', label: 'Cultural', icon: Globe },
];

export function PocketTypeFilter({ selectedType, onTypeChange }: PocketTypeFilterProps) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {types.map((type) => {
                const Icon = type.icon;
                const active = selectedType === type.value;

                return (
                    <button
                        key={type.value}
                        onClick={() => onTypeChange(type.value)}
                        className={clsx(
                            "flex items-center gap-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap text-sm font-medium",
                            active
                                ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                                : "bg-white/5 border-border/50 text-muted-foreground hover:bg-white/10 hover:border-primary/30"
                        )}
                    >
                        {Icon && <Icon className="w-4 h-4" />}
                        {type.label}
                    </button>
                );
            })}
        </div>
    );
}
