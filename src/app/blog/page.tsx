import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { formatDate, posts, readingMinutes } from "@/content/blog";
import { breadcrumbSchema } from "@/lib/schema";

const title = "Blog: Software, AI and Automation Guides";
const description =
  "Practical guides from Nexopsdev Technologies on website costs, e-commerce platforms, ERP, WhatsApp automation, chatbots, voicebots and AI agents for Indian businesses.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/blog",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogPage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        eyebrow="Blog"
        title="Plain-language guides to software, AI and automation"
        lead="What things cost, how they work and how to choose, written for business owners rather than developers."
      />

      <section className="bg-paper py-20 sm:py-28" aria-label="Articles">
        <div className="shell">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} index={i % 3} as="li" className="h-full">
                <Link
                  href={`/blog/${p.slug}`}
                  className="card group flex h-full flex-col p-8"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
                      {p.category}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-faint transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                  </span>
                  <h2 className="font-display type-h3 mt-6 text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <p className="mt-auto pt-7 text-xs text-faint">
                    <time dateTime={p.date}>{formatDate(p.date)}</time> ·{" "}
                    {readingMinutes(p)} min read
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTA source="blog" />
    </main>
  );
}
