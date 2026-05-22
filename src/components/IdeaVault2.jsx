import React from 'react';
import { Button } from '@heroui/react';
import { ShieldCheck, ArrowRight, Lock } from 'lucide-react';

export default function IdeaVaultBanner({ onOpenAddIdea }) {
    return (
        <div className="w-full max-w-11/12 mx-auto my-10 px-4">
            <div className="mb-6 text-center md:text-left space-y-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary text-center">
                    Secure Workspace
                </h3>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground text-center">
                    Idea Hub
                </h2>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-default-200 dark:border-default-100 bg-content1 p-6 sm:p-8 md:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="absolute -right-20 -top-20 w-52 h-52 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-4 max-w-2xl text-center md:text-left">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/40 text-primary text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck className="size-3.5" /> Secure Architecture
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                            Have a Next-Gen Project Idea?
                        </h2>
                        <p className="text-sm sm:text-base text-default-500 leading-relaxed">
                            Dont keep it open or risk losing it. Document your core logic, lock your tech stack, and store it safely inside your private vault.
                        </p>
                    </div>
                </div>

                <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row justify-center gap-3">
                    <Button
                        onClick={onOpenAddIdea}
                        className="w-full sm:w-48 h-12 px-4 rounded-xl bg-default-100 hover:bg-default-200/70 text-left text-default-400 text-xs font-medium transition-all border border-transparent hover:border-default-300 outline-none flex items-center justify-between gap-2"
                    >
                        <span>Start drafting...</span>
                        <ArrowRight className="size-3.5 text-default-400" />
                    </Button>

                    <Button
                        color="primary"
                        size="lg"
                        className="w-full sm:w-auto h-12 font-bold text-white bg-primary shadow-lg shadow-primary/20 dark:shadow-none px-6 rounded-xl transition-transform active:scale-95"
                        startContent={<Lock className="size-4" />}

                    >
                        Vault It 🔒
                    </Button>
                </div>

            </div>
        </div>
    );
}