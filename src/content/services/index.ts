import { aiServices } from "./ai";
import { softwareServices } from "./software";
import type { Service } from "./types";

export type { Faq, Point, Service } from "./types";

/** AI first: it is the flagship practice and leads every listing. */
export const services: Service[] = [...aiServices, ...softwareServices];

export const serviceGroups = [
  { heading: "AI & automation", services: aiServices },
  { heading: "Software & web", services: softwareServices },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function servicePath(slug: string): string {
  return `/services/${slug}`;
}
