'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useFlashcardStore } from '@/store/flashcardStore';
import { Button } from '@/components/ui/button';
import { FlashcardList } from '@/components/flashcards/FlashcardList';
import { FlashcardStudy } from '@/components/flashcards/FlashcardStudy';
import { ArrowLeft, BookOpen, Trash2, Download } from 'lucide-react';
import Link from 'next/link';
import { Flashcard, Category } from '@/types';

export default function FlashcardsPage() {
    const { language, t } = useLanguage();
    const { flashcards, clearAll } = useFlashcardStore();
    const [studyMode, setStudyMode] = useState(false);
    const [selectedCards, setSelectedCards] = useState<Flashcard[]>([]);
    const [filterCategory, setFilterCategory] = useState<Category | 'all'>('all');

    const filteredCards =
        filterCategory === 'all'
            ? flashcards
            : flashcards.filter((card) => card.category === filterCategory);

    const categories: (Category | 'all')[] = ['all', 'Sales', 'Executive', 'Social', 'Dating'];

    const handleStudyAll = () => {
        setSelectedCards(filteredCards);
        setStudyMode(true);
    };

    const handleStudyCard = (cards: Flashcard[]) => {
        setSelectedCards(cards);
        setStudyMode(true);
    };

    const handleExport = () => {
        const data = JSON.stringify(flashcards, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `flashcards-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    if (studyMode) {
        return (
            <main className="min-h-screen pt-20 pb-12">
                <div className="max-w-2xl mx-auto px-4 space-y-6">
                    <button
                        onClick={() => setStudyMode(false)}
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {language === 'en' ? 'Back to Library' : 'Volver a la Biblioteca'}
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-foreground mb-2">
                            {language === 'en' ? 'Study Session' : 'Sesión de Estudio'}
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            {selectedCards.length}{' '}
                            {language === 'en' ? 'flashcard' : 'flashcard'}
                            {selectedCards.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                    <FlashcardStudy cards={selectedCards} onClose={() => setStudyMode(false)} />
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-20 pb-12">
            <div className="max-w-4xl mx-auto px-4 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {language === 'en' ? 'Dashboard' : 'Panel'}
                    </Link>
                    <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <BookOpen className="w-6 h-6" />
                        {language === 'en' ? 'Flashcards' : 'Tarjetas de Estudio'}
                    </h1>
                    <div className="w-20" />
                </div>

                {/* Stats */}
                {flashcards.length > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                        <div className="glass rounded-xl px-4 py-3 text-center">
                            <p className="text-sm text-muted-foreground">
                                {language === 'en' ? 'Total' : 'Total'}
                            </p>
                            <p className="text-2xl font-bold text-primary">{flashcards.length}</p>
                        </div>
                        <div className="glass rounded-xl px-4 py-3 text-center">
                            <p className="text-sm text-muted-foreground">
                                {language === 'en' ? 'Reviewed' : 'Revisadas'}
                            </p>
                            <p className="text-2xl font-bold text-accent">
                                {flashcards.filter((c) => c.reviewCount > 0).length}
                            </p>
                        </div>
                        <div className="glass rounded-xl px-4 py-3 text-center">
                            <p className="text-sm text-muted-foreground">
                                {language === 'en' ? 'Avg. Score' : 'Puntuación Prom.'}
                            </p>
                            <p className="text-2xl font-bold text-green-500">
                                {Math.round(
                                    flashcards.reduce((sum, c) => {
                                        if (c.reviewCount === 0) return sum;
                                        return sum + (c.correctCount / c.reviewCount) * 100;
                                    }, 0) / flashcards.filter((c) => c.reviewCount > 0).length
                                )}
                                %
                            </p>
                        </div>
                    </div>
                )}

                {/* Filter */}
                <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">
                        {language === 'en' ? 'Category' : 'Categoría'}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilterCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    filterCategory === cat
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                }`}
                            >
                                {cat === 'all'
                                    ? language === 'en'
                                        ? 'All'
                                        : 'Todas'
                                    : cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                {flashcards.length === 0 ? (
                    <div className="glass rounded-xl p-12 text-center space-y-4">
                        <BookOpen className="w-12 h-12 text-muted-foreground mx-auto" />
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-2">
                                {language === 'en'
                                    ? 'No Flashcards Yet'
                                    : 'Aún no hay Flashcards'}
                            </h2>
                            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                                {language === 'en'
                                    ? 'Complete practice sessions or create flashcards from your pockets to get started.'
                                    : 'Completa sesiones de práctica o crea flashcards de tus pockets para comenzar.'}
                            </p>
                        </div>
                        <Link href="/scenarios">
                            <Button className="gap-2">
                                {language === 'en' ? 'Start Practice' : 'Comenzar Práctica'}
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="flex gap-2">
                            {filteredCards.length > 0 && (
                                <Button
                                    onClick={handleStudyAll}
                                    size="lg"
                                    className="flex-1 gap-2 bg-primary"
                                >
                                    <BookOpen className="w-4 h-4" />
                                    {language === 'en' ? 'Study All' : 'Estudiar Todos'} ({filteredCards.length})
                                </Button>
                            )}
                            <Button
                                onClick={handleExport}
                                variant="outline"
                                size="lg"
                                className="gap-2"
                            >
                                <Download className="w-4 h-4" />
                                {language === 'en' ? 'Export' : 'Exportar'}
                            </Button>
                        </div>

                        <FlashcardList
                            flashcards={filteredCards}
                            onStudy={handleStudyCard}
                        />

                        <div className="pt-4 border-t border-border/20">
                            <Button
                                onClick={() => {
                                    if (
                                        confirm(
                                            language === 'en'
                                                ? 'Are you sure? This will delete all flashcards.'
                                                : '¿Estás seguro? Esto eliminará todos los flashcards.'
                                        )
                                    ) {
                                        clearAll();
                                    }
                                }}
                                variant="destructive"
                                size="sm"
                                className="gap-2"
                            >
                                <Trash2 className="w-4 h-4" />
                                {language === 'en' ? 'Delete All' : 'Eliminar Todo'}
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
