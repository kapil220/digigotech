"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useLead } from "@/components/lead/LeadProvider";
import { TopoContours } from "@/components/ui/Topo";
import { studioImage } from "@/content/work";

const stats = [
  { value: "40+", label: "Products shipped" },
  { value: "6 wks", label: "Avg. to first launch" },
  { value: "98%", label: "Client retention" },
  { value: "24/7", label: "Post-launch support" },
];

/**
 * A "survey plate": the photograph sits inside a contour frame, drifting
 * against a slower-moving topographic field so the block has real depth
 * without resorting to a drop shadow.
 */
function StudioPlate() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [42, -42]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Contour field behind, offset up-left so it reads as a separate plane */}
      <div className="pointer-events-none absolute -left-10 -top-10 bottom-16 right-16 hidden sm:block">
        <TopoContours
          variant="portrait"
          opacity={0.34}
          className="[mask-image:linear-gradient(200deg,black_10%,transparent_75%)]"
        />
      </div>

      <motion.figure
        style={reduced ? undefined : { y }}
        className="group relative overflow-hidden rounded-[1.5rem] border border-line bg-sunken shadow-[var(--shadow-lift)]"
      >
        <div className="relative aspect-[4/5]">
          <Image
            src={studioImage.src}
            alt={studioImage.alt}
            fill
            sizes="(max-width: 1024px) 92vw, 42vw"
            className="photo-warm object-cover"
          />
          {/* Scrim keeps the navy brand palette intact over full-colour photos */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#041034]/80 via-[#041034]/15 to-transparent"
          />
          {/* Contour overlay — ties the photograph to the page's motif */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40 mix-blend-overlay"
          >
            <TopoContours variant="portrait" opacity={0.9} parallax={false} />
          </div>
        </div>

        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
          <p className="max-w-[22ch] font-display text-lg leading-snug text-white">
            Built in the open, shipped every week.
          </p>
          <span className="tnum shrink-0 rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
            Est. 2019
          </span>
        </figcaption>
      </motion.figure>
    </div>
  );
}

export default function Why() {
  const { openLead } = useLead();
  return (
    <section
      id="about"
      className="grain relative overflow-hidden bg-paper py-24 sm:py-36"
      aria-labelledby="why-heading"
    >
      <div className="shell relative">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow">Why Nexopsdev Technologies</p>
            </Reveal>
            <Reveal index={1}>
              <h2
                id="why-heading"
                className="font-display type-h2 mt-6 max-w-[17ch] text-balance text-ink"
              >
                A senior team that ships like it&apos;s{" "}
                <span className="accentuate">their own</span> product.
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="type-lead mt-7 max-w-xl text-muted">
                No junior hand-offs, no endless tickets. You work directly with
                the people designing and writing the code — so decisions are
                fast and the quality bar stays high from kickoff to launch.
              </p>
            </Reveal>
            <Reveal index={3}>
              <button
                onClick={() => openLead("about")}
                className="btn btn-primary group mt-9"
              >
                Talk to the team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Reveal>

            <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:gap-x-6">
              {stats.map((s, i) => (
                <Reveal key={s.label} index={i}>
                  <div className="border-t border-line pt-4">
                    <dt className="font-display tnum text-3xl text-ink sm:text-[2.5rem] sm:leading-none">
                      {s.value}
                    </dt>
                    <dd className="mt-2 text-xs leading-snug text-muted">
                      {s.label}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal index={1}>
            <StudioPlate />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
