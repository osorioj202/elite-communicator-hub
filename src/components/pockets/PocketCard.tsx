'use client';

import React from 'react';
import { Pocket, LocalizedString } from '@/types';
import { useSessionStore } from '@/store/sessionStore';
import { useLanguage } from '@/context/LanguageContext';
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
    Star,
    Tag,
    ChevronRight,
    MapPin,
    Clock,
    BarChart3
} from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '@/components/ui/button';

interface PocketCardProps {
    pocket: Pocket;
}

const typeConfig = {
    phrase: { icon: Quote, color: 'text-blue-400', bg: 'bg-blue-400/10', label: 'Phrase' },
    story: { icon: BookOpen, color: 'text-purple-400', bg: 'bg-purple-400/10', label: 'Story' },
    question: { icon: HelpCircle, color: 'text-emerald-400', bg: 'bg-emerald-400/10', label: 'Question' },
    recovery: { icon: RotateCcw, color: 'text-rose-400', bg: 'bg-rose-400/10', label: 'Recovery' },
    transition: { icon: FastForward, color: 'text-amber-400', bg: 'bg-amber-400/10', label: 'Transition' },
    delivery: { icon: Mic2, color: 'text-indigo-400', bg: 'bg-indigo-400/10', label: 'Delivery' },
    closing: { icon: LogOut, color: 'text-orange-400', bg: 'bg-orange-400/10', label: 'Closing' },
    listening: { icon: Ear, color: 'text-cyan-400', bg: 'bg-cyan-400/10', label: 'Listening' },
    confidence: { icon: Award, color: 'text-yellow-400', bg: 'bg-yellow-400/10', label: 'Confidence' },
    cultural: { icon: Globe, color: 'text-slate-400', bg: 'bg-slate-400/10', label: 'Cultural' },
    'user-saved': { icon: Star, color: 'text-primary', bg: 'bg-primary/10', label: 'Custom' },
};

