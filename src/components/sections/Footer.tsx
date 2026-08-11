import Logo from "@/components/ui/Logo";

const columns = [
  {
    heading: "Studio",
    links: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Work", href: "#work" },
    ],
  },
  {
    heading: "Capabilities",
    links: [
      { label: "AI agents & automation", href: "#services" },
      { label: "Websites & web apps", href: "#services" },
      { label: "Mobile apps", href: "#services" },
      { label: "CRM & ERP", href: "#services" },
      { label: "Custom software", href: "#services" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "digigoplus@gmail.com", href: "mailto:digigoplus@gmail.com" },
      {
        label: "rajputkapil436@gmail.com",
        href: "mailto:rajputkapil436@gmail.com",
      },
      { label: "+91 70498 75864", href: "tel:+917049875864" },
      { label: "Start a project", href: "#cta" },
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
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:gap-20">
          <div>
            <a
              href="#top"
              aria-label="DigiGoTech home"
              className="inline-block rounded-md transition-opacity hover:opacity-70"
            >
              <Logo size="lg" />
            </a>
            <p className="mt-6 max-w-xs font-display text-xl leading-snug text-ink">
              We build the software behind{" "}
              <span className="accentuate">great</span> companies.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="text-[11px] uppercase tracking-[0.2em] text-faint">
                  {col.heading}
                </h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="link-draw text-sm text-muted"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-line py-8 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} DigiGoTech. All rights reserved.
          </p>
          <ul className="flex items-center gap-6 text-xs text-faint">
            <li>
              <a href="#" className="link-draw">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="link-draw">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
