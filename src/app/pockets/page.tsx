'use client';

import React, { useState, useMemo } from 'react';
import { POCKETS } from '@/data/pockets';
import { PocketCard } from '@/components/pockets/PocketCard';
import { PocketTypeFilter } from '@/components/pockets/PocketTypeFilter';
import { Category, Difficulty, PocketType, Pocket } from '@/types';
import { useSessionStore } from '@/store/sessionStore';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';
import {
    Search,
    Sparkles,
    X,
    Filter,
    Dices
} from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from '@/components/ui/dialog';

const CATEGORIES: (Category | 'All')[] = ['All', 'Sales', 'Executive', 'Social', 'Dating'];
const DIFFICULTIES: (Difficulty | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function PocketsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCat, setSelectedCat] = useState<Category | 'All'>('All');
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');
    const [selectedType, setSelectedType] = useState<PocketType | 'All' | 'Saved'>('All');
    const [randomPocket, setRandomPocket] = useState<Pocket | null>(null);
    const [isMounted, setIsMounted] = React.useState(false);

    const { savedPocketIds } = useSessionStore();
    const { t } = useLanguage();

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const filteredPockets = useMemo(() => {
        if (!isMounted) return [];
        return POCKETS.filter(pocket => {
            const s = searchQuery.toLowerCase();
            const matchesSearch =
                pocket.tags.some(t => t.toLowerCase().includes(s)) ||
                ('situation' in pocket && (pocket.situation.en.toLowerCase().includes(s) || pocket.situation.es.toLowerCase().includes(s))) ||
                ('title' in pocket && (pocket.title.en.toLowerCase().includes(s) || pocket.title.es.toLowerCase().includes(s))) ||
                ('instruction' in pocket && (pocket.instruction.en.toLowerCase().includes(s) || pocket.instruction.es.toLowerCase().includes(s)));

            const matchesCat = selectedCat === 'All' || pocket.category === selectedCat;
            const matchesDifficulty = selectedDifficulty === 'All' || pocket.difficulty === selectedDifficulty;

            const matchesType =
                selectedType === 'All' ||
                (selectedType === 'Saved' ? savedPocketIds.includes(pocket.id) : pocket.type === selectedType);

            return matchesSearch && matchesCat && matchesDifficulty && matchesType;
        });
    }, [searchQuery, selectedCat, selectedDifficulty, selectedType, savedPocketIds, isMounted]);

    const handleRandomize = () => {
        const randomIndex = Math.floor(Math.random() * filteredPockets.length);
        setRandomPocket(filteredPockets[randomIndex]);
    };

    return (
        <main className="min-h-screen pb-20 pt-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-primary/20 p-2 rounded-lg">
                                <Sparkles className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-sm font-bold text-primary uppercase tracking-widest">{t('navPockets')}</span>
                        </div>
                        <h1 className="text-4xl font-extrabold text-foreground tracking-tight">
                            {t('pocketsTitle').split(' ')[0]} <span className="text-primary">{t('pocketsTitle').split(' ')[1]}</span>
                        </h1>
                        <p className="text-muted-foreground mt-2 max-w-xl">
                            {t('pocketsSubtitle')}
                        </p>
                    </div>

                    <Dialog>
                        <DialogTrigger>
                            <Button
                                onClick={handleRandomize}
                                disabled={!isMounted || filteredPockets.length === 0}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-6 rounded-xl shadow-lg shadow-primary/20"
                            >
                                <Dices className="w-5 h-5" />
                                {t('pocketsRandom')}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                    {t('spontaneousPractice')}
                                </DialogTitle>
                            </DialogHeader>
                            <div className="py-4">
                                {randomPocket && <PocketCard pocket={randomPocket} />}
                            </div>
                            <div className="flex justify-between gap-3">
                                <Button variant="outline" onClick={handleRandomize} className="flex-grow">
                                    {t('pickAnother')}
                                </Button>
                                <DialogClose className="flex-grow bg-white/5 border border-border/50 hover:bg-white/10 rounded-lg text-sm">
                                    {t('close')}
                                </DialogClose>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Filters Section */}
                <div className="space-y-6 mb-10 bg-white/5 border border-border/50 p-6 rounded-2xl glass">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="relative flex-grow">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-50" />
                            <Input
                                type="text"
                                placeholder={t('pocketsSearch')}
                                className="pl-10 h-11 bg-black/20 border-border/50 focus:border-primary/50"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full"
                                >
                                    <X className="w-3 h-3 text-muted-foreground" />
                                </button>
                            )}
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap bg-black/20 p-1 rounded-xl border border-border/50">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCat(cat)}
                                    className={clsx(
                                        "px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase tracking-wider",
                                        selectedCat === cat
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {t(`cat${cat}` as keyof typeof translations.en)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Difficulty Tabs */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            {t('pocketsDifficulty')}
                        </span>
                        <div className="flex flex-wrap bg-black/20 p-1 rounded-xl border border-border/50">
                            {DIFFICULTIES.map(difficulty => (
                                <button
                                    key={difficulty}
                                    onClick={() => setSelectedDifficulty(difficulty)}
                                    className={clsx(
                                        "px-4 py-2 rounded-lg text-xs font-bold transition-all",
                                        selectedDifficulty === difficulty
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {difficulty === 'All'
                                        ? t('pocketsDifficultyAll')
                                        : t(`difficulty${difficulty}` as keyof typeof translations.en)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <PocketTypeFilter
                        selectedType={selectedType}
                        onTypeChange={setSelectedType}
                    />
                </div>

                {/* Grid */}
                {!isMounted ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0">
                        {[1, 2, 3].map(i => <div key={i} className="h-48 glass animate-pulse rounded-2xl" />)}
                    </div>
                ) : filteredPockets.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
                        {filteredPockets.map((pocket) => (
                            <PocketCard key={pocket.id} pocket={pocket} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 glass rounded-3xl border border-dashed border-border/50 animate-in fade-in">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                            <Filter className="w-8 h-8 text-muted-foreground opacity-20" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{t('pocketsNoResults')}</h3>
                        <p className="text-muted-foreground mt-2">{t('pocketsNoResultsDesc')}</p>
                        <Button
                            variant="link"
                            className="mt-4 text-primary"
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCat('All');
                                setSelectedDifficulty('All');
                                setSelectedType('All');
                            }}
                        >
                            {t('pocketsResetLabel')}
                        </Button>
                    </div>
                )}
            </div>
        </main>
    );
}
