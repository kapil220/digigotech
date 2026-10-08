import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import LeadButton from "@/components/lead/LeadButton";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { serviceGroups, servicePath } from "@/content/services";
import { breadcrumbSchema } from "@/lib/schema";

const title = "Software & AI Development Services";
const description =
  "Services from Nexopsdev Technologies, Indore: website, e-commerce, SaaS, ERP, CRM and mobile app development, plus AI agents, chatbots, voicebots and WhatsApp automation.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/services",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        eyebrow="Services"
        title="Software and AI development services, from one team"
        lead="We design and build websites, online stores, SaaS products, ERP and CRM systems and mobile apps, and the AI agents, chatbots, voicebots and WhatsApp automation that run alongside them. Based in Indore, working with clients across India and abroad."
      >
        <LeadButton source="services-index">Get a free consultation</LeadButton>
      </PageHero>

      {serviceGroups.map((group, gi) => (
        <section
          key={group.heading}
          className={gi % 2 === 0 ? "bg-paper py-20 sm:py-28" : "bg-canvas py-20 sm:py-28"}
          aria-labelledby={`group-${gi}`}
        >
          <div className="shell">
            <Reveal>
              <h2
                id={`group-${gi}`}
                className="font-display type-h2 border-t border-line pt-12 text-ink"
              >
                {group.heading}
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.services.map((s, i) => (
                <Reveal key={s.slug} index={i % 3} as="li" className="h-full">
                  <Link
                    href={servicePath(s.slug)}
                    className="card group flex h-full flex-col p-8"
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-sunken text-accent">
                        <s.icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-faint transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                    </span>
                    <h3 className="font-display type-h3 mt-7 text-ink">
                      {s.name}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {s.summary}
                    </p>
                    {s.startingPrice && (
                      <p className="mt-auto pt-6 text-sm text-muted">
                        Starting from{" "}
                        <span className="text-ink">{s.startingPrice}</span>
                      </p>
                    )}
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CTA source="services-index" />
    </main>
  );
}
