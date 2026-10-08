import { Plus } from "lucide-react";
import type { Faq } from "@/content/services";

/**
 * Questions as native <details> elements: the answers are in the HTML for
 * crawlers and work without JavaScript.
 */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="border-t border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-lg leading-snug text-ink sm:text-xl">
              {f.q}
            </h3>
            <Plus
              aria-hidden="true"
              className="mt-1 h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
              strokeWidth={1.6}
            />
          </summary>
          <p className="max-w-3xl pb-7 text-[15px] leading-relaxed text-muted sm:text-base">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
