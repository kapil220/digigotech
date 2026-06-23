"use client";

import { useEffect } from "react";
import type Lenis from "lenis";
import { prefersReducedMotion } from "@/lib/utils";

/** Module-level handle so any component can request a smooth scroll-to. */
let lenisInstance: Lenis | null = null;

export function scrollTo(target: string | number, offset = 0) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.2 });
  } else if (typeof target === "string") {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Wraps the app in Lenis smooth scrolling and keeps GSAP ScrollTrigger in
 * lockstep: ScrollTrigger.update fires on every Lenis scroll event, and Lenis'
 * RAF is driven by gsap.ticker so both share one clock (no double rAF jitter).
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Respect reduced-motion: leave native scrolling untouched.
    if (prefersReducedMotion()) return;

    let cleanup = () => {};

    (async () => {
      const [{ default: LenisCtor }, { default: gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new LenisCtor({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.6,
      });
      lenisInstance = lenis;

      lenis.on("scroll", ScrollTrigger.update);

      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // Let ScrollTrigger drive refreshes against Lenis' scroll position.
      ScrollTrigger.refresh();

      cleanup = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
        lenisInstance = null;
      };
    })();

    return () => cleanup();
  }, []);

  return <>{children}</>;
}
