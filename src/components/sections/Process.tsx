"use client";

import Reveal from "@/components/ui/Reveal";
import { TopoChip } from "@/components/ui/Topo";

const steps = [
  {
    n: "01",
    seed: 5,
    title: "Discover",
    copy: "We dig into your goals, users, and constraints — then map the product and a realistic plan to ship it.",
    meta: "1–2 weeks",
  },
  {
    n: "02",
    seed: 29,
    title: "Design",
    copy: "Interactive prototypes and a design system you can actually feel, refined with you before a line of production code is written.",
    meta: "2–3 weeks",
  },
  {
    n: "03",
    seed: 61,
    title: "Build",
    copy: "Tight weekly cycles with working software at every step. You see progress in real time, not just status updates in a deck.",
    meta: "Ongoing",
  },
  {
    n: "04",
    seed: 117,
    title: "Launch & Grow",
    copy: "We deploy, monitor, and keep iterating — adding features and tuning performance long after go-live.",
    meta: "Continuous",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative bg-canvas py-24 sm:py-36"
      aria-labelledby="process-heading"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* The heading holds its position while the steps scroll past it. */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="eyebrow">How we work</p>
              <h2
                id="process-heading"
                className="font-display type-h2 mt-6 max-w-[13ch] text-balance text-ink"
              >
                A process built for <span className="accentuate">momentum</span>.
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
                Four stages, no mystery. You always know what we&apos;re doing
                this week and what you&apos;ll see at the end of it.
              </p>
            </Reveal>
          </div>

          <ol className="relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} index={i} as="li">
                <div className="group relative grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-t border-line py-9 transition-colors duration-500 hover:border-line-strong sm:gap-10 sm:py-11">
                  <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
                    <div className="absolute inset-0 text-clay opacity-40 transition-[color,opacity] duration-500 group-hover:text-accent group-hover:opacity-70">
                      <TopoChip seed={s.seed} />
                    </div>
                    <span className="tnum absolute inset-0 flex items-center justify-center font-display text-sm font-semibold text-ink">
                      {s.n}
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display type-h3 text-ink">
                        {s.title}
                      </h3>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-faint">
                        {s.meta}
                      </span>
                    </div>
                    <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
                      {s.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <li aria-hidden="true" className="border-t border-line" />
          </ol>
        </div>
      </div>
    </section>
  );
}
