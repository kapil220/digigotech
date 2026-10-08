"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollTo } from "@/components/providers/SmoothScrollProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import Logo from "@/components/ui/Logo";
import { useLead } from "@/components/lead/LeadProvider";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { theme, toggle } = useTheme();
  const { openLead } = useLead();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section currently owns the middle of the viewport.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the overlay.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function go(href: string) {
    setOpen(false);
    scrollTo(href);
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "glass border-b border-line py-2.5" : "py-5"
        )}
      >
        <nav className="shell flex items-center justify-between gap-6">
          <button
            onClick={() => go("#top")}
            aria-label="Nexopsdev Technologies home"
            className="shrink-0 rounded-md transition-opacity hover:opacity-70"
          >
            <Logo size="md" />
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href} className="relative">
                  <button
                    onClick={() => go(l.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-sunken"
                      />
                    )}
                    {l.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggle}
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              {theme === "dark" ? (
                <Sun className="h-[18px] w-[18px]" strokeWidth={1.7} />
              ) : (
                <Moon className="h-[18px] w-[18px]" strokeWidth={1.7} />
              )}
            </button>

            <button
              onClick={() => openLead("navbar")}
              className="btn btn-primary hidden min-h-11 px-5 text-sm md:inline-flex"
            >
              Start a project
            </button>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink md:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.7} />
            </button>
          </div>
        </nav>

        {/* Reading progress — a single accent hairline along the bottom edge. */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[60] flex flex-col bg-canvas md:hidden"
          >
            <div className="shell flex items-center justify-between py-5">
              <Logo size="md" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink"
              >
                <X className="h-5 w-5" strokeWidth={1.7} />
              </button>
            </div>

            <ul className="shell flex flex-1 flex-col justify-center gap-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.06 + i * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-line"
                >
                  <button
                    onClick={() => go(l.href)}
                    className="w-full py-5 text-left font-display text-4xl text-ink"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="shell pb-10">
              <button
                onClick={() => {
                  setOpen(false);
                  openLead("mobile-menu");
                }}
                className="btn btn-primary min-h-14 w-full"
              >
                Start a project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
