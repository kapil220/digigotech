"use client";

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/utils";

interface ScrollScrubOptions {
  /** Scroll distance the pin lasts, e.g. "+=200%" of viewport height. */
  end?: string;
  /** Pin the trigger element while scrubbing. Default true. */
  pin?: boolean;
  /** Called once with the gsap timeline so the caller can add tweens. */
  build?: (tl: gsap.core.Timeline) => void;
}

interface ScrollScrubResult {
  /** Live 0→1 scroll progress, updated every scrub frame. Read in useFrame. */
  progress: RefObject<number>;
}

/**
 * Pins `triggerRef` and scrubs a GSAP timeline across the pin distance.
 * `progress` mirrors the timeline 0→1 so a non-GSAP consumer (e.g. an R3F
 * `useFrame` loop) can read scroll position without re-rendering React.
 *
 * Honours prefers-reduced-motion: no pin, no scrub — progress jumps to 1 so
 * the final composed state is shown statically.
 */
export function useScrollScrub(
  triggerRef: RefObject<HTMLElement | null>,
  { end = "+=200%", pin = true, build }: ScrollScrubOptions = {}
): ScrollScrubResult {
  const progress = useRef(0);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      progress.current = 1;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end,
          pin,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            progress.current = self.progress;
          },
        },
      });
      build?.(tl);
    }, el);

    return () => {
      ctx.revert();
    };
    // build is intentionally referenced once on mount; callers pass a stable fn.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerRef, end, pin]);

  return { progress };
}
