'use client';

import { Flashcard, LocalizedString } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { useFlashcardStore } from '@/store/flashcardStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Play } from 'lucide-react';

interface FlashcardListProps {
    flashcards: Flashcard[];
    onStudy: (cards: Flashcard[]) => void;
}

export function FlashcardList({ flashcards, onStudy }: FlashcardListProps) {
    const { language } = useLanguage();
    const { removeFlashcard } = useFlashcardStore();

    const getLR = (str: LocalizedString) => (language === 'en' ? str.en : str.es);
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Beginner':
                return 'bg-green-500/10 text-green-500 border-green-500/30';
            case 'Intermediate':
                return 'bg-amber-500/10 text-amber-500 border-amber-500/30';
            case 'Advanced':
                return 'bg-red-500/10 text-red-500 border-red-500/30';
            default:
                return 'bg-muted text-muted-foreground';
        }
    };

    const getSuccessRate = (card: Flashcard) => {
        if (card.reviewCount === 0) return '-';
        return `${Math.round((card.correctCount / card.reviewCount) * 100)}%`;
    };

    if (flashcards.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-muted-foreground">
                    {language === 'en' ? 'No flashcards yet' : 'Aún no hay flashcards'}
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {flashcards.map((card) => (
                <div key={card.id} className="glass rounded-lg p-4 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <Badge className={getDifficultyColor(card.difficulty)}>
                                {card.difficulty}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                                {card.source === 'feedback'
                                    ? language === 'en'
                                        ? 'From Feedback'
                                        : 'Del Feedback'
                                    : card.source === 'pocket'
                                        ? language === 'en'
                                            ? 'From Pocket'
                                            : 'Del Pocket'
                                        : language === 'en'
                                            ? 'From Tip'
                                            : 'Del Tip'}
                            </Badge>
                        </div>
                        <p className="font-semibold text-foreground line-clamp-2 mb-1">
                            {getLR(card.front)}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                            {getLR(card.back)}
                        </p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                            <span>
                                {language === 'en' ? 'Reviews' : 'Revisiones'}: {card.reviewCount}
                            </span>
                            <span>
                                {language === 'en' ? 'Success' : 'Aciertos'}: {getSuccessRate(card)}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                        <Button
                            onClick={() => onStudy([card])}
                            size="sm"
                            variant="default"
                            className="gap-1"
                        >
                            <Play className="w-3 h-3" />
                            {language === 'en' ? 'Study' : 'Estudiar'}
                        </Button>
                        <Button
                            onClick={() => removeFlashcard(card.id)}
                            size="sm"
                            variant="ghost"
                            className="text-destructive hover:text-destructive"
                        >
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
