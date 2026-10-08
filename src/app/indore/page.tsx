import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import LeadButton from "@/components/lead/LeadButton";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { indore, indoreServices } from "@/content/locations";
import { servicePath, services } from "@/content/services";
import { site } from "@/content/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: indore.metaTitle,
  description: indore.metaDescription,
  path: "/indore",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Indore", path: "/indore" },
];

const localSlugs = new Set(indoreServices.map((s) => s.slug));
const otherServices = services.filter((s) => !localSlugs.has(s.slug));

export default function IndorePage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(indore.faqs)} />

      <PageHero
        crumbs={crumbs}
        eyebrow="Indore, Madhya Pradesh"
        title={indore.h1}
        lead={indore.intro}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <LeadButton source="indore">Get a free consultation</LeadButton>
          <a href={site.phone.href} className="btn btn-ghost">
            Call {site.phone.display}
          </a>
        </div>
      </PageHero>

      <section className="bg-paper py-20 sm:py-28" aria-labelledby="indore-services">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">What we do in Indore</p>
            <h2
              id="indore-services"
              className="font-display type-h2 mt-6 max-w-[20ch] text-balance text-ink"
            >
              IT services for Indore <span className="accentuate">businesses</span>
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {indoreServices.map((s, i) => (
              <Reveal key={s.slug} index={i % 3} as="li" className="h-full">
                <Link
                  href={`/indore/${s.slug}`}
                  className="card group flex h-full flex-col p-8"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-display type-h3 text-ink">
                      {s.label}
                    </span>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-faint transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                  </span>
                  <span className="mt-3 text-[15px] leading-relaxed text-muted">
                    {s.intro}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 border-t border-line pt-8">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-faint">
              Also available
            </h3>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={servicePath(s.slug)}
                    className="link-draw text-sm text-muted"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-28" aria-labelledby="indore-why">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Why a local team</p>
            <h2
              id="indore-why"
              className="font-display type-h2 mt-6 max-w-[14ch] text-balance text-ink"
            >
              An Indore tech firm you can <span className="accentuate">meet</span>
            </h2>
          </Reveal>
          <ul>
            {indore.why.map((w, i) => (
              <Reveal key={w.title} index={i} as="li">
                <div className="border-t border-line py-7">
                  <h3 className="font-display type-h3 text-ink">{w.title}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                    {w.copy}
                  </p>
                </div>
              </Reveal>
            ))}
            <li aria-hidden="true" className="border-t border-line" />
          </ul>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28" aria-labelledby="indore-industries">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Industries</p>
            <h2
              id="indore-industries"
              className="font-display type-h2 mt-6 max-w-[20ch] text-balance text-ink"
            >
              Software for the businesses that drive{" "}
              <span className="accentuate">Indore</span>
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {indore.industries.map((item, i) => (
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

          <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-start sm:gap-8">
            <h3 className="shrink-0 pt-1 text-[11px] uppercase tracking-[0.2em] text-faint">
              Areas we serve
            </h3>
            <ul className="flex flex-wrap gap-2">
              {indore.areas.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-28" aria-labelledby="indore-faq">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2
              id="indore-faq"
              className="font-display type-h2 mt-6 max-w-[12ch] text-balance text-ink"
            >
              Asked <span className="accentuate">often</span>
            </h2>
          </Reveal>
          <FaqList faqs={indore.faqs} />
        </div>
      </section>

      <CTA source="indore" />
    </main>
  );
}
