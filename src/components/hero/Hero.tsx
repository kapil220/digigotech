"use client";

import { useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { useScrollScrub } from "@/hooks/useScrollScrub";
import { scrollTo } from "@/components/providers/SmoothScrollProvider";

// 3D scene is client-only and lazy — never enters the SSR/initial bundle.
const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const build = useCallback((tl: gsap.core.Timeline) => {
    // Each step is scrubbed across the pin. gsap.from → final state is the
    // natural DOM state, so reduced-motion (no GSAP) still renders correctly.
    tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.4 })
      .from(
        ".hero-line",
        { yPercent: 120, opacity: 0, duration: 1, stagger: 0.35 },
        "<0.1"
      )
      .from(".hero-sub", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
      .from(
        ".hero-cta > *",
        { y: 20, opacity: 0, duration: 0.5, stagger: 0.15 },
        "-=0.2"
      )
      .to(".hero-hint", { opacity: 0, duration: 0.3 }, 0.1);
  }, []);

  const { progress } = useScrollScrub(sectionRef, { end: "+=220%", build });

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-screen w-full overflow-hidden"
      aria-label="Introduction"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full glow-radial blur-3xl" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber/10 blur-[120px]" />
      </div>

      {/* 3D globe */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas progress={progress} />
      </div>

      {/* Headline overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="hero-eyebrow mb-6 text-xs font-medium uppercase tracking-[0.35em] text-cyan">
          Digital Product Studio
        </p>

        <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
          <span className="block overflow-hidden">
            <span className="hero-line block">We build the</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block text-gradient">software</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">behind great companies.</span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-xl text-base text-muted sm:text-lg">
          Websites, mobile apps, CRM &amp; ERP systems, and custom platforms —
          designed and engineered to scale with founders and growing teams.
        </p>

        <div className="hero-cta mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollTo("#cta")}
            className="group inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-[#050508] transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-cyan)]"
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
      <div className="hero-hint pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <div className="mx-auto mt-2 h-10 w-[1px] bg-gradient-to-b from-cyan to-transparent" />
      </div>
    </section>
  );
}
