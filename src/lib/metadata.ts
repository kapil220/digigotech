import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMeta {
  title: string;
  description: string;
  /** Path from the site root, e.g. "/services/website-development". */
  path: string;
}

/**
 * Title, description, canonical and share tags for an inner page. A page's
 * `openGraph` replaces the layout's rather than merging with it, so the site
 * name, locale and share image are restated here.
 */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_IN",
      url: path,
      title,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
