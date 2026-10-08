"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { scrollTo } from "@/components/providers/SmoothScrollProvider";
import { TopoContours } from "@/components/ui/Topo";
import { useLead } from "@/components/lead/LeadProvider";

const lines = [
  [{ t: "We build the" }],
  [{ t: "software", accent: true }, { t: " behind" }],
  [{ t: "great companies." }],
];

const rail = [
  { k: "40+", v: "products shipped" },
  { k: "6 wks", v: "to first launch" },
  { k: "98%", v: "client retention" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { openLead } = useLead();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The headline drifts up and dissolves as the page takes over.
  const y = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="grain relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden pb-12 pt-36 sm:pb-16 short:pb-10 short:pt-28"
      aria-label="Introduction"
    >
      <TopoContours
        variant="hero"
        opacity={0.42}
        className="opacity-90 [mask-image:radial-gradient(ellipse_at_60%_45%,black_20%,transparent_78%)]"
      />

      <motion.div
        style={reduced ? undefined : { y, opacity }}
        className="shell relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow"
        >
          Digital Product Studio
        </motion.p>

        <h1 className="font-display type-hero mt-7 max-w-[16ch] text-ink short:mt-5">
          {lines.map((line, li) => (
            <span key={li} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 0.22 + li * 0.11,
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {line.map((part, pi) =>
                  part.accent ? (
                    <span key={pi} className="accentuate">
                      {part.t}
                    </span>
                  ) : (
                    <span key={pi}>{part.t}</span>
                  )
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 grid gap-10 short:mt-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="type-lead text-muted">
              AI agents that automate the work, plus the websites, mobile apps,
              CRM &amp; ERP systems and custom platforms around them — designed
              and engineered to scale with founders and growing teams.
            </p>

            <div className="mt-9 flex flex-col gap-3 short:mt-7 sm:flex-row">
              <button
                onClick={() => openLead("hero")}
                className="btn btn-primary group"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("#work")}
                className="btn btn-ghost"
              >
                See our work
              </button>
            </div>
          </div>

          {/* Proof rail — hairline-separated, quiet, numeric. */}
          <dl className="flex divide-x divide-line border-y border-line py-5 lg:border-y-0 lg:py-0">
            {rail.map((r) => (
              <div key={r.k} className="px-5 first:pl-0 lg:px-7">
                <dt className="font-display tnum text-2xl text-ink sm:text-3xl">
                  {r.k}
                </dt>
                <dd className="mt-1 text-xs text-muted">{r.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        onClick={() => scrollTo("#services")}
        aria-label="Scroll to services"
        className="shell relative z-10 mt-14 flex items-center short:hidden gap-3 text-[11px] uppercase tracking-[0.22em] text-faint transition-colors hover:text-accent"
      >
        <ArrowDown className="h-3.5 w-3.5 motion-safe:[animation:dgt-drift_2.6s_ease-in-out_infinite]" />
        Scroll
      </motion.button>
    </section>
  );
}
