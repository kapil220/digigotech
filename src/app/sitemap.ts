import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { indoreServices } from "@/content/locations";
import { servicePath, services } from "@/content/services";
import { absoluteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (
    path: string,
    priority: number,
    lastModified: Date | string = now
  ): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("/", 1),
    page("/services", 0.9),
    ...services.map((s) => page(servicePath(s.slug), 0.9)),
    page("/indore", 0.9),
    ...indoreServices.map((s) => page(`/indore/${s.slug}`, 0.8)),
    page("/about", 0.6),
    page("/contact", 0.6),
    page("/blog", 0.7),
    ...posts.map((p) => page(`/blog/${p.slug}`, 0.6, p.date)),
    page("/privacy", 0.2),
    page("/terms", 0.2),
  ];
}
