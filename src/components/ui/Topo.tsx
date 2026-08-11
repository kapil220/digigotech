"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { contourField, ridgeField } from "@/lib/topo";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------
   Paths are generated once at module scope. They're pure functions of a seed,
   so this both avoids per-render work and guarantees the server and client
   markup agree.
--------------------------------------------------------------------------- */

const HERO_RINGS = contourField({
  seed: 91,
  rings: 16,
  innerRadius: 60,
  outerRadius: 520,
  samples: 46,
  distortion: 1.05,
});

const HERO_RINGS_FAR = contourField({
  seed: 404,
  rings: 9,
  innerRadius: 140,
  outerRadius: 560,
  center: [520, 470],
  samples: 40,
  distortion: 0.8,
});

const PORTRAIT_RINGS = contourField({
  seed: 1337,
  rings: 14,
  innerRadius: 70,
  outerRadius: 480,
  samples: 42,
  distortion: 1.15,
});

const RIDGES = ridgeField({ seed: 58, lines: 11, amplitude: 40 });

/* ------------------------------------------------------------------------- */

interface TopoContoursProps {
  /** Which pre-generated field to draw. */
  variant?: "hero" | "portrait";
  className?: string;
  /** Base stroke opacity of the outermost line. */
  opacity?: number;
  /** Drift the field as the section scrolls past. */
  parallax?: boolean;
}

/**
 * A full-bleed topographic contour field. Purely decorative: it sits behind
 * content, never intercepts pointer events, and is hidden from assistive tech.
 */
export function TopoContours({
  variant = "hero",
  className,
  opacity = 0.5,
  parallax = true,
}: TopoContoursProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const near = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
  const far = useTransform(scrollYProgress, [0, 1], ["4%", "-6%"]);
  const active = parallax && !reduced;

  const rings = variant === "hero" ? HERO_RINGS : PORTRAIT_RINGS;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {variant === "hero" && (
        <motion.svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          style={active ? { y: far } : undefined}
        >
          {HERO_RINGS_FAR.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="var(--color-clay)"
              strokeWidth={0.9}
              opacity={opacity * 0.34}
            />
          ))}
        </motion.svg>
      )}

      <motion.svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        style={active ? { y: near } : undefined}
      >
        {rings.map((d, i) => {
          // Fade the outer rings out so the field dissolves into the page
          // instead of stopping at a hard edge.
          const t = i / (rings.length - 1);
          const isAccent = i === 2 || i === Math.floor(rings.length * 0.62);
          return (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={isAccent ? "var(--color-accent)" : "var(--color-ink)"}
              strokeWidth={isAccent ? 1.4 : 1}
              opacity={
                (isAccent ? opacity * 0.85 : opacity) * (1 - t * 0.72) + 0.02
              }
            />
          );
        })}
      </motion.svg>
    </div>
  );
}

/**
 * A wide band of stacked elevation profiles. Used as a horizon under the
 * closing CTA so the page resolves on the same cartographic motif it opened on.
 */
export function TopoRidge({
  className,
  opacity = 0.5,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 320"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-x-0", className)}
    >
      {RIDGES.map((d, i) => {
        const t = i / (RIDGES.length - 1);
        return (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={i === 3 ? "var(--color-accent)" : "var(--color-ink)"}
            strokeWidth={i === 3 ? 1.5 : 1}
            opacity={opacity * (1 - t * 0.8) + 0.03}
          />
        );
      })}
    </svg>
  );
}

/**
 * Small inline contour badge — a plan-view "map chip" used to letterhead
 * cards and the process steps.
 */
export function TopoChip({ seed = 3, className }: { seed?: number; className?: string }) {
  const rings = contourField({
    seed,
    rings: 5,
    innerRadius: 90,
    outerRadius: 430,
    samples: 24,
    distortion: 1.3,
  });

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 1000"
      className={cn("h-full w-full", className)}
    >
      {rings.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth={14}
          opacity={0.25 + (1 - i / rings.length) * 0.6}
        />
      ))}
    </svg>
  );
}
