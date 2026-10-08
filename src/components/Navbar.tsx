"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollTo } from "@/components/providers/SmoothScrollProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import Logo from "@/components/ui/Logo";
import { useLead } from "@/components/lead/LeadProvider";

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  /** Service pages for the dropdown, grouped as on the services index. */
  serviceGroups: { heading: string; links: NavLink[] }[];
}

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ serviceGroups }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
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

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the overlay and the services dropdown.
  useEffect(() => {
    if (!open && !menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, menu]);

  /**
   * Links are real anchors so they can be crawled and opened in a new tab.
   * On the home page, links to its own sections scroll smoothly instead.
   */
  function onNavigate(e: MouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false);
    setMenu(false);
    if (pathname !== "/") return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (href === "/") {
      e.preventDefault();
      scrollTo("#top");
    } else if (href.startsWith("/#")) {
      e.preventDefault();
      scrollTo(href.slice(1));
    }
  }

  const isActive = (href: string) =>
    !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "glass border-b border-line py-2.5" : "py-5"
        )}
      >
        <nav
          aria-label="Main"
          className="shell flex items-center justify-between gap-6"
        >
          <Link
            href="/"
            onClick={(e) => onNavigate(e, "/")}
            aria-label="Nexopsdev Technologies home"
            className="shrink-0 rounded-md transition-opacity hover:opacity-70"
          >
            <Logo size="md" />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = isActive(l.href);
              const hasMenu = l.href === "/services";
              return (
                <li
                  key={l.href}
                  className="relative"
                  onMouseEnter={hasMenu ? () => setMenu(true) : undefined}
                  onMouseLeave={hasMenu ? () => setMenu(false) : undefined}
                  onFocus={hasMenu ? () => setMenu(true) : undefined}
                  onBlur={
                    hasMenu
                      ? (e) => {
                          if (!e.currentTarget.contains(e.relatedTarget)) {
                            setMenu(false);
                          }
                        }
                      : undefined
                  }
                >
                  <Link
                    href={l.href}
                    onClick={(e) => onNavigate(e, l.href)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors duration-300",
                      active ? "text-ink" : "text-muted hover:text-ink"
                    )}
                  >
                    {active && (
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
                    {hasMenu && (
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          menu && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {hasMenu && (
                    // Always in the DOM so the links are crawlable; only its
                    // visibility changes.
                    <div
                      className={cn(
                        "absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3 transition-[opacity,visibility,transform] duration-300",
                        menu
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      )}
                    >
                      <div className="grid grid-cols-2 gap-x-8 rounded-[1.25rem] border border-line bg-paper p-7 shadow-[var(--shadow-lift)]">
                        {serviceGroups.map((g) => (
                          <div key={g.heading}>
                            <p className="text-[11px] uppercase tracking-[0.2em] text-faint">
                              {g.heading}
                            </p>
                            <ul className="mt-4 space-y-2.5">
                              {g.links.map((s) => (
                                <li key={s.href}>
                                  <Link
                                    href={s.href}
                                    onClick={() => setMenu(false)}
                                    className="link-draw text-sm text-muted"
                                  >
                                    {s.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
                  <Link
                    href={l.href}
                    onClick={(e) => onNavigate(e, l.href)}
                    className="block w-full py-4 text-left font-display text-4xl text-ink"
                  >
                    {l.label}
                  </Link>
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
