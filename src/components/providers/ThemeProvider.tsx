"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "nexopsdev-theme";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  // Light is the default canvas. The inline script in layout.tsx has already
  // stamped data-theme before paint; we adopt whatever it decided.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const applied = document.documentElement.getAttribute("data-theme");
    if (applied === "dark" || applied === "light") setTheme(applied);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Follow the OS until the visitor makes an explicit choice.
  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY)) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* private mode — the choice just won't persist */
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
