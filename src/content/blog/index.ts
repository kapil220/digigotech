import { postsA } from "./posts-a";
import { postsB } from "./posts-b";
import type { Post } from "./types";

export type { Block, Post, PostSection } from "./types";

export const posts: Post[] = [...postsA, ...postsB];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Rough reading time at 220 words a minute. */
export function readingMinutes(post: Post): number {
  const text = [
    ...post.intro,
    ...post.sections.flatMap((s) => [
      s.heading,
      ...s.body.flatMap((b) => (typeof b === "string" ? [b] : b.list)),
    ]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
