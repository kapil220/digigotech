"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const projects = [
  {
    name: "Northwind Logistics",
    category: "Custom ERP",
    blurb:
      "A real-time fleet & inventory platform that replaced 4 spreadsheets and a legacy desktop app.",
    result: "−38% dispatch time",
    accent: "from-cyan/20 to-violet/10",
  },
  {
    name: "Lumen Health",
    category: "Mobile App",
    blurb:
      "A patient companion app with appointment booking, reminders, and secure messaging.",
    result: "120k+ installs",
    accent: "from-violet/20 to-amber/10",
  },
  {
    name: "Atlas Capital",
    category: "Web Platform",
    blurb:
      "An investor portal with live dashboards, document rooms, and role-based access.",
    result: "$2B+ assets tracked",
    accent: "from-amber/15 to-cyan/10",
  },
  {
    name: "Brewhouse CRM",
    category: "CRM System",
    blurb:
      "A sales pipeline and customer hub tailored to a fast-growing D2C beverage brand.",
    result: "2.1× lead conversion",
    accent: "from-cyan/15 to-violet/15",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative bg-surface py-28 sm:py-36"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan">
                Selected work
              </p>
            </Reveal>
            <Reveal index={1}>
              <h2
                id="work-heading"
                className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl"
              >
                Products we&apos;re proud of.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} index={i} className="group">
              <a
                href="#contact"
                className="relative block h-full overflow-hidden rounded-2xl border border-line bg-base p-8 transition-colors duration-300 hover:border-cyan/30"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {p.category}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <p className="mt-6 font-display text-lg font-semibold text-cyan">
                    {p.result}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
