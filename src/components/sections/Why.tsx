"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "40+", label: "Products shipped" },
  { value: "6 wks", label: "Avg. to first launch" },
  { value: "98%", label: "Client retention" },
  { value: "24/7", label: "Post-launch support" },
];

function OrbitVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Parallax: the whole visual drifts slower than the page.
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative mx-auto aspect-square w-full max-w-md"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full glow-radial blur-2xl" />

      <motion.div style={{ rotate }} className="absolute inset-0">
        {/* concentric rings */}
        {[1, 0.72, 0.44].map((scale, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-line"
            style={{
              width: `${scale * 100}%`,
              height: `${scale * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* orbiting dots */}
        {[
          { ring: 100, dur: 18, color: "bg-cyan", size: 12 },
          { ring: 72, dur: 13, color: "bg-violet", size: 10 },
          { ring: 44, dur: 9, color: "bg-amber", size: 8 },
        ].map((o, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${o.ring}%`,
              height: `${o.ring}%`,
              animation: `dgt-spin ${o.dur}s linear infinite`,
            }}
          >
            <span
              className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full ${o.color}`}
              style={{
                width: o.size,
                height: o.size,
                boxShadow: "0 0 16px currentColor",
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* core */}
      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-cyan/30 bg-surface-2 font-display text-xl font-bold text-gradient">
        DGT
      </div>
    </motion.div>
  );
}

export default function Why() {
  return (
    <section
      id="about"
      className="relative bg-surface py-28 sm:py-36"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan">
              Why DigiGoTech
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2
              id="why-heading"
              className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl"
            >
              A senior team that ships like it&apos;s{" "}
              <span className="text-gradient">their own product.</span>
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-5 text-lg text-muted">
              No junior hand-offs, no endless tickets. You work directly with the
              people designing and writing the code — so decisions are fast and
              the quality bar stays high from kickoff to launch.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} index={i} className="bg-surface">
                <div className="p-5 text-center sm:text-left">
                  <div className="font-display text-3xl font-bold text-ink">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <OrbitVisual />
      </div>
    </section>
  );
}
