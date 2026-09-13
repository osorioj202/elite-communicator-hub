'use client';

import { Flashcard } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { useFlashcardStore } from '@/store/flashcardStore';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Repeat2, RotateCcw } from 'lucide-react';
import { clsx } from 'clsx';

interface FlashcardStudyProps {
    cards: Flashcard[];
    onClose?: () => void;
}

export function FlashcardStudy({ cards, onClose }: FlashcardStudyProps) {
    const { language } = useLanguage();
    const { markReviewed } = useFlashcardStore();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

    if (cards.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-muted-foreground">
                    {language === 'en' ? 'No flashcards available' : 'No hay flashcards disponibles'}
                </p>
            </div>
        );
    }

    const currentCard = cards[currentIndex];
    const getLR = (str: any) => (language === 'en' ? str.en : str.es);
    const progress = Math.round(((currentIndex + 1) / cards.length) * 100);

    const handleCorrect = () => {
        markReviewed(currentCard.id, true);
        setStats((s) => ({ ...s, correct: s.correct + 1 }));
        goNext();
    };

    const handleIncorrect = () => {
        markReviewed(currentCard.id, false);
        setStats((s) => ({ ...s, incorrect: s.incorrect + 1 }));
        goNext();
    };

    const goNext = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsFlipped(false);
        }
    };

    const goPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsFlipped(false);
        }
    };

    const reset = () => {
        setCurrentIndex(0);
        setIsFlipped(false);
        setStats({ correct: 0, incorrect: 0 });
    };

    const isComplete = currentIndex >= cards.length - 1;

    return (
        <div className="space-y-6">
            {/* Progress bar */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                        {currentIndex + 1} / {cards.length}
                    </span>
                    <span className="text-muted-foreground">
                        ✓ {stats.correct} | ✗ {stats.incorrect}
                    </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Card */}
            <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={clsx(
                    'relative w-full aspect-video rounded-xl border-2 flex items-center justify-center cursor-pointer',
                    'transition-all duration-300 p-8 text-center',
                    isFlipped
                        ? 'bg-accent/10 border-accent'
                        : 'bg-primary/10 border-primary'
                )}
            >
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground font-medium">
                        {isFlipped
                            ? language === 'en'
                                ? 'Answer'
                                : 'Respuesta'
                            : language === 'en'
                                ? 'Question'
                                : 'Pregunta'}
                    </p>
                    <p
                        className={clsx(
                            'text-xl font-semibold transition-all duration-300',
                            isFlipped ? 'text-accent' : 'text-primary'
                        )}
                    >
                        {getLR(isFlipped ? currentCard.back : currentCard.front)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Click to flip' : 'Haz clic para girar'}
                    </p>
                </div>
            </div>

            {/* Controls */}
            {isComplete ? (
                <div className="space-y-4 text-center">
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                        <p className="text-2xl font-bold text-primary mb-2">
                            {language === 'en' ? 'Study Complete!' : '¡Estudio completado!'}
                        </p>
                        <p className="text-muted-foreground mb-4">
                            {language === 'en'
                                ? `You got ${stats.correct} out of ${cards.length} correct!`
                                : `¡Acertaste ${stats.correct} de ${cards.length}!`}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {language === 'en'
                                ? `Success rate: ${Math.round((stats.correct / cards.length) * 100)}%`
                                : `Tasa de acierto: ${Math.round((stats.correct / cards.length) * 100)}%`}
                        </p>
                    </div>
                    <Button onClick={reset} variant="default" className="w-full gap-2">
                        <Repeat2 className="w-4 h-4" />
                        {language === 'en' ? 'Study Again' : 'Estudiar de Nuevo'}
                    </Button>
                    {onClose && (
                        <Button onClick={onClose} variant="outline" className="w-full">
                            {language === 'en' ? 'Close' : 'Cerrar'}
                        </Button>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4">
                    <Button
                        onClick={handleIncorrect}
                        variant="outline"
                        className="gap-2 text-destructive hover:text-destructive"
                        disabled={!isFlipped}
                    >
                        <XCircle className="w-4 h-4" />
                        {language === 'en' ? 'Incorrect' : 'Incorrecto'}
                    </Button>
                    <Button
                        onClick={handleCorrect}
                        variant="default"
                        className="gap-2 bg-green-600 hover:bg-green-700"
                        disabled={!isFlipped}
                    >
                        <CheckCircle2 className="w-4 h-4" />
                        {language === 'en' ? 'Correct' : 'Correcto'}
                    </Button>
                </div>
            )}

            {/* Navigation */}
            <div className="flex gap-2">
                <Button
                    onClick={goPrev}
                    variant="ghost"
                    size="sm"
                    disabled={currentIndex === 0}
                    className="flex-1"
                >
                    ← {language === 'en' ? 'Previous' : 'Anterior'}
                </Button>
                <Button
                    onClick={goNext}
                    variant="ghost"
                    size="sm"
                    disabled={currentIndex >= cards.length - 1}
                    className="flex-1"
                >
                    {language === 'en' ? 'Next' : 'Siguiente'} →
                </Button>
            </div>
        </div>
    );
}
