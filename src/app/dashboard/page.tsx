'use client';

import { useSessionStore } from '@/store/sessionStore';
import { SessionResult } from '@/types';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, TrendingUp, Award, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { SCENARIOS } from '@/data/scenarios';
import { LocalizedString } from '@/types';

function ScoreBadge({ score }: { score: number | null }) {
    if (score == null) return <Badge variant="outline" className="text-muted-foreground">No score</Badge>;
    const color =
        score >= 8 ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' :
            score >= 6 ? 'bg-blue-500/15 text-blue-400 border-blue-500/30' :
                score >= 4 ? 'bg-amber-500/15 text-amber-400 border-amber-500/30' :
                    'bg-rose-500/15 text-rose-400 border-rose-500/30';
    return <Badge variant="outline" className={clsx('font-bold border', color)}>{score}/10</Badge>;
}

function TrendChart({ scores }: { scores: number[] }) {
    if (scores.length < 2) return null;
    const w = 200, h = 50;
    const min = 0, max = 10;
    const step = w / (scores.length - 1);
    const points = scores.map((s, i) => {
        const x = i * step;
        const y = h - ((s - min) / (max - min)) * h;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="mt-4">
            <p className="text-xs text-muted-foreground mb-2">Score trend</p>
            <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: 50 }}>
                <polyline
                    points={points}
                    fill="none"
                    stroke="hsl(213 94% 68%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {scores.map((s, i) => (
                    <circle
                        key={i}
                        cx={i * step}
                        cy={h - ((s - min) / (max - min)) * h}
                        r="3"
                        fill="hsl(213 94% 68%)"
                    />
                ))}
            </svg>
        </div>
    );
}

export default function DashboardPage() {
    const { sessionResults } = useSessionStore();
    const { language, t } = useLanguage();

    const getLR = (str: LocalizedString | string | undefined) => {
        if (!str) return '';
        if (typeof str === 'string') return str;
        return str[language] || str['en'] || '';
    };

    const totalSessions = sessionResults.length;
    const scores = sessionResults.filter((r) => r.feedback?.score != null).map((r) => r.feedback!.score);
    const avgScore = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : null;
    const bestScore = scores.length > 0 ? Math.max(...scores) : null;

    // Group by scenario
    const byScenario: Record<string, SessionResult[]> = {};
    sessionResults.forEach((r) => {
        if (!byScenario[r.scenarioId]) byScenario[r.scenarioId] = [];
        byScenario[r.scenarioId].push(r);
    });

    const recentSessions = sessionResults.slice(0, 10);

    return (
        <main className="min-h-screen pt-20 pb-12">
            <div className="max-w-3xl mx-auto px-4 space-y-8">
                {/* Title */}
                <div>
                    <h1 className="text-2xl font-bold text-foreground">{t('dashTitle')}</h1>
                    <p className="text-muted-foreground text-sm mt-1">{t('dashSubtitle')}</p>
                </div>

                {totalSessions === 0 ? (
                    <div className="glass rounded-2xl p-12 text-center flex flex-col items-center gap-4">
                        <div className="text-5xl">🎙️</div>
                        <h2 className="text-lg font-semibold text-foreground">{t('dashNoSessions')}</h2>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Start your first practice call to track your progress and see your scores here.
                        </p>
                        <Button asChild className="gap-2 mt-2">
                            <Link href="/scenarios">
                                <Target className="w-4 h-4" /> Start Practicing
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <>
                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: t('dashRecentSessions'), value: totalSessions, icon: Target, color: 'text-primary' },
                                { label: t('dashAvgScore'), value: avgScore ? `${avgScore}/10` : '—', icon: TrendingUp, color: 'text-accent' },
                                { label: t('dashBestScore'), value: bestScore != null ? `${bestScore}/10` : '—', icon: Award, color: 'text-amber-400' },
                            ].map(({ label, value, icon: Icon, color }) => (
                                <Card key={label} className="glass border-border/50">
                                    <CardContent className="p-4 flex flex-col gap-2">
                                        <Icon className={clsx('w-4 h-4', color)} />
                                        <p className="text-xl font-bold text-foreground">{value}</p>
                                        <p className="text-xs text-muted-foreground">{label}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Trend chart */}
                        {scores.length >= 2 && (
                            <div className="glass rounded-xl px-6 py-5">
                                <p className="text-sm font-semibold text-foreground mb-1">{t('dashScoreProgression')}</p>
                                <p className="text-xs text-muted-foreground mb-3">
                                    {t('dashLastSessions').replace('{{count}}', scores.length.toString())}
                                </p>
                                <TrendChart scores={[...scores].reverse()} />
                            </div>
                        )}

                        {/* Scenario breakdown */}
                        <div>
                            <h2 className="text-sm font-semibold text-foreground mb-3">{t('dashByScenario')}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {SCENARIOS.map((sc) => {
                                    const sessions = byScenario[sc.id] ?? [];
                                    const scScores = sessions.filter((s) => s.feedback?.score != null).map((s) => s.feedback!.score);
                                    const best = scScores.length > 0 ? Math.max(...scScores) : null;
                                    return (
                                        <Link key={sc.id} href={`/practice/${sc.id}`} className="glass rounded-xl p-4 flex items-center gap-3 hover:border-primary/30 border border-border/50 transition-all group">
                                            <span className="text-2xl">{sc.icon}</span>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-foreground">{getLR(sc.title)}</p>
                                                <p className="text-xs text-muted-foreground">{sessions.length} {t('sessions')}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <ScoreBadge score={best} />
                                                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Recent sessions */}
                        <div>
                            <h2 className="text-sm font-semibold text-foreground mb-3">Recent Sessions</h2>
                            <div className="space-y-2">
                                {recentSessions.map((session) => (
                                    <Link
                                        key={session.id}
                                        href={`/feedback/${session.id}`}
                                        className="glass rounded-xl px-5 py-4 flex items-center gap-4 hover:border-primary/30 border border-border/50 transition-all group"
                                    >
                                        <span className="text-xl">
                                            {SCENARIOS.find((s) => s.id === session.scenarioId)?.icon ?? '📞'}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-foreground truncate">{getLR(session.scenarioTitle)}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(session.createdAt).toLocaleDateString()} · {session.transcript.length} {t('feedbackTurns')}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ScoreBadge score={session.feedback?.score ?? null} />
                                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
