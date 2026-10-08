import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import LeadButton from "@/components/lead/LeadButton";
import ServiceDetail from "@/components/sections/ServiceDetail";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { getService, servicePath, services } from "@/content/services";
import { site } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: servicePath(service.slug),
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = servicePath(service.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path },
  ];

  return (
    <main id="main">
      <JsonLd
        data={serviceSchema(service, {
          path,
          description: service.metaDescription,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(service.faqs)} />

      <PageHero
        crumbs={crumbs}
        eyebrow={service.name}
        title={service.h1}
        lead={service.intro[0]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <LeadButton source={`service-${service.slug}`}>
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

      <ServiceDetail
        service={service}
        lead={service.intro[1]}
        faqs={service.faqs}
      />

      <CTA source={`service-${service.slug}`} />
    </main>
  );
}
