import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import LeadButton from "@/components/lead/LeadButton";
import ServiceDetail from "@/components/sections/ServiceDetail";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { getIndoreService, indoreServices } from "@/content/locations";
import { getService, servicePath } from "@/content/services";
import { site } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ service: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return indoreServices.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const local = getIndoreService(slug);
  if (!local) return {};
  return pageMetadata({
    title: local.metaTitle,
    description: local.metaDescription,
    path: `/indore/${local.slug}`,
  });
}

export default async function IndoreServicePage({ params }: Props) {
  const { service: slug } = await params;
  const local = getIndoreService(slug);
  const service = getService(slug);
  if (!local || !service) notFound();

  const path = `/indore/${local.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Indore", path: "/indore" },
    { name: service.name, path },
  ];
  // Local questions first; the general ones follow for depth.
  const faqs = [...local.faqs, ...service.faqs.slice(0, 3)];

  return (
    <main id="main">
      <JsonLd
        data={serviceSchema(service, {
          path,
          description: local.metaDescription,
          city: site.location.city,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        crumbs={crumbs}
        eyebrow={`${service.name} · Indore`}
        title={local.h1}
        lead={local.intro}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <LeadButton source={`indore-${local.slug}`}>
            Get a free quote
          </LeadButton>
          <a href={site.phone.href} className="btn btn-ghost">
            Call {site.phone.display}
          </a>
        </div>
        {service.startingPrice && (
          <p className="mt-8 inline-flex items-baseline gap-3 rounded-full border border-line bg-paper px-5 py-2.5 text-sm text-muted">
            Starting from
            <span className="font-display tnum text-xl text-ink">
              {service.startingPrice}
            </span>
          </p>
        )}
      </PageHero>

      <ServiceDetail service={service} lead={local.lead} faqs={faqs}>
        <section
          className="relative bg-canvas py-20 sm:py-28"
          aria-labelledby="local-heading"
        >
          <div className="shell">
            <Reveal>
              <p className="eyebrow">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
                For Indore businesses
              </p>
              <h2
                id="local-heading"
                className="font-display type-h2 mt-6 max-w-[20ch] text-balance text-ink"
              >
                Built for how Indore does{" "}
                <span className="accentuate">business</span>
              </h2>
            </Reveal>
            <ul className="mt-14 grid gap-x-12 sm:grid-cols-2">
              {local.local.map((item, i) => (
                <Reveal key={item.title} index={i % 2} as="li">
                  <div className="border-t border-line py-7">
                    <h3 className="font-display type-h3 text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                      {item.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Link
              href={servicePath(service.slug)}
              className="link-draw mt-8 inline-flex items-center gap-2 text-sm text-accent"
            >
              More about our {service.name} service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </ServiceDetail>

      <CTA source={`indore-${local.slug}`} />
    </main>
  );
}
