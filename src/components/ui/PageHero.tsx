import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TopoContours } from "@/components/ui/Topo";
import type { Crumb } from "@/lib/schema";

interface PageHeroProps {
  /** Trail from the home page to this page, current page last. */
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  /** Buttons, price plate or other content under the lead paragraph. */
  children?: React.ReactNode;
}

/**
 * Opening block for every inner page: breadcrumb, eyebrow, the page's single
 * <h1> and a lead paragraph, over the same contour field as the home hero.
 */
export default function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      <TopoContours
        variant="hero"
        opacity={0.3}
        parallax={false}
        className="opacity-80 [mask-image:radial-gradient(ellipse_at_75%_30%,black_10%,transparent_70%)]"
      />

      <div className="shell relative z-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-faint">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={c.path} className="flex items-center gap-1.5">
                  {last ? (
                    <span aria-current="page" className="text-muted">
                      {c.name}
                    </span>
                  ) : (
                    <>
                      <Link href={c.path} className="link-draw">
                        {c.name}
                      </Link>
                      <ChevronRight aria-hidden="true" className="h-3 w-3" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="font-display type-h2 mt-6 max-w-[22ch] text-balance text-ink">
          {title}
        </h1>
        {lead && (
          <p className="type-lead mt-7 max-w-2xl text-muted">{lead}</p>
        )}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
