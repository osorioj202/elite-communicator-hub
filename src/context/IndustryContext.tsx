'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Industry } from '@/types';

interface IndustryContextType {
    selectedIndustry: Industry;
    setSelectedIndustry: (industry: Industry) => void;
}

const IndustryContext = createContext<IndustryContextType | undefined>(undefined);

export function IndustryProvider({ children }: { children: React.ReactNode }) {
    const [selectedIndustry, setSelectedIndustryState] = useState<Industry>('general');

    useEffect(() => {
        // Load saved industry from localStorage
        const saved = localStorage.getItem('selectedIndustry') as Industry | null;
        if (saved && ['tech', 'real-estate', 'renewable-energy', 'finance', 'healthcare', 'general'].includes(saved)) {
            setSelectedIndustryState(saved);
        } else {
            setSelectedIndustryState('general');
        }
    }, []);

    const setSelectedIndustry = (industry: Industry) => {
        setSelectedIndustryState(industry);
        localStorage.setItem('selectedIndustry', industry);
    };

    return (
        <IndustryContext.Provider value={{ selectedIndustry, setSelectedIndustry }}>
            {children}
        </IndustryContext.Provider>
    );
}

export function useIndustry() {
    const context = useContext(IndustryContext);
    if (context === undefined) {
        throw new Error('useIndustry must be used within an IndustryProvider');
    }
    return context;
}
