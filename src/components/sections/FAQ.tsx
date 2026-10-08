import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import type { Faq } from "@/content/services";

export default function FAQ({ faqs }: { faqs: Faq[] }) {
  return (
    <section
      id="faq"
      className="relative bg-canvas py-24 sm:py-36"
      aria-labelledby="faq-heading"
    >
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Questions</p>
          <h2
            id="faq-heading"
            className="font-display type-h2 mt-6 max-w-[12ch] text-balance text-ink"
          >
            Before you <span className="accentuate">ask</span>.
          </h2>
        </Reveal>
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}
