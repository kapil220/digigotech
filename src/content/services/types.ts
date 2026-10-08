import type { LucideIcon } from "lucide-react";

export interface Faq {
  q: string;
  a: string;
}

export interface Point {
  title: string;
  copy: string;
}

export interface Service {
  slug: string;
  /** Short name used in navigation, cards and breadcrumbs. */
  name: string;
  icon: LucideIcon;
  /** Seed for the contour watermark on the card. */
  seed: number;
  /** One or two sentences for cards and listings. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  /**
   * "Starting from" figure, e.g. "₹25,000". Leave undefined until the real
   * number is agreed — the page simply omits the price block.
   */
  startingPrice?: string;
  includes: Point[];
  useCases: Point[];
  steps: Point[];
  stack: string[];
  faqs: Faq[];
  /** Slugs of related services. */
  related: string[];
  /** Slugs of projects in src/content/work.ts that show this service. */
  work: string[];
}
