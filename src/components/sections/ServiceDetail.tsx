import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import { TopoChip } from "@/components/ui/Topo";
import { ProjectCard } from "@/components/sections/Work";
import { getService, servicePath, type Faq, type Service } from "@/content/services";
import { projects } from "@/content/work";

interface ServiceDetailProps {
  service: Service;
  /** Second paragraph of context, shown beside the "what's included" heading. */
  lead: string;
  faqs: Faq[];
  /** Extra section rendered after the deliverables, e.g. local context. */
  children?: React.ReactNode;
}

/**
 * The body shared by a service page and its Indore counterpart: deliverables,
 * who it suits, the process, stack, related work, FAQs and related services.
 */
export default function ServiceDetail({
  service,
  lead,
  faqs,
  children,
}: ServiceDetailProps) {
  const work = projects.filter((p) => service.work.includes(p.slug));
  const related = service.related
    .map(getService)
    .filter((s): s is Service => s !== undefined);

  return (
    <>
      <section
        className="relative bg-paper py-20 sm:py-28"
        aria-labelledby="includes-heading"
      >
        <div className="shell">
          <div className="grid gap-8 border-t border-line pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <Reveal>
              <p className="eyebrow">What you get</p>
              <h2
                id="includes-heading"
                className="font-display type-h2 mt-6 max-w-[16ch] text-balance text-ink"
              >
                What is <span className="accentuate">included</span>
              </h2>
            </Reveal>
            <Reveal index={1} className="lg:pt-4">
              <p className="type-lead max-w-xl text-muted">{lead}</p>
            </Reveal>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item, i) => (
              <Reveal key={item.title} index={i % 3} as="li" className="h-full">
                <article className="card h-full p-7 sm:p-8">
                  <h3 className="font-display text-xl leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {children}

      <section
        className="relative bg-canvas py-20 sm:py-28"
        aria-labelledby="usecases-heading"
      >
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Who it is for</p>
            <h2
              id="usecases-heading"
              className="font-display type-h2 mt-6 max-w-[14ch] text-balance text-ink"
            >
              Where it fits <span className="accentuate">best</span>
            </h2>
          </Reveal>
          <ul>
            {service.useCases.map((u, i) => (
              <Reveal key={u.title} index={i} as="li">
                <div className="border-t border-line py-7">
                  <h3 className="font-display type-h3 text-ink">{u.title}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                    {u.copy}
                  </p>
                </div>
              </Reveal>
            ))}
            <li aria-hidden="true" className="border-t border-line" />
          </ul>
        </div>
      </section>

      <section
        className="relative bg-paper py-20 sm:py-28"
        aria-labelledby="steps-heading"
      >
        <div className="shell">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2
              id="steps-heading"
              className="font-display type-h2 mt-6 max-w-[18ch] text-balance text-ink"
            >
              From first call to <span className="accentuate">live</span>
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((s, i) => (
              <Reveal key={s.title} index={i} as="li" className="h-full">
                <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-line bg-canvas p-7">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 text-clay opacity-25">
                    <TopoChip seed={service.seed + i * 13} />
                  </div>
                  <span className="tnum relative font-display text-sm font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-4 font-display text-xl text-ink">
                    {s.title}
                  </h3>
                  <p className="relative mt-2 text-[15px] leading-relaxed text-muted">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:gap-8">
            <h3 className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-faint">
              Tools we use
            </h3>
            <ul className="flex flex-wrap gap-2">
              {service.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {work.length > 0 && (
        <section
          className="relative bg-canvas py-20 sm:py-28"
          aria-labelledby="related-work-heading"
        >
          <div className="shell">
            <Reveal>
              <p className="eyebrow">Related work</p>
              <h2
                id="related-work-heading"
                className="font-display type-h2 mt-6 max-w-[18ch] text-balance text-ink"
              >
                Projects we have <span className="accentuate">shipped</span>
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {work.slice(0, 4).map((p, i) => (
                <Reveal key={p.slug} index={i % 2} className="h-full">
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        className="relative bg-paper py-20 sm:py-28"
        aria-labelledby="faq-heading"
      >
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2
              id="faq-heading"
              className="font-display type-h2 mt-6 max-w-[12ch] text-balance text-ink"
            >
              Asked <span className="accentuate">often</span>
            </h2>
          </Reveal>
          <FaqList faqs={faqs} />
        </div>
      </section>

      {related.length > 0 && (
        <section
          className="relative bg-canvas py-20 sm:py-24"
          aria-labelledby="related-services-heading"
        >
          <div className="shell">
            <h2
              id="related-services-heading"
              className="text-[11px] uppercase tracking-[0.2em] text-faint"
            >
              Related services
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={servicePath(r.slug)}
                    className="card group flex h-full flex-col p-7"
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span className="font-display text-xl leading-snug text-ink">
                        {r.name}
                      </span>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-faint transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                    </span>
                    <span className="mt-3 text-sm leading-relaxed text-muted">
                      {r.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
