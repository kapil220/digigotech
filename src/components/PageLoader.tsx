"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LogoMark } from "@/components/ui/Logo";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * A brief paper curtain: the mark settles, a hairline sweeps the width, then
 * the curtain lifts and hands control to scroll. Skipped entirely under
 * prefers-reduced-motion so the page is simply there.
 */
export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 1350);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden="true"
          className="grain fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 bg-canvas"
          initial={{ opacity: 1 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <LogoMark className="h-14 w-14" />
          </motion.div>

          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="block text-[11px] uppercase tracking-[0.3em] text-faint"
            >
              Digital Product Studio
            </motion.span>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.15, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
