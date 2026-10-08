import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ProseSections from "@/components/ui/ProseSections";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { formatDate, getPost, posts, readingMinutes } from "@/content/blog";
import { getService, servicePath, type Service } from "@/content/services";
import { site } from "@/content/site";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const base = pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
  return {
    ...base,
    // Article titles are long enough already — skip the site-name suffix.
    title: { absolute: post.title },
    authors: [{ name: site.blogAuthor }],
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: [site.blogAuthor],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];
  const related = post.services
    .map(getService)
    .filter((s): s is Service => s !== undefined);
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main id="main">
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        eyebrow={post.category}
        title={post.title}
        lead={post.description}
      >
        <p className="text-sm text-muted">
          By {site.blogAuthor} ·{" "}
          <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
          {readingMinutes(post)} min read
        </p>
      </PageHero>

      <article className="bg-paper py-16 sm:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
          <div className="max-w-[68ch]">
            {post.intro.map((p) => (
              <p
                key={p}
                className="type-lead mb-6 text-ink"
              >
                {p}
              </p>
            ))}

            <div className="mt-14">
              <ProseSections sections={post.sections} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-faint">
              Related services
            </h2>
            <ul className="mt-5 space-y-3">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={servicePath(s.slug)}
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-line bg-canvas p-5 transition-colors hover:border-line-strong"
                  >
                    <span className="font-display text-lg leading-snug text-ink">
                      {s.name}
                    </span>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>

      <section className="bg-canvas py-20 sm:py-24" aria-labelledby="more-heading">
        <div className="shell">
          <h2
            id="more-heading"
            className="text-[11px] uppercase tracking-[0.2em] text-faint"
          >
            Keep reading
          </h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="card group flex h-full flex-col p-7"
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
                    {p.category}
                  </span>
                  <span className="mt-4 font-display text-xl leading-snug text-ink">
                    {p.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA source={`blog-${post.slug}`.slice(0, 60)} />
    </main>
  );
}
