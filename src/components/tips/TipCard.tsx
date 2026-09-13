'use client';

import { useState } from 'react';
import { CommunicationTip, LocalizedString } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
    Lightbulb,
    User,
    ArrowRight,
    CheckCircle2,
    XCircle,
    Copy,
    Check
} from 'lucide-react';

interface TipCardProps {
    tip: CommunicationTip;
}

export function TipCard({ tip }: TipCardProps) {
    const [isCopied, setIsCopied] = useState(false);
    const { language } = useLanguage();

    const getLR = (str: LocalizedString | string | undefined) => {
        if (!str) return '';
        if (typeof str === 'string') return str;
        return str[language] || str['en'] || '';
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <Dialog>
            <DialogTrigger>
                <button
                    data-dialog-trigger
                    className="glass rounded-xl p-5 text-left border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 group flex flex-col h-full w-full"
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="bg-primary/10 rounded-lg p-2">
                            <Lightbulb className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded">
                            {getLR(tip.framework)}
                        </span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {getLR(tip.title)}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4 flex-grow">
                        {getLR(tip.description)}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-auto">
                        <User className="w-3 h-3" />
                        <span className="truncate">{getLR(tip.expert)}</span>
                    </div>
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-xl glass border-border/50 max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-primary/10 rounded-lg p-2">
                            <Lightbulb className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-bold text-primary">{getLR(tip.framework)}</span>
                    </div>
                    <DialogTitle className="text-2xl font-bold leading-tight">{getLR(tip.title)}</DialogTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground py-1">
                        <User className="w-4 h-4" />
                        <span>{getLR(tip.expert)}</span>
                    </div>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Description */}
                    <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest flex items-center gap-2">
                            <ArrowRight className="w-3 h-3 text-primary" />
                            How it works
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {getLR(tip.description)}
                        </p>
                    </div>

                    {/* Actionable Steps */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest flex items-center gap-2">
                            <ArrowRight className="w-3 h-3 text-primary" />
                            Actionable Steps
                        </h4>
                        <div className="grid gap-2">
                            {tip.actionableSteps.map((step, i) => (
                                <div key={i} className="flex gap-3 bg-white/5 rounded-lg p-3 items-start border border-border/20">
                                    <div className="bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {i + 1}
                                    </div>
                                    <p className="text-sm text-foreground/90">{getLR(step)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Example Script */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest flex items-center gap-2">
                            <ArrowRight className="w-3 h-3 text-primary" />
                            Say this, Not that
                        </h4>

                        <div className="space-y-3">
                            <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 space-y-2">
                                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-tighter">
                                    <XCircle className="w-3 h-3" />
                                    Don&apos;t say
                                </div>
                                <p className="text-sm text-muted-foreground italic">&quot;{getLR(tip.exampleScript.bad)}&quot;</p>
                            </div>

                            <div className="relative group/script">
                                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-tighter">
                                            <CheckCircle2 className="w-3 h-3" />
                                            Try this
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-6 w-6 opacity-0 group-hover/script:opacity-100 transition-opacity"
                                            onClick={() => copyToClipboard(getLR(tip.exampleScript.good))}
                                        >
                                            {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                        </Button>
                                    </div>
                                    <p className="text-sm text-foreground/90 font-medium">
                                        &quot;{getLR(tip.exampleScript.good)}&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <DialogClose className="bg-transparent border border-border/50 hover:bg-white/5 text-foreground px-4 py-2 rounded-lg text-xs transition-colors">
                        Close
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}
