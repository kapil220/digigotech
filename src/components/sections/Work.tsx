"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { TopoContours } from "@/components/ui/Topo";
import { projects, type Project } from "@/content/work";
import { cn } from "@/lib/utils";

function ProjectCard({
  project: p,
  feature = false,
}: {
  project: Project;
  feature?: boolean;
}) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${p.name} — ${p.category}, opens ${p.domain} in a new tab`}
      className={cn(
        "card group relative flex h-full flex-col overflow-hidden",
        feature && "lg:flex-row"
      )}
    >
      {/* Screenshot of the live site. The sunken plate behind means a slow load
          reads as an intentional frame rather than a hole in the card. */}
      <div
        className={cn(
          "relative shrink-0 overflow-hidden bg-sunken",
          feature ? "aspect-[16/10] lg:aspect-auto lg:w-[56%]" : "aspect-[16/10]"
        )}
      >
        <Image
          src={p.image}
          alt={p.imageAlt}
          fill
          sizes={
            feature
              ? "(max-width: 1024px) 92vw, 56vw"
              : "(max-width: 640px) 92vw, 46vw"
          }
          className="photo-warm object-cover object-top"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#141413]/45 via-transparent to-transparent"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
          {p.category}
        </span>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col p-7 sm:p-9",
          feature && "lg:justify-center lg:p-12"
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display type-h3 text-ink">{p.name}</h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-faint transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
        </div>

        <p
          className={cn(
            "mt-3 text-[15px] leading-relaxed text-muted",
            feature ? "max-w-md" : "max-w-sm"
          )}
        >
          {p.blurb}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-4 pt-8">
          <p className="flex items-baseline gap-2 text-sm">
            <span className="text-accent">{p.domain}</span>
            <span className="text-xs text-faint">· {p.sector}</span>
          </p>
          <ul className="flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line px-2.5 py-1 text-[11px] text-faint"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}

export default function Work() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="work"
      className="grain relative overflow-hidden bg-paper py-24 sm:py-36"
      aria-labelledby="work-heading"
    >
      <TopoContours
        variant="portrait"
        opacity={0.16}
        className="[mask-image:linear-gradient(to_bottom,black,transparent_60%)]"
      />

      <div className="shell relative">
        <div className="flex flex-wrap items-end justify-between gap-8 border-t border-line pt-12">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2
              id="work-heading"
              className="font-display type-h2 mt-6 max-w-[16ch] text-balance text-ink"
            >
              Products we&apos;re <span className="accentuate">proud</span> of.
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              Every one of these is live right now, and still ours to look
              after. Open any card to see it for yourself.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-20 sm:grid-cols-2">
          <Reveal className="sm:col-span-2">
            <ProjectCard project={featured} feature />
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={p.slug} index={i % 2} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
