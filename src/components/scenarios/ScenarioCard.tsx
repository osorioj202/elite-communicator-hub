import { Scenario, LocalizedString } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';

interface ScenarioCardProps {
    scenario: Scenario;
    completedCount?: number;
    bestScore?: number;
}

const difficultyColors: Record<string, string> = {
    Beginner: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    Intermediate: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    Advanced: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
};

export function ScenarioCard({ scenario, completedCount = 0, bestScore }: ScenarioCardProps) {
    const { language, t } = useLanguage();

    const getLR = (str: LocalizedString | string | undefined) => {
        if (!str) return '';
        if (typeof str === 'string') return str;
        return str[language] || str['en'] || '';
    };

    return (
        <Card className="glass border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
            <CardContent className="p-6 flex flex-col h-full gap-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <div className="text-3xl">{scenario.icon}</div>
                    <Badge
                        variant="outline"
                        className={clsx('text-xs font-medium border', difficultyColors[scenario.difficulty])}
                    >
                        {scenario.difficulty}
                    </Badge>
                </div>

                {/* Title + description */}
                <div className="flex-1">
                    <h3 className="font-semibold text-base text-foreground mb-1">{getLR(scenario.title)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{getLR(scenario.description)}</p>
                </div>

                {/* Tips */}
                <ul className="space-y-1">
                    {scenario.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                            {getLR(tip)}
                        </li>
                    ))}
                </ul>

                {/* Stats + CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="text-xs text-muted-foreground">
                        {completedCount > 0 ? (
                            <span>
                                {completedCount} {t('sessions')}
                                {bestScore != null && (
                                    <span className="ml-2 text-primary font-medium">{t('bestScore')}: {bestScore}/10</span>
                                )}
                            </span>
                        ) : (
                            <span>{t('notPracticed')}</span>
                        )}
                    </div>
                    <Button
                        asChild
                        size="sm"
                        className="gap-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40"
                        variant="ghost"
                    >
                        <Link href={`/practice/${scenario.id}`}>
                            {t('practice')}
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
