"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { lockScroll } from "@/components/providers/SmoothScrollProvider";
import LeadForm, { LEAD_SENT_KEY } from "@/components/lead/LeadForm";

interface LeadContextValue {
  /** Open the enquiry popup. `source` names the button that opened it. */
  openLead: (source: string) => void;
}

const LeadContext = createContext<LeadContextValue | null>(null);

export function useLead() {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error("useLead must be used inside <LeadProvider>");
  return ctx;
}

const WELCOME_SOURCE = "welcome-popup";
const WELCOME_SEEN_KEY = "nexopsdev-welcome-seen";
/** Long enough for the page loader to lift and the hero to land. */
const WELCOME_DELAY_MS = 4000;

export default function LeadProvider({ children }: { children: ReactNode }) {
  const [source, setSource] = useState<string | null>(null);
  const [showFloat, setShowFloat] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const openedOnce = useRef(false);
  const open = source !== null;

  const openLead = useCallback((from: string) => {
    openedOnce.current = true;
    setSource(from);
  }, []);
  const close = useCallback(() => setSource(null), []);

  // Greet first-time visitors once per browser session, and never again after
  // they've sent an enquiry or already opened the form themselves.
  useEffect(() => {
    try {
      if (
        sessionStorage.getItem(WELCOME_SEEN_KEY) ||
        localStorage.getItem(LEAD_SENT_KEY)
      ) {
        return;
      }
    } catch {
      return;
    }
    const t = setTimeout(() => {
      if (openedOnce.current) return;
      try {
        sessionStorage.setItem(WELCOME_SEEN_KEY, "1");
      } catch {
        // Storage blocked — worst case the popup greets them again next load.
      }
      openLead(WELCOME_SOURCE);
    }, WELCOME_DELAY_MS);
    return () => clearTimeout(t);
  }, [openLead]);

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const previous = document.activeElement as HTMLElement | null;
    panel.current?.querySelector<HTMLElement>("input")?.focus();

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lockScroll(false);
      previous?.focus?.();
    };
  }, [open, close]);

  // Phones lose the header button, so a floating one follows the scroll —
  // except over the closing section, which already is the form.
  useEffect(() => {
    const onScroll = () => {
      const cta = document.getElementById("cta");
      const nearForm =
        !!cta && cta.getBoundingClientRect().top < window.innerHeight;
      setShowFloat(window.scrollY > 500 && !nearForm);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const welcome = source === WELCOME_SOURCE;

  return (
    <LeadContext.Provider value={{ openLead }}>
      {children}

      <AnimatePresence>
        {showFloat && !open && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            onClick={() => openLead("floating-button")}
            className="btn btn-primary fixed bottom-5 right-5 z-40 shadow-[var(--shadow-accent)] md:hidden"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex items-end justify-center bg-[#041034]/55 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={close}
          >
            <motion.div
              ref={panel}
              role="dialog"
              aria-modal="true"
              aria-labelledby="lead-dialog-title"
              data-lenis-prevent
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 28, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92svh] w-full max-w-xl overflow-y-auto rounded-t-[1.5rem] border border-line bg-paper p-6 shadow-[var(--shadow-lift)] sm:rounded-[1.5rem] sm:p-9"
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <X className="h-4 w-4" strokeWidth={1.7} />
              </button>

              <p className="eyebrow">{welcome ? "Welcome" : "Start a project"}</p>
              <h2
                id="lead-dialog-title"
                className="font-display type-h3 mt-4 max-w-[20ch] text-balance pr-8 text-ink"
              >
                {welcome ? (
                  <>
                    Got a project in <span className="accentuate">mind</span>?
                  </>
                ) : (
                  <>
                    Tell us what you&apos;re{" "}
                    <span className="accentuate">building</span>.
                  </>
                )}
              </h2>
              <p className="mt-3 max-w-md text-sm text-muted">
                Share a few details and we&apos;ll come back within one business
                day with a plan and an honest estimate.
              </p>

              <LeadForm source={source} className="mt-7" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LeadContext.Provider>
  );
}