export function PocketCard({ pocket }: PocketCardProps) {
    const { toggleSavePocket, isPocketSaved } = useSessionStore();
    const { language } = useLanguage();
    const saved = isPocketSaved(pocket.id);
    const config = typeConfig[pocket.type];
    const Icon = config.icon;

    // Helper to get localized text
    const getLR = (str: LocalizedString | string | undefined) => {
        if (!str) return '';
        if (typeof str === 'string') return str;
        return str[language] || str['en'] || '';
    };

    return (
        <div className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all group flex flex-col h-full relative overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className={clsx("p-2 rounded-xl", config.bg)}>
                        <Icon className={clsx("w-5 h-5", config.color)} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-70">
                            <span>{config.label}</span>
                            <span className="opacity-30">•</span>
                            <span>{pocket.category}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-[9px] font-medium text-muted-foreground/60">
                            <div className="flex items-center gap-1">
                                <BarChart3 className="w-2.5 h-2.5" />
                                <span className={clsx(
                                    pocket.difficulty === 'Beginner' ? 'text-emerald-400' :
                                        pocket.difficulty === 'Intermediate' ? 'text-blue-400' : 'text-rose-400'
                                )}>{pocket.difficulty}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-2.5 h-2.5" />
                                <span>{pocket.estimatedPracticeTime} min</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                            {pocket.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-white/5">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => toggleSavePocket(pocket.id)}
                    className={clsx(
                        "p-2 rounded-full transition-colors",
                        saved ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                >
                    <Star className={clsx("w-4 h-4", saved && "fill-current")} />
                </button>
            </div>

            {/* Content Switch */}
            <div className="flex-grow space-y-4">
                {pocket.type === 'phrase' && (
                    <div className="space-y-3">
                        <div className="text-xs font-semibold text-muted-foreground uppercase opacity-50 tracking-tighter">Situation: {getLR(pocket.situation)}</div>
                        <div className="bg-rose-500/5 border border-rose-500/20 p-3 rounded-xl">
                            <div className="text-[10px] text-rose-400 font-bold uppercase mb-1">Avoid</div>
                            <p className="text-sm text-muted-foreground">&quot;{getLR(pocket.fillerToAvoid)}&quot;</p>
                        </div>
                        <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                            <div className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Say This</div>
                            <p className="text-sm text-foreground font-medium italic">&quot;{getLR(pocket.professionalReplace)}&quot;</p>
                        </div>
                    </div>
                )}

                {pocket.type === 'story' && (
                    <div className="space-y-3">
                        <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{getLR(pocket.title)}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {getLR(pocket.story)}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-primary font-medium">
                            <ChevronRight className="w-3 h-3" />
                            Takeaway: {getLR(pocket.keyTakeaway)}
                        </div>
                    </div>
                )}

                {pocket.type === 'question' && (
                    <div className="space-y-3">
                        <div className="text-xs font-semibold text-muted-foreground uppercase opacity-50 tracking-tighter italic">&quot;{getLR(pocket.situation)}&quot;</div>
                        <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl relative">
                            <Quote className="absolute -top-2 -left-2 w-4 h-4 text-primary opacity-30" />
                            <p className="text-base text-foreground font-semibold leading-snug">
                                {getLR(pocket.question)}
                            </p>
                        </div>
                        <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                            <Tag className="w-3 h-3" /> Purpose: {getLR(pocket.purpose)}
                        </div>
                    </div>
                )}

                {pocket.type === 'recovery' && (
                    <div className="space-y-3">
                        <div className="text-xs font-bold text-rose-400 uppercase tracking-widest">{getLR(pocket.trigger)}</div>
                        <div className="glass p-4 rounded-xl border-l-4 border-rose-400">
                            <p className="text-sm text-foreground font-medium italic">&quot;{getLR(pocket.recoveryPhrase)}&quot;</p>
                        </div>
                        {pocket.followUp && <p className="text-[11px] text-muted-foreground">{getLR(pocket.followUp)}</p>}
                    </div>
                )}

                {pocket.type === 'transition' && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground">
                            <span>{getLR(pocket.from)}</span>
                            <FastForward className="w-3 h-3" />
                            <span>{getLR(pocket.to)}</span>
                        </div>
                        <div className="bg-amber-400/5 border border-amber-400/20 p-3 rounded-xl">
                            <p className="text-sm text-amber-100 font-medium">&quot;{getLR(pocket.bridgePhrase)}&quot;</p>
                        </div>
                        <p className="text-[11px] text-muted-foreground opacity-70 italic">Ex: {getLR(pocket.example)}</p>
                    </div>
                )}

                {pocket.type === 'delivery' && (
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="bg-indigo-400/20 text-indigo-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">{getLR(pocket.focusArea)}</span>
                        </div>
                        <p className="text-sm text-foreground font-medium leading-relaxed">
                            {getLR(pocket.instruction)}
                        </p>
                        {pocket.scienceNote && (
                            <div className="text-[10px] text-muted-foreground bg-white/5 p-2 rounded-lg border border-white/5">
                                💡 {getLR(pocket.scienceNote)}
                            </div>
                        )}
                    </div>
                )}

                {pocket.type === 'closing' && (
                    <div className="space-y-3">
                        <div className="text-xs font-bold text-orange-400 uppercase">{getLR(pocket.objective)}</div>
                        <div className="bg-orange-400/5 border border-orange-400/20 p-4 rounded-xl">
                            <p className="text-base text-foreground font-semibold italic">&quot;{getLR(pocket.phrase)}&quot;</p>
                        </div>
                    </div>
                )}

                {pocket.type === 'listening' && (
                    <div className="space-y-3">
                        <div className="font-bold text-cyan-400">{getLR(pocket.technique)}</div>
                        <p className="text-[11px] text-muted-foreground">{getLR(pocket.howToApply)}</p>
                        <div className="bg-cyan-400/10 p-3 rounded-xl border border-cyan-400/20">
                            <p className="text-sm text-cyan-100 italic">&quot;{getLR(pocket.examplePhrase)}&quot;</p>
                        </div>
                    </div>
                )}

                {pocket.type === 'confidence' && (
                    <div className="space-y-3">
                        <h4 className="font-bold text-foreground leading-tight">{getLR(pocket.title)}</h4>
                        <p className="text-sm text-muted-foreground">
                            {getLR(pocket.instruction)}
                        </p>
                        {pocket.scienceNote && <p className="text-[10px] text-yellow-400/70 border-t border-yellow-400/10 pt-2 tracking-tight">{getLR(pocket.scienceNote)}</p>}
                    </div>
                )}

                {pocket.type === 'cultural' && (
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-400">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs font-bold uppercase">{getLR(pocket.region)}</span>
                        </div>
                        <div className="bg-slate-400/5 p-3 rounded-xl border border-slate-400/20">
                            <div className="text-[9px] text-slate-400 font-bold uppercase mb-1">Tip</div>
                            <p className="text-xs text-foreground">{getLR(pocket.tip)}</p>
                        </div>
                        <div className="text-[9px] text-rose-400 font-bold uppercase mb-1 ml-1">Avoid: {getLR(pocket.avoid)}</div>
                    </div>
                )}

                {pocket.type === 'user-saved' && (
                    <div className="space-y-3">
                        <div className="text-xs font-bold text-primary uppercase tracking-widest">Saved Note</div>
                        <div className="glass p-4 rounded-xl border-l-4 border-primary">
                            <p className="text-sm text-foreground italic">{pocket.customNote || "No notes added yet."}</p>
                        </div>
                        <p className="text-[10px] text-muted-foreground italic">Saved {new Date(pocket.savedAt).toLocaleDateString()}</p>
                    </div>
                )}
            </div>

            {/* Footer / Action */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-[10px] h-7 px-2 hover:bg-primary/10 hover:text-primary"
                    onClick={() => navigator.clipboard.writeText(
                        pocket.type === 'phrase' ? getLR(pocket.professionalReplace) :
                            pocket.type === 'question' ? getLR(pocket.question) :
                                pocket.type === 'closing' ? getLR(pocket.phrase) :
                                    pocket.type === 'recovery' ? getLR(pocket.recoveryPhrase) :
                                        pocket.type === 'listening' ? getLR(pocket.examplePhrase) :
                                            pocket.type === 'transition' ? getLR(pocket.bridgePhrase) :
                                                'instruction' in pocket ? getLR(pocket.instruction) : pocket.id
                    )}
                >
                    Copy Technique
                </Button>

                {pocket.relatedScenarioIds && pocket.relatedScenarioIds.length > 0 && (
                    <div className="flex items-center gap-1 text-[9px] text-muted-foreground opacity-50">
                        <BarChart3 className="w-3 h-3" />
                        <span>{pocket.relatedScenarioIds.length} Scenarios</span>
                    </div>
                )}
            </div>
        </div>
    );
}
