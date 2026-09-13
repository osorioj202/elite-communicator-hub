'use client';

import { useIndustry } from '@/context/IndustryContext';
import { useLanguage } from '@/context/LanguageContext';
import { INDUSTRIES } from '@/data/industries';
import { Industry } from '@/types';
import { clsx } from 'clsx';

export function IndustrySelector() {
    const { selectedIndustry, setSelectedIndustry } = useIndustry();
    const { language } = useLanguage();

    const industries = Object.values(INDUSTRIES);

    return (
        <div className="w-full space-y-3">
            <label className="text-sm font-semibold text-foreground">
                {language === 'en' ? 'Industry / Sector' : 'Industria / Sector'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {industries.map((industry) => {
                    const isSelected = selectedIndustry === industry.id;
                    return (
                        <button
                            key={industry.id}
                            onClick={() => setSelectedIndustry(industry.id as Industry)}
                            className={clsx(
                                'flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200',
                                isSelected
                                    ? 'border-primary bg-primary/15 text-primary shadow-lg'
                                    : 'border-border/30 bg-muted/20 text-muted-foreground hover:border-primary/50 hover:bg-muted/40'
                            )}
                            title={language === 'en' ? industry.description.en : industry.description.es}
                        >
                            <span className="text-2xl">{industry.icon}</span>
                            <span className="text-xs font-semibold text-center leading-tight">
                                {language === 'en' ? industry.name.en : industry.name.es}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
