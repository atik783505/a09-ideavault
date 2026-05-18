'use client';
import React from 'react';
import { Card, CardHeader, CardFooter, Link, Chip, Avatar } from "@heroui/react";
import { Lightbulb, ArrowUpRight } from "lucide-react";
import Image from 'next/image';

export function IdeaCard({ idea }) {

    return (
        <Card className="w-full max-w-[400px] border border-default-100 bg-background/60 backdrop-blur-md hover:shadow-lg transition-all duration-300">

            <div className="relative rounded-md w-full h-48 overflow-hidden bg-default-100">
                <Image
                    src={idea.imageUrl}
                    alt={idea.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Chip
                    size="sm"
                    variant="solid"
                    color="primary"
                    className="absolute top-3 right-3 z-10 text-xs uppercase tracking-wider font-bold shadow-md"
                >
                    {idea.category}
                </Chip>
            </div>
            <CardHeader className="flex gap-3 justify-between items-start pb-2">
                <div className="flex gap-3 items-center">
                    <div className="p-2 bg-primary-50 rounded-xl text-primary dark:bg-primary-950/40">
                        <Lightbulb className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-snug h-[56px] line-clamp-2">
                        {idea.title}
                    </h3>
                </div>

                {idea.estimatedBudget && (
                    <Chip size="sm" variant="flat" color="success">
                        ${idea.estimatedBudget}
                    </Chip>
                )}
            </CardHeader>

            <div className="py-2 text-default-500 text-sm leading-relaxed">
                <p>{idea.shortDescription}</p>

            </div>

            <CardFooter className="pt-2 border-t border-default-100/50 mt-2 flex justify-between">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <Avatar.Image alt="John Doe" src={idea.userImage} />
                        <Avatar.Fallback>{idea?.userName ? idea.userName.slice(0, 1).toUpperCase() : "U"}</Avatar.Fallback>
                    </Avatar>
                    <span className="text-xs text-default-500 font-medium">{idea.userName}</span>
                </div>
                <Link
                    href={`/all-ideas/${idea?._id}`}
                    className="text-sm font-semibold flex items-center gap-1 text-primary hover:underline"
                >
                    View Details
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
            </CardFooter>

        </Card>
    );
}