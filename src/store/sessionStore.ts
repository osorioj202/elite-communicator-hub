'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Message, Scenario, SessionResult } from '@/types';

interface SessionStore {
    // Active session
    currentScenario: Scenario | null;
    messages: Message[];
    isRecording: boolean;
    isAIThinking: boolean;
    isAISpeaking: boolean;
    sessionStartTime: number | null;
    currentSessionId: string | null;

    // Persisted history
    sessionResults: SessionResult[];
    savedPocketIds: string[];

    // Actions
    startSession: (scenario: Scenario) => void;
    addMessage: (msg: Omit<Message, 'timestamp'>) => void;
    setIsRecording: (val: boolean) => void;
    setIsAIThinking: (val: boolean) => void;
    setIsAISpeaking: (val: boolean) => void;
    endSession: () => SessionResult;
    saveResult: (result: SessionResult) => void;
    getResult: (id: string) => SessionResult | undefined;
    clearCurrent: () => void;
    toggleSavePocket: (pocketId: string) => void;
    isPocketSaved: (pocketId: string) => boolean;
}

export const useSessionStore = create<SessionStore>()(
    persist(
        (set, get) => ({
            currentScenario: null,
            messages: [],
            isRecording: false,
            isAIThinking: false,
            isAISpeaking: false,
            sessionStartTime: null,
            currentSessionId: null,
            sessionResults: [],
            savedPocketIds: [],

            startSession: (scenario) => {
                const id = `session-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
                set({
                    currentScenario: scenario,
                    messages: [],
                    isRecording: false,
                    isAIThinking: false,
                    isAISpeaking: false,
                    sessionStartTime: Date.now(),
                    currentSessionId: id,
                });
            },

            addMessage: (msg) => {
                set((state) => ({
                    messages: [...state.messages, { ...msg, timestamp: Date.now() }],
                }));
            },

            setIsRecording: (val) => set({ isRecording: val }),
            setIsAIThinking: (val) => set({ isAIThinking: val }),
            setIsAISpeaking: (val) => set({ isAISpeaking: val }),

            endSession: () => {
                const state = get();
                const durationSeconds = state.sessionStartTime
                    ? Math.round((Date.now() - state.sessionStartTime) / 1000)
                    : 0;
                const result: SessionResult = {
                    id: state.currentSessionId ?? `session-${Date.now()}`,
                    scenarioId: state.currentScenario?.id ?? 'unknown',
                    scenarioTitle: state.currentScenario?.title ?? { en: 'Unknown', es: 'Desconocido' },
                    transcript: state.messages,
                    feedback: null,
                    durationSeconds,
                    createdAt: Date.now(),
                };
                return result;
            },

            saveResult: (result) => {
                set((state) => ({
                    sessionResults: [result, ...state.sessionResults].slice(0, 50), // keep last 50
                }));
            },

            getResult: (id) => {
                return get().sessionResults.find((r) => r.id === id);
            },

            clearCurrent: () => {
                set({
                    currentScenario: null,
                    messages: [],
                    isRecording: false,
                    isAIThinking: false,
                    isAISpeaking: false,
                    sessionStartTime: null,
                    currentSessionId: null,
                });
            },

            toggleSavePocket: (pocketId: string) => {
                set((state) => ({
                    savedPocketIds: state.savedPocketIds.includes(pocketId)
                        ? state.savedPocketIds.filter(id => id !== pocketId)
                        : [...state.savedPocketIds, pocketId]
                }));
            },

            isPocketSaved: (pocketId: string) => {
                return get().savedPocketIds.includes(pocketId);
            },
        }),
        {
            name: 'sdr-voice-coach-storage',
            partialize: (state) => ({
                sessionResults: state.sessionResults,
                savedPocketIds: state.savedPocketIds
            }),
        }
    )
);
