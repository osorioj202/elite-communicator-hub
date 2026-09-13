'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { clsx } from 'clsx';

export function LogoutButton() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await fetch('/api/logout', { method: 'POST' });
            router.push('/login');
            router.refresh();
        } catch (err) {
            console.error('Logout failed', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleLogout}
            disabled={isLoading}
            className={clsx(
                "p-2 rounded-xl transition-all group relative",
                "bg-destructive/10 text-destructive hover:bg-destructive hover:text-white"
            )}
            title="Logoout"
        >
            <LogOut className="w-5 h-5 transition-transform group-hover:scale-110 group-active:scale-95" />

            {/* Tooltip-like label for larger screens if needed, but keeping it minimalist */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-xl">
                    <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                </div>
            )}
        </button>
    );
}
