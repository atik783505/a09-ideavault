import { Spinner } from "@heroui/react";

export default function SpinnerSizes() {
    return (

        <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-muted">Large</span>
        </div>
    );
}