'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { clsx } from 'clsx';

interface DialogContextType {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextType | undefined>(undefined);

export function Dialog({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <DialogContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </DialogContext.Provider>
    );
}

export function DialogTrigger({ children }: { children: React.ReactNode }) {
    const context = React.useContext(DialogContext);
    if (!context) throw new Error('DialogTrigger must be used within Dialog');

    return (
        <div onClick={() => context.setIsOpen(true)}>
            {children}
        </div>
    );
}

export function DialogContent({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const context = React.useContext(DialogContext);
    if (!context) throw new Error('DialogContent must be used within Dialog');

    if (!context.isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className={clsx(
                    "relative w-full max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl border border-border/50 animate-in zoom-in-95 duration-200",
                    className
                )}
                {...props}
            >
                <button
                    onClick={() => context.setIsOpen(false)}
                    className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                >
                    <X className="w-4 h-4 text-muted-foreground" />
                </button>
                {children}
            </div>
        </div>
    );
}

export function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={clsx("flex flex-col space-y-1.5 p-6", className)} {...props} />;
}

export function DialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return <h2 className={clsx("text-lg font-semibold leading-none tracking-tight", className)} {...props} />;
}

export function DialogClose({
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { setIsOpen } = useDialog();
    return (
        <button {...props} onClick={() => setIsOpen(false)}>
            {children}
        </button>
    );
}

export function useDialog() {
    const context = React.useContext(DialogContext);
    if (!context) throw new Error('useDialog must be used within Dialog');
    return context;
}
