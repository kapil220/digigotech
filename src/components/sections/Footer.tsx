import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-line bg-base"
      aria-label="Footer"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
        <a
          href="#top"
          aria-label="DigiGoTech home"
          className="shrink-0 rounded-md transition-opacity hover:opacity-80"
        >
          <Logo className="h-10 w-auto" />
        </a>

        <p className="order-last text-sm text-muted sm:order-none">
          © 2025 DigiGoTech. All rights reserved.
        </p>

        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#" className="transition-colors hover:text-ink">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-ink">
            Terms
          </a>
          <a href="#cta" className="transition-colors hover:text-ink">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
