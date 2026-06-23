"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Brief page-load intro: the logo draws in, then the curtain lifts to hand
 * control to scroll. Skipped entirely under prefers-reduced-motion.
 */
export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-base"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="block font-display text-4xl font-extrabold tracking-tight text-gradient sm:text-6xl"
            >
              DigiGoTech
            </motion.span>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-cyan"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
