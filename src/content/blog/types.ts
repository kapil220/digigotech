/** A paragraph, or a bulleted list. */
export type Block = string | { list: string[] };

export interface PostSection {
  heading: string;
  body: Block[];
}

export interface Post {
  slug: string;
  title: string;
  /** Meta description and listing excerpt. */
  description: string;
  /** ISO date, e.g. "2026-10-08". */
  date: string;
  category: string;
  /** Opening paragraphs, before the first heading. */
  intro: string[];
  sections: PostSection[];
  /** Slugs of the service pages this article should link to. */
  services: string[];
}
