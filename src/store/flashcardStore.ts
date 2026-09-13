'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Flashcard } from '@/types';

interface FlashcardStore {
    flashcards: Flashcard[];
    addFlashcard: (card: Flashcard) => void;
    addFlashcards: (cards: Flashcard[]) => void;
    removeFlashcard: (id: string) => void;
    markReviewed: (id: string, correct: boolean) => void;
    getFlashcard: (id: string) => Flashcard | undefined;
    getFlashcardsBySource: (sourceId: string) => Flashcard[];
    getFlashcardsByCategory: (category: string) => Flashcard[];
    clearAll: () => void;
}

export const useFlashcardStore = create<FlashcardStore>()(
    persist(
        (set, get) => ({
            flashcards: [],

            addFlashcard: (card) => {
                set((state) => {
                    if (state.flashcards.some((c) => c.id === card.id)) return state;
                    return {
                        flashcards: [card, ...state.flashcards],
                    };
                });
            },

            addFlashcards: (cards) => {
                set((state) => ({
                    flashcards: [...cards, ...state.flashcards],
                }));
            },

            removeFlashcard: (id) => {
                set((state) => ({
                    flashcards: state.flashcards.filter((c) => c.id !== id),
                }));
            },

            markReviewed: (id, correct) => {
                set((state) => ({
                    flashcards: state.flashcards.map((card) => {
                        if (card.id === id) {
                            return {
                                ...card,
                                lastReviewedAt: Date.now(),
                                reviewCount: card.reviewCount + 1,
                                correctCount: correct ? card.correctCount + 1 : card.correctCount,
                            };
                        }
                        return card;
                    }),
                }));
            },

            getFlashcard: (id) => {
                return get().flashcards.find((c) => c.id === id);
            },

            getFlashcardsBySource: (sourceId) => {
                return get().flashcards.filter((c) => c.sourceId === sourceId);
            },

            getFlashcardsByCategory: (category) => {
                return get().flashcards.filter((c) => c.category === category);
            },

            clearAll: () => {
                set({ flashcards: [] });
            },
        }),
        {
            name: 'flashcard-storage',
        }
    )
);
