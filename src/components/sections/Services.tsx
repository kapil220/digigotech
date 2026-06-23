"use client";

import { Globe2, Smartphone, Database, Boxes } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    icon: Globe2,
    title: "Websites & Web Apps",
    copy: "Marketing sites, dashboards, and complex web platforms — fast, accessible, and built on a modern stack that's a joy to maintain.",
    tags: ["Next.js", "Design systems", "SEO"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    copy: "Native-feeling iOS and Android apps from a single codebase, with offline sync, push, and the polish your users expect.",
    tags: ["React Native", "Flutter", "App Store"],
  },
  {
    icon: Database,
    title: "CRM & ERP Systems",
    copy: "Operations software tailored to how your business actually runs — pipelines, inventory, billing, and reporting in one place.",
    tags: ["Workflows", "Integrations", "Analytics"],
  },
  {
    icon: Boxes,
    title: "Custom Software",
    copy: "Got a problem off-the-shelf tools can't solve? We architect and ship bespoke products, internal tools, and APIs end to end.",
    tags: ["APIs", "Automation", "Cloud"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-base py-28 sm:py-36"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan">
              What we do
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2
              id="services-heading"
              className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl"
            >
              One studio for the whole product.
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-5 text-lg text-muted">
              From the first wireframe to the production deploy, we cover every
              layer so you don&apos;t have to stitch together five vendors.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} index={i} className="group">
              <article className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-cyan/30">
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface-2 text-cyan transition-colors group-hover:border-cyan/40">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {s.copy}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
