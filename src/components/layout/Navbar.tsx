'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Mic2,
    LayoutDashboard,
    Target,
    Lightbulb,
    Sparkles
} from 'lucide-react';
import { clsx } from 'clsx';


import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { LogoutButton } from '@/components/LogoutButton';

export function Navbar() {
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { href: '/scenarios', label: t('navPractice'), icon: Target },
        { href: '/tips', label: t('navExpertTips'), icon: Lightbulb },
        { href: '/pockets', label: t('navPockets'), icon: Sparkles },
        { href: '/dashboard', label: t('navDashboard'), icon: LayoutDashboard },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Mic2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">
                        Elite <span className="text-primary">Hub</span>
                    </span>
                </Link>

                {/* Nav links */}
                <div className="flex items-center gap-1">
                    {navLinks.map(({ href, label, icon: Icon }) => {
                        const isActive = pathname.startsWith(href);
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={clsx(
                                    'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                    isActive
                                        ? 'bg-primary/15 text-primary'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                )}
                            >
                                <Icon className="w-4 h-4" />
                                <span className="hidden sm:inline">{label}</span>
                            </Link>
                        );
                    })}

                    <div className="w-px h-6 bg-white/10 mx-2" />

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                        className="text-xs font-bold w-10 h-8 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        {language.toUpperCase()}
                    </Button>

                    <LogoutButton />
                </div>
            </div>
        </nav>
    );
}
