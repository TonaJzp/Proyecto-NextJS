"use client";

import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const DEFAULT_THEME = "light";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        themeChange(false); // 👆 false parameter is required for react project

        // Si hay un tema guardado en localStorage, úsalo
        const saved = localStorage.getItem("theme");

        if (saved) {
            applyTheme(saved);
        } else {
            // Detectar tema del sistema
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const systemTheme = prefersDark ? "dark" : DEFAULT_THEME;
            applyTheme(systemTheme);
        }

        // Escuchar cambios entre pestañas
        const handleStorage = (e) => {
            if (e.key === "theme" && e.newValue) {
                applyTheme(e.newValue);
            }
        };
        window.addEventListener("storage", handleStorage);

        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    const applyTheme = (theme) => {
        setTheme(theme);
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    };

    return <>{children}</>;
}
