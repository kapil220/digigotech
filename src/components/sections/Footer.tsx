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
          className="font-display text-2xl font-extrabold tracking-tight text-gradient"
        >
          DigiGoTech
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
