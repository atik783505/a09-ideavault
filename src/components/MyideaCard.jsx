import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import { DeleteButton } from "./DelelteButton";

const MyideaCard = ({ idea }) => {
    return (
        <Card className="w-full border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-4 md:p-5 flex flex-col md:flex-row md:items-start gap-5 transition-all duration-300 hover:shadow-md relative items-center mt-4">
            
            <div className="relative aspect-square h-[180px] w-[180px] shrink-0 overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-800 sm:h-[150px] sm:w-[150px]">
                <Image
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    src={idea.imageUrl || "/default-placeholder.png"}
                    alt={idea.title}
                    fill
                    sizes="(max-width: 640px) 180px, 150px"
                />
            </div>
            
            <div className="flex flex-1 flex-col w-full h-full justify-between">
                <div>
                    <div className="flex flex-col gap-1.5 pr-8">
                        <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                            {idea.title}
                        </h3>
                        <p className="text-sm text-default-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
                            {idea.shortDescription}
                        </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-1 pr-8">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                            The Problem
                        </h4>
                        <p className="text-sm text-default-600 dark:text-neutral-300 leading-relaxed line-clamp-2">
                            {idea.problemStatement}
                        </p>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-50 dark:border-neutral-800 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-4 sm:gap-6">
                        <div className="flex flex-col">
                            <span className="text-xs text-default-400 font-medium uppercase">Budget</span>
                            <span className="text-base font-bold text-success">{idea.estimatedBudget || "N/A"}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-default-400 font-medium uppercase">Audience</span>
                            <span className="text-sm font-semibold text-default-700 dark:text-neutral-200">{idea.targetAudience}</span>
                        </div>
                    </div>
                    
                    <div className="flex gap-2 w-full sm:w-auto">
                        <Button variant="flat" color="primary" className="w-full sm:w-auto font-medium">
                            Details
                        </Button>
                        <DeleteButton idea={idea}></DeleteButton>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default MyideaCard;