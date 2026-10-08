"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Desktop-only cursor: a solid ink dot with a lagging accent ring. Over
 * interactive targets the ring closes in and the dot shrinks, so the pair reads
 * as a reticle snapping to what you're about to click.
 *
 * Deliberately not mix-blend-difference — on a warm ivory canvas that inverts
 * the brand red into cyan.
 */
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || prefersReducedMotion()) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const fast = { ...target };
    const slow = { ...target };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target as HTMLElement | null;
      setActive(!!el?.closest?.("a, button, input, select, textarea, label, [data-cursor]"));
    };

    const render = () => {
      fast.x += (target.x - fast.x) * 0.34;
      fast.y += (target.y - fast.y) * 0.34;
      slow.x += (target.x - slow.x) * 0.14;
      slow.y += (target.y - slow.y) * 0.14;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${fast.x}px, ${fast.y}px, 0) translate(-50%, -50%)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${slow.x}px, ${slow.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border transition-[width,height,border-color,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        style={{
          width: active ? 46 : 30,
          height: active ? 46 : 30,
          borderColor: active ? "var(--color-accent)" : "var(--color-line-strong)",
          opacity: active ? 1 : 0.7,
        }}
      />
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[101] rounded-full transition-[width,height,background-color] duration-300 will-change-transform"
        style={{
          width: active ? 5 : 7,
          height: active ? 5 : 7,
          backgroundColor: active ? "var(--color-accent)" : "var(--color-ink)",
        }}
      />
    </>
  );
}
