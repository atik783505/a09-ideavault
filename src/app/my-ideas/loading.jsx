import { Spinner } from "@heroui/react";

export default function SpinnerSizes() {
    return (
        <div className="flex flex-col items-center justify-center gap-3 py-10">
            <Spinner size="lg" color="primary" />
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 animate-pulse tracking-wide">
                Loading...
            </span>
        </div>
    );
}