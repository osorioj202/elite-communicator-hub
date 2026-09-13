'use client';

import { useState } from 'react';
import { FeedbackResult } from '@/types';
import { CheckCircle2, AlertCircle, Wand2, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { useLanguage } from '@/context/LanguageContext';

interface FeedbackSectionProps {
    feedback: FeedbackResult;
}

function CollapsibleSection({
    title,
    icon,
    color,
    children,
}: {
    title: string;
    icon: React.ReactNode;
    color: string;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(true);
    return (
        <div className="glass rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center gap-2 font-semibold text-sm">
                    <span className={color}>{icon}</span>
                    {title}
                </div>
                <ChevronDown
                    className={clsx('w-4 h-4 text-muted-foreground transition-transform duration-200', open && 'rotate-180')}
                />
            </button>
            {open && <div className="px-5 pb-5">{children}</div>}
        </div>
    );
}

export function FeedbackSection({ feedback }: FeedbackSectionProps) {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col gap-4">
            {/* Strengths */}
            <CollapsibleSection
                title={t('feedbackStrengths')}
                icon={<CheckCircle2 className="w-4 h-4" />}
                color="text-emerald-400"
            >
                <ul className="space-y-2">
                    {feedback.strengths.map((s, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            {s}
                        </li>
                    ))}
                </ul>
            </CollapsibleSection>

            {/* Improvements */}
            <CollapsibleSection
                title={t('feedbackImprovements')}
                icon={<AlertCircle className="w-4 h-4" />}
                color="text-amber-400"
            >
                <ul className="space-y-2">
                    {feedback.improvements.map((imp, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                            {imp}
                        </li>
                    ))}
                </ul>
            </CollapsibleSection>

            {/* Rewrites */}
            {feedback.rewrites?.length > 0 && (
                <CollapsibleSection
                    title={t('feedbackRewrites')}
                    icon={<Wand2 className="w-4 h-4" />}
                    color="text-primary"
                >
                    <div className="space-y-4">
                        {feedback.rewrites.map((rw, i) => (
                            <div key={i} className="space-y-2">
                                <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 px-3 py-2 text-sm">
                                    <p className="text-xs text-rose-400 font-medium mb-1">{t('feedbackYouSaid')}</p>
                                    <p className="text-muted-foreground italic">&quot;{rw.original}&quot;</p>
                                </div>
                                <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-sm">
                                    <p className="text-xs text-emerald-400 font-medium mb-1">{t('feedbackBetter')}</p>
                                    <p className="text-foreground">&quot;{rw.better}&quot;</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CollapsibleSection>
            )}
        </div>
    );
}
