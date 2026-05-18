'use client';
import React from 'react';
import { Card, Button } from '@heroui/react';
import { Lightbulb, ShieldCheck, Zap, Layers } from 'lucide-react';
import Link from 'next/link';

const IdeaVaultFeatures = () => {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">

            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    Why Use <span className="text-primary">Idea Vault</span>?
                </h2>
                <p className="text-default-500 text-medium">
                    Your personal safe for innovation. Dont let your creativity slip away—store, organize, and validate your next big thoughts before you forget.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <Card className="p-4 border border-default-100 bg-background/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col gap-4 items-start">
                        <div className="p-3 bg-primary-50 rounded-xl text-primary dark:bg-primary-950/50">
                            <ShieldCheck className="size-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Secure & Private</h3>
                        <p className="text-default-500 text-sm leading-relaxed">
                            Your information is encrypted and locked safely. Choose whether to keep your concepts completely private or share them with the ecosystem.
                        </p>
                    </div>
                </Card>
                <Card className="p-4 border border-default-100 bg-background/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col gap-4 items-start">
                        <div className="p-3 bg-secondary-50 rounded-xl text-secondary dark:bg-secondary-950/50">
                            <Layers className="size-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Smart Categorization</h3>
                        <p className="text-default-500 text-sm leading-relaxed">
                            Organize your ideas with tags, categories, target audiences, and budget estimates. Never lose track of your product blueprints again.
                        </p>
                    </div>
                </Card>
                <Card className="p-4 border border-default-100 bg-background/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col gap-4 items-start">
                        <div className="p-3 bg-success-50 rounded-xl text-success dark:bg-success-950/50">
                            <Zap className="size-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Instant Validation</h3>
                        <p className="text-default-500 text-sm leading-relaxed">
                            Define your problem statement and proposed solutions clearly. Structure your thinking process to turn loose thoughts into real-world projects.
                        </p>
                    </div>
                </Card>

            </div>
            <Card className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950/20 dark:to-secondary-950/20 border border-primary-100/30 p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex p-3 bg-background rounded-full text-warning shadow-sm">
                            <Lightbulb className="size-6 animate-pulse" />
                        </div>
                        <div className="space-y-1 text-center md:text-left">
                            <h4 className="text-lg font-bold text-foreground">Got a new concept waiting to be built?</h4>
                            <p className="text-small text-default-500">Secure your new idea in the vault right now before it slips away.</p>
                        </div>
                    </div>
                    <Link href='/add-ideas'>
                        <Button color="primary" variant="shadow" className="font-semibold shadow-primary-200">
                            + Add New Idea
                        </Button>
                    </Link>
                </div>
            </Card>

        </section>
    );
};

export default IdeaVaultFeatures;