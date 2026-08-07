"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // No backend wired yet — this confirms intent and is ready for an API route.
    setSent(true);
  }

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-base py-32 sm:py-40"
      aria-labelledby="cta-heading"
    >
      {/* radial cyan glow rising from the bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[60vh] w-[90vw] max-w-3xl -translate-x-1/2 translate-y-1/3 rounded-full blur-3xl"
        style={{ background: "var(--glow-cta)" }}
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <h2
            id="cta-heading"
            className="font-display text-4xl font-bold leading-tight text-ink sm:text-6xl"
          >
            Ready to turn your vision into a product?
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Share your idea and we&apos;ll map out a path forward — no sales
            pitch, just a real conversation about what&apos;s possible.
          </p>
        </Reveal>

        <Reveal index={2}>
          {sent ? (
            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-full border border-cyan/30 bg-surface px-6 py-4 text-cyan">
              <Check className="h-5 w-5" />
              <span className="text-sm font-medium">
                Thanks — we&apos;ll be in touch within one business day.
              </span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-full border border-line bg-surface-2 px-6 py-3.5 text-sm text-ink placeholder:text-muted focus:border-cyan/50 focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-on-accent transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-cyan)]"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
