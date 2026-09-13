'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { SCENARIOS } from '@/data/scenarios';
import { ScenarioCard } from '@/components/scenarios/ScenarioCard';
import { useSessionStore } from '@/store/sessionStore';
import { Target } from 'lucide-react';
import { Category } from '@/types';
import { clsx } from 'clsx';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

function ScenariosContent() {
    const searchParams = useSearchParams();
    const initialCat = searchParams.get('cat') as Category | 'All';
    const [selectedCat, setSelectedCat] = useState<Category | 'All'>(initialCat && ['Sales', 'Executive', 'Social', 'Dating'].includes(initialCat) ? initialCat : 'All');
    const { sessionResults } = useSessionStore();
    const { t } = useLanguage();

    useEffect(() => {
        const cat = searchParams.get('cat');
        if (cat && ['Sales', 'Executive', 'Social', 'Dating'].includes(cat)) {
            setSelectedCat(cat as Category);
        }
    }, [searchParams]);

    const getStats = (scenarioId: string) => {
        const sessions = sessionResults.filter((r) => r.scenarioId === scenarioId);
        const scores = sessions.filter((r) => r.feedback?.score != null).map((r) => r.feedback!.score);
        return {
            completedCount: sessions.length,
            bestScore: scores.length > 0 ? Math.max(...scores) : undefined,
        };
    };

    const categories: (Category | 'All')[] = ['All', 'Sales', 'Executive', 'Social', 'Dating'];

    const filteredScenarios = selectedCat === 'All'
        ? SCENARIOS
        : SCENARIOS.filter((s) => s.category === selectedCat);

    return (
        <div className="max-w-4xl mx-auto px-4 space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-sm font-medium mb-2">
                    <Target className="w-4 h-4" />
                    {t('navPractice')}
                </div>
                <h1 className="text-3xl font-bold text-foreground">
                    {t('scenariosTitle')}
                </h1>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                    {t('scenariosSubtitle')}
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCat(cat)}
                        className={clsx(
                            'px-4 py-2 rounded-full text-sm font-medium transition-all',
                            selectedCat === cat
                                ? 'bg-primary text-primary-foreground shadow-md'
                                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                        )}
                    >
                        {t(`cat${cat}` as keyof typeof translations.en)}
                    </button>
                ))}
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredScenarios.map((scenario) => {
                    const stats = getStats(scenario.id);
                    return (
                        <ScenarioCard
                            key={scenario.id}
                            scenario={scenario}
                            completedCount={stats.completedCount}
                            bestScore={stats.bestScore}
                        />
                    );
                })}
            </div>

            {filteredScenarios.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    <p>No scenarios found for this category yet.</p>
                </div>
            )}
        </div>
    );
}

export default function ScenariosPage() {
    const { t } = useLanguage();
    return (
        <main className="min-h-screen pt-20 pb-12">
            <Suspense fallback={<div className="text-center pt-20">{t('loading')}</div>}>
                <ScenariosContent />
            </Suspense>
        </main>
    );
}
