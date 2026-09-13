'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function LoginPage() {
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/verify-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            if (res.ok) {
                router.push('/');
                router.refresh(); // Refresh to update middleware state
            } else {
                const data = await res.json();
                setError(data.error || 'Incorrect password');
            }
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-background">
            {/* Animated backgrounds */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="w-full max-w-md z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 group transition-all hover:scale-110">
                        <ShieldCheck className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3 font-outfit">
                        Access <span className="text-primary italic">Hub</span>
                    </h1>
                    <p className="text-muted-foreground">Enter your credentials to continue to Elite Communicator Hub</p>
                </div>

                <div className="glass border-border/50 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <Sparkles className="w-12 h-12 text-primary" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative">
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-foreground ml-1">
                                security password
                            </label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                                    <Lock className="w-4 h-4" />
                                </span>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full h-14 pl-12 pr-4 bg-background/50 border-border/50 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 font-mono"
                                    required
                                    autoFocus
                                />
                            </div>
                            {error && (
                                <p className="text-destructive text-xs font-medium mt-2 animate-in fade-in slide-in-from-top-1 ml-1">
                                    {error}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 shadow-lg shadow-primary/20"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            ) : (
                                <>
                                    Verify Access
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center mt-8 text-xs text-muted-foreground">
                    This is a private portal for Elite Communicator Hub members.
                </p>
            </div>
        </div>
    );
}
