"use client";

import { Fragment } from "react";
import LeadForm from "@/components/lead/LeadForm";
import Reveal from "@/components/ui/Reveal";
import { TopoRidge } from "@/components/ui/Topo";
import { site } from "@/content/site";

interface CTAProps {
  /** Recorded with the lead so the sheet shows which page converted. */
  source?: string;
}

export default function CTA({ source = "contact-section" }: CTAProps) {
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
            <div className="mx-auto mt-11 max-w-xl rounded-[1.5rem] border border-line bg-paper p-6 shadow-[var(--shadow-raise)] sm:p-9">
              <LeadForm source={source} submitLabel="Get in touch" />
            </div>
          </Reveal>

          <Reveal index={4}>
            <p className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-faint">
              <span>Or reach us directly</span>
              {site.emails.map((email) => (
                <Fragment key={email}>
                  <a href={`mailto:${email}`} className="link-draw text-muted">
                    {email}
                  </a>
                  <span aria-hidden="true">·</span>
                </Fragment>
              ))}
              <a href={site.phone.href} className="link-draw text-muted">
                {site.phone.display}
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
