"use client";

import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    copy: "We dig into your goals, users, and constraints — then map the product and a realistic plan to ship it.",
  },
  {
    n: "02",
    title: "Design",
    copy: "Interactive prototypes and a design system you can actually feel, refined with you before a line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    copy: "Tight weekly cycles with working software at every step. You see progress in real time, not just status updates.",
  },
  {
    n: "04",
    title: "Launch & Grow",
    copy: "We deploy, monitor, and keep iterating — adding features and tuning performance long after go-live.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative bg-base py-28 sm:py-36"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan">
              How we work
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2
              id="process-heading"
              className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl"
            >
              A process built for momentum.
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-0 top-0 hidden h-px w-full bg-line lg:block" />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} index={i}>
                <div className="relative lg:pt-10">
                  <span className="absolute left-0 top-0 hidden h-px w-12 bg-cyan lg:block" />
                  <div className="font-display text-5xl font-bold text-surface-2 [-webkit-text-stroke:1px_var(--color-line)]">
                    {s.n}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
