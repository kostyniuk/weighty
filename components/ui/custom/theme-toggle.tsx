"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../button";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="size-5" />
            ) : (
                <Moon className="size-5" />
            )}
        </Button>
    );
}
