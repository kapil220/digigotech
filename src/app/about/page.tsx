import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import LeadButton from "@/components/lead/LeadButton";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { servicePath, services } from "@/content/services";
import { projects } from "@/content/work";
import { breadcrumbSchema } from "@/lib/schema";

const title = "About Us: Software & AI Company in Indore";
const description =
  "About Nexopsdev Technologies, a software and AI development company in Indore, India. Who we are, how we work and the products we have built for clients in India and abroad.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/about",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const principles = [
  {
    title: "You talk to the people building it",
    copy: "No account managers relaying messages. The people who design and write your software are the people on your calls, so decisions are quick and nothing is lost in translation.",
  },
  {
    title: "Working software every week",
    copy: "You get a link to something you can click, not a status report. Problems surface early, while they are still cheap to fix.",
  },
  {
    title: "We say when you do not need us",
    copy: "If a ready-made tool or a simpler approach would do the job, we tell you. A project that should not have been built helps nobody.",
  },
  {
    title: "You own everything",
    copy: "Code, designs, data, domains and accounts are in your name from the start, with documentation and a clean handover.",
  },
  {
    title: "AI where it earns its place",
    copy: "We use AI to remove real work, such as answering customers, reading documents and updating systems, and we measure whether it is doing so.",
  },
  {
    title: "We stay after launch",
    copy: "Software needs care once people use it. We monitor, fix and keep improving what we have built.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        eyebrow="About Nexopsdev Technologies"
        title="A software and AI studio from Indore, building for businesses everywhere"
        lead="Nexopsdev Technologies designs and builds websites, e-commerce stores, SaaS products, ERP and CRM systems, mobile apps and AI automation. We are based in Indore, Madhya Pradesh, and work with founders and growing businesses across India and abroad."
      >
        <LeadButton source="about-page">Talk to the team</LeadButton>
      </PageHero>

      <section className="bg-paper py-20 sm:py-28" aria-labelledby="what-heading">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2
              id="what-heading"
              className="font-display type-h2 mt-6 max-w-[14ch] text-balance text-ink"
            >
              One team for the <span className="accentuate">whole</span> product
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="type-lead max-w-xl text-muted">
              Most businesses end up managing a designer, a web agency, an app
              developer and an automation freelancer, and hoping their work
              fits together. We cover every layer ourselves, from the first
              wireframe to the AI agent running behind the finished product.
            </p>
            <ul className="mt-9 flex flex-wrap gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={servicePath(s.slug)}
                    className="inline-block rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-28" aria-labelledby="how-heading">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2
              id="how-heading"
              className="font-display type-h2 mt-6 max-w-[18ch] text-balance text-ink"
            >
              Six things you can <span className="accentuate">hold</span> us to
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} index={i % 3} as="li" className="h-full">
                <article className="card h-full p-7 sm:p-8">
                  <h3 className="font-display text-xl leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {p.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28" aria-labelledby="clients-heading">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Who we have built for</p>
            <h2
              id="clients-heading"
              className="font-display type-h2 mt-6 max-w-[14ch] text-balance text-ink"
            >
              Real products, <span className="accentuate">live</span> today
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
              Every project here is in production. Follow the links and try
              them yourself.
            </p>
            <Link href="/#work" className="btn btn-ghost mt-8">
              See the work
            </Link>
          </Reveal>
          <ul>
            {projects.map((p, i) => (
              <Reveal key={p.slug} index={i % 4} as="li">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-baseline justify-between gap-6 border-t border-line py-5"
                >
                  <span className="font-display text-xl text-ink transition-colors group-hover:text-accent">
                    {p.name}
                  </span>
                  <span className="text-right text-xs text-faint">
                    {p.category} · {p.sector}
                  </span>
                </a>
              </Reveal>
            ))}
            <li aria-hidden="true" className="border-t border-line" />
          </ul>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-24" aria-labelledby="where-heading">
        <div className="shell max-w-3xl">
          <Reveal>
            <p className="eyebrow">Where we are</p>
            <h2
              id="where-heading"
              className="font-display type-h2 mt-6 text-balance text-ink"
            >
              Based in Indore, working <span className="accentuate">everywhere</span>
            </h2>
            <p className="type-lead mt-7 text-muted">
              Indore is home. For businesses in the city and across Madhya
              Pradesh we can meet in person, visit your office or factory and
              train your team on site. For everyone else, the work runs
              smoothly over video calls, shared staging links and WhatsApp.
            </p>
            <Link
              href="/indore"
              className="link-draw mt-6 inline-block text-sm text-accent"
            >
              Software development in Indore
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA source="about-page" />
    </main>
  );
}
