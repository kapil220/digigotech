"use client";

import { Globe2, Smartphone, Database, Boxes, Bot } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { TopoChip } from "@/components/ui/Topo";
import SectionCTA from "@/components/lead/SectionCTA";

/**
 * AI agents lead the section rather than sitting fifth in a grid — it's the
 * offering people arrive looking for, and a full-width plate lets it say more.
 */
const lead = {
  icon: Bot,
  seed: 331,
  title: "AI Agents & Business Automation",
  copy: "We build agents that actually do the work — answering customers, qualifying leads, chasing invoices, processing documents, keeping your CRM honest. They plug into the tools you already run, escalate to a human when they should, and are monitored so you can see exactly what they did and why.",
  tags: [
    "Customer support agents",
    "Sales & lead qualification",
    "Document processing",
    "Workflow automation",
    "RAG & knowledge assistants",
    "Voice & WhatsApp bots",
  ],
};

const services = [
  {
    icon: Globe2,
    seed: 12,
    title: "Websites & Web Apps",
    copy: "Marketing sites, dashboards, and complex web platforms — fast, accessible, and built on a modern stack that's a joy to maintain.",
    tags: ["Next.js", "Design systems", "SEO"],
  },
  {
    icon: Smartphone,
    seed: 47,
    title: "Mobile Apps",
    copy: "Native-feeling iOS and Android apps from a single codebase, with offline sync, push, and the polish your users expect.",
    tags: ["React Native", "Flutter", "App Store"],
  },
  {
    icon: Database,
    seed: 83,
    title: "CRM & ERP Systems",
    copy: "Operations software tailored to how your business actually runs — pipelines, inventory, billing, and reporting in one place.",
    tags: ["Workflows", "Integrations", "Analytics"],
  },
  {
    icon: Boxes,
    seed: 205,
    title: "Custom Software",
    copy: "Got a problem off-the-shelf tools can't solve? We architect and ship bespoke products, internal tools, and APIs end to end.",
    tags: ["APIs", "Automation", "Cloud"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-canvas py-24 sm:py-36"
      aria-labelledby="services-heading"
    >
      <div className="shell">
        <div className="grid gap-8 border-t border-line pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2
              id="services-heading"
              className="font-display type-h2 mt-6 max-w-[16ch] text-balance text-ink"
            >
              One studio for the <span className="accentuate">whole</span>{" "}
              product.
            </h2>
          </Reveal>
          <Reveal index={1} className="lg:pt-4">
            <p className="type-lead max-w-xl text-muted">
              From the first wireframe to the production deploy — and the AI
              agents running quietly behind it — we cover every layer, so you
              don&apos;t have to stitch together five vendors and hope the seams
              hold.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2">
          {/* Lead offering: full-width plate */}
          <Reveal className="group sm:col-span-2">
            <article className="card relative overflow-hidden p-8 sm:p-10 lg:p-14">
              <div className="pointer-events-none absolute -right-24 -top-28 h-[26rem] w-[26rem] text-clay opacity-[0.16] transition-[opacity,color,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:text-accent group-hover:opacity-25">
                <TopoChip seed={lead.seed} />
              </div>

              <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-sunken text-accent">
                    <lead.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-accent">
                    Our flagship practice
                  </p>
                  <h3 className="font-display mt-3 text-[clamp(1.6rem,1.2rem+1.6vw,2.6rem)] leading-[1.08] tracking-[-0.025em] text-ink">
                    {lead.title}
                  </h3>
                </div>

                <div className="lg:pt-2">
                  <p className="text-[15px] leading-relaxed text-muted sm:text-base">
                    {lead.copy}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {lead.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors group-hover:border-line-strong"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          {services.map((s, i) => (
            <Reveal key={s.title} index={i % 2} className="group h-full">
              <article className="card relative h-full overflow-hidden p-8 sm:p-10">
                {/* Contour watermark — a plan-view map chip bleeding off the
                    corner. Warms up to the accent on hover. */}
                <div className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 text-clay opacity-[0.18] transition-[opacity,color,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:text-accent group-hover:opacity-30">
                  <TopoChip seed={s.seed} />
                </div>

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-sunken text-accent">
                    <s.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>

                  <h3 className="font-display type-h3 mt-7 text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                    {s.copy}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors group-hover:border-line-strong"
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

        <SectionCTA
          title="Not sure which one you need?"
          copy="Tell us the problem — we'll tell you what we'd build and what it would take."
          label="Get a free consultation"
          source="services"
        />
      </div>
    </section>
  );
}
