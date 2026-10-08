import type { PostSection } from "@/content/blog";

/** Long-form body copy: headed sections of paragraphs and bulleted lists. */
export default function ProseSections({ sections }: { sections: PostSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} className="mt-14 first:mt-0">
          <h2 className="font-display text-[clamp(1.5rem,1.2rem+1.2vw,2.1rem)] leading-[1.12] tracking-[-0.02em] text-ink">
            {section.heading}
          </h2>
          {section.body.map((block, i) =>
            typeof block === "string" ? (
              <p
                key={i}
                className="mt-5 text-base leading-[1.75] text-muted sm:text-[17px]"
              >
                {block}
              </p>
            ) : (
              <ul
                key={i}
                className="mt-5 space-y-3 text-base leading-[1.7] text-muted sm:text-[17px]"
              >
                {block.list.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          )}
        </section>
      ))}
    </>
  );
}
