import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { indoreServices } from "@/content/locations";
import { serviceGroups, servicePath } from "@/content/services";
import { site } from "@/content/site";

const columns = [
  ...serviceGroups.map((g) => ({
    heading: g.heading,
    links: g.services.map((s) => ({ label: s.name, href: servicePath(s.slug) })),
  })),
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/#work" },
      { label: "Process", href: "/#process" },
      { label: "Blog", href: "/blog" },
      { label: "Indore", href: "/indore" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Contact",
    links: [
      ...site.emails.map((e) => ({ label: e, href: `mailto:${e}` })),
      { label: site.phone.display, href: site.phone.href },
      { label: "Start a project", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-line bg-paper"
      aria-label="Footer"
    >
      <div className="shell">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-16">
          <div>
            <Link
              href="/"
              aria-label="Nexopsdev Technologies home"
              className="inline-block rounded-md transition-opacity hover:opacity-70"
            >
              <Logo size="lg" />
            </Link>
            <p className="mt-6 max-w-xs font-display text-xl leading-snug text-ink">
              We build the software behind{" "}
              <span className="accentuate">great</span> companies.
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Software and AI development company in {site.location.city},{" "}
              {site.location.region}, {site.location.country}.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.7fr_1.3fr]">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="text-[11px] uppercase tracking-[0.2em] text-faint">
                  {col.heading}
                </h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="link-draw break-words text-sm text-muted"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <nav
          aria-label="Services in Indore"
          className="flex flex-col gap-4 border-t border-line py-8 sm:flex-row sm:items-baseline sm:gap-8"
        >
          <h2 className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-faint">
            In Indore
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {indoreServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/indore/${s.slug}`}
                  className="link-draw text-xs text-muted"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-line py-8 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Nexopsdev Technologies. All rights reserved.
          </p>
          <ul className="flex items-center gap-6 text-xs text-faint">
            <li>
              <Link href="/privacy" className="link-draw">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="link-draw">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
