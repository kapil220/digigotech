import Reveal from "@/components/ui/Reveal";
import { industries } from "@/content/home";

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative bg-canvas py-24 sm:py-36"
      aria-labelledby="industries-heading"
    >
      <div className="shell">
        <div className="grid gap-8 border-t border-line pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Who we build for</p>
            <h2
              id="industries-heading"
              className="font-display type-h2 mt-6 max-w-[16ch] text-balance text-ink"
            >
              Software shaped to your <span className="accentuate">industry</span>.
            </h2>
          </Reveal>
          <Reveal index={1} className="lg:pt-4">
            <p className="type-lead max-w-xl text-muted">
              From factories in Pithampur to founders shipping their first
              SaaS product, we build for businesses in Indore, across India
              and abroad.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal key={item.title} index={i % 3} as="li">
              <div className="border-t border-line py-8">
                <h3 className="font-display type-h3 text-ink">{item.title}</h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
