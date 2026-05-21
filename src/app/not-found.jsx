'use client';
import React from 'react';
import { Button, Link } from '@heroui/react';
import { Home, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-[80vh] w-full flex items-center justify-center px-4 bg-background text-foreground transition-colors duration-300">
            <div className="w-full max-w-md p-8 text-center rounded-2xl border border-default-200 dark:border-default-100 bg-content1 shadow-sm">
                
                {/* 404 Icon & Badging */}
                <div className="flex flex-col items-center justify-center mb-6">
                    <span className="text-sm font-bold tracking-widest uppercase text-primary px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/40 border border-primary-100 dark:border-primary-900/30">
                        Error 404
                    </span>
                    <h1 className="text-7xl font-extrabold tracking-tight mt-3 bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
                        Oops!
                    </h1>
                </div>

                {/* Message */}
                <div className="space-y-2 mb-8">
                    <h2 className="text-xl font-bold tracking-tight">
                        Page Not Found
                    </h2>
                    <p className="text-sm text-default-500 max-w-xs mx-auto leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Button
                        variant="bordered"
                        color="default"
                        className="w-full sm:w-auto font-medium border-default-300 dark:border-default-200"
                        startContent={<ArrowLeft className="size-4" />}
                        onClick={() => router.back()}
                    >
                        Go Back
                    </Button>
                    
                    <Button
                        as={Link}
                        href="/"
                        color="primary"
                        variant="primary"
                        className="w-full sm:w-auto font-semibold rounded-md"
                        startContent={<Home className="size-4" />}
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    );
}