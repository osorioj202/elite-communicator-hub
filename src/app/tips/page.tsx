'use client';

import { useState, useMemo } from 'react';
import { TIPS } from '@/data/tips';
import { TipCard } from '@/components/tips/TipCard';
import { Category } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import {
    Search,
    Sparkles,
    X
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { clsx } from 'clsx';

export default function TipsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCat, setSelectedCat] = useState<Category | 'All'>('All');
    const { t } = useLanguage();

    const categories: (Category | 'All')[] = ['All', 'Sales', 'Executive', 'Social', 'Dating'];

    const filteredTips = useMemo(() => {
        const s = searchQuery.toLowerCase();
        return TIPS.filter(tip => {
            const matchesSearch =
                tip.title.en.toLowerCase().includes(s) || tip.title.es.toLowerCase().includes(s) ||
                tip.framework.en.toLowerCase().includes(s) || tip.framework.es.toLowerCase().includes(s) ||
                tip.expert.en.toLowerCase().includes(s) || tip.expert.es.toLowerCase().includes(s);
            const matchesCategory = selectedCat === 'All' || tip.category === selectedCat;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCat]);

    return (
        <main className="min-h-screen pt-20 pb-12">
            <div className="max-w-6xl mx-auto px-4 space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-sm font-medium mb-2">
                        <Sparkles className="w-4 h-4" />
                        {t('navExpertTips')}
                    </div>
                    <h1 className="text-4xl font-bold text-foreground">{t('tipsTitle')}</h1>
                    <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                        {t('tipsSubtitle')}
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass rounded-2xl p-4 shadow-xl shadow-black/20">
                    {/* Search */}
                    <div className="relative w-full md:max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder={t('tipsSearch')}
                            className="pl-10 bg-white/5 border-border/50 focus:border-primary/50 transition-colors"
                            value={searchQuery}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-3 h-3 text-muted-foreground" />
                            </button>
                        )}
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 bg-black/20 p-1 rounded-xl">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCat(cat)}
                                className={clsx(
                                    'px-4 py-1.5 rounded-lg text-xs font-semibold transition-all',
                                    selectedCat === cat
                                        ? 'bg-primary text-primary-foreground shadow-md'
                                        : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
                                )}
                            >
                                {t(`cat${cat}` as keyof typeof translations.en)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                {filteredTips.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredTips.map((tip) => (
                            <TipCard key={tip.id} tip={tip} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 glass rounded-3xl border-dashed border-border/50">
                        <div className="bg-muted/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{t('tipsSearch')} - {t('pocketsNoResults')}</h3>
                        <p className="text-sm text-muted-foreground">{t('pocketsNoResultsDesc')}</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCat('All'); }}
                            className="mt-4 text-sm text-primary font-semibold hover:underline"
                        >
                            {t('pocketsResetLabel')}
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
