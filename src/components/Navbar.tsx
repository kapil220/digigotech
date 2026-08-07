"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollTo } from "@/components/providers/SmoothScrollProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import Logo from "@/components/ui/Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(href: string) {
    setOpen(false);
    scrollTo(href);
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "glass border-b border-line py-3" : "py-5"
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <button
            onClick={() => go("#top")}
            aria-label="DigiGoTech home"
            className="shrink-0 rounded-md transition-opacity hover:opacity-80"
          >
            <Logo className="h-9 w-auto" />
          </button>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => go("#cta")}
              className="hidden rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-on-accent transition-shadow hover:shadow-[var(--shadow-glow-cyan)] md:inline-flex"
            >
              Get started →
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="text-ink md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="inline-block">
                <Logo className="h-8 w-auto" />
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-ink"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <button
                    onClick={() => go(l.href)}
                    className="font-display text-4xl font-bold text-ink"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="px-6 pb-10">
              <button
                onClick={() => go("#cta")}
                className="w-full rounded-full bg-cyan px-6 py-4 text-center text-base font-semibold text-on-accent"
              >
                Get started →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
