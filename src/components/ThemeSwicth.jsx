"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@gravity-ui/icons";

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="p-2 size-9 rounded-lg bg-default-100 animate-pulse"></div>;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-xl transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center border border-border/40"
            aria-label="Toggle Theme"
        >
            {isDark ? (
                <Sun className="size-5 text-amber-500 transition-transform duration-300 rotate-0 scale-100" />
            ) : (
                <Moon className="size-5 text-blue-600 transition-transform duration-300 rotate-0 scale-100" />
            )}
        </button>
    );
};

export default ThemeSwitch;