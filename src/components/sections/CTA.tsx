"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { TopoRidge } from "@/components/ui/Topo";

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
      className="grain relative overflow-hidden bg-canvas pb-32 pt-28 sm:pb-44 sm:pt-40"
      aria-labelledby="cta-heading"
    >
      {/* The page opened on a contour plan view; it closes on the cross-section. */}
      <TopoRidge
        opacity={0.4}
        className="bottom-0 h-[42vh] min-h-[240px] [mask-image:linear-gradient(to_top,black_25%,transparent)]"
      />

      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">Let&apos;s build</p>
          </Reveal>
          <Reveal index={1}>
            <h2
              id="cta-heading"
              className="font-display type-h2 mt-7 text-balance text-ink"
            >
              Ready to turn your vision into a{" "}
              <span className="accentuate">real</span> product?
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="type-lead mx-auto mt-7 max-w-xl text-muted">
              Share your idea and we&apos;ll map out a path forward — no sales
              pitch, just a real conversation about what&apos;s possible.
            </p>
          </Reveal>

          <Reveal index={3}>
            {sent ? (
              <p
                role="status"
                className="mx-auto mt-11 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-paper px-6 py-4 text-accent shadow-[var(--shadow-raise)]"
              >
                <Check className="h-5 w-5 shrink-0" />
                <span className="text-sm">
                  Thanks — we&apos;ll be in touch within one business day.
                </span>
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mx-auto mt-11 flex max-w-md flex-col gap-3 sm:flex-row"
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
                  className="min-h-12 w-full rounded-full border border-line bg-paper px-6 text-sm text-ink shadow-[var(--shadow-raise)] transition-colors placeholder:text-faint focus:border-accent/60 focus:outline-none"
                />
                <button type="submit" className="btn btn-primary group shrink-0">
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </Reveal>

          <Reveal index={4}>
            <p className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-faint">
              <span>Or reach us directly</span>
              <a
                href="mailto:digigoplus@gmail.com"
                className="link-draw text-muted"
              >
                digigoplus@gmail.com
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="mailto:rajputkapil436@gmail.com"
                className="link-draw text-muted"
              >
                rajputkapil436@gmail.com
              </a>
              <span aria-hidden="true">·</span>
              <a href="tel:+917049875864" className="link-draw text-muted">
                +91 70498 75864
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
