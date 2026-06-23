"use client";

import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  /** 0–1 of the element that must be visible before firing. */
  threshold?: number;
  /** Fire only once, then stop observing. Default true. */
  once?: boolean;
  /** rootMargin passthrough — lets you trigger early/late. */
  rootMargin?: string;
}

/**
 * Lightweight scroll-into-view detector built on IntersectionObserver.
 * Returns a ref to attach and a boolean that flips true when the element
 * enters the viewport. SSR-safe and respects `once`.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.2,
  once = true,
  rootMargin = "0px 0px -10% 0px",
}: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No IO support → show immediately rather than hide content.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, inView };
}
