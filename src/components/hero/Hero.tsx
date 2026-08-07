"use client";

import { ArrowRight } from "lucide-react";
import { scrollTo } from "@/components/providers/SmoothScrollProvider";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden"
      aria-label="Introduction"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full glow-radial blur-3xl" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber/10 blur-[120px]" />
      </div>

      {/* Headline overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-cyan">
          Digital Product Studio
        </p>

        <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
          <span className="block">We build the</span>
          <span className="block text-gradient">software</span>
          <span className="block">behind great companies.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base text-muted sm:text-lg">
          Websites, mobile apps, CRM &amp; ERP systems, and custom platforms —
          designed and engineered to scale with founders and growing teams.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollTo("#cta")}
            className="group inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-on-accent transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-cyan)]"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo("#work")}
            className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink/90 transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            See our work
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <div className="mx-auto mt-2 h-10 w-[1px] bg-gradient-to-b from-cyan to-transparent" />
      </div>
    </section>
  );
}
