import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import LeadForm from "@/components/lead/LeadForm";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";

const title = "Contact Us";
const description =
  "Contact Nexopsdev Technologies in Indore, India. Call +91 96442 42808 or send your project details for a free consultation and quote within one business day.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/contact",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        eyebrow="Contact"
        title="Tell us what you want to build"
        lead="Share a few details and we will come back within one business day with a plan and an honest estimate. No sales pitch."
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <h2 className="font-display type-h3 text-ink">Reach us directly</h2>
            <ul className="mt-8 space-y-7">
              <li className="flex gap-4">
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-faint">
                    Phone and WhatsApp
                  </p>
                  <a href={site.phone.href} className="link-draw mt-1 inline-block text-ink">
                    {site.phone.display}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-faint">
                    Email
                  </p>
                  {site.emails.map((e) => (
                    <a
                      key={e}
                      href={`mailto:${e}`}
                      className="link-draw mt-1 block w-fit text-ink"
                    >
                      {e}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-faint">
                    Location
                  </p>
                  <p className="mt-1 text-ink">
                    {site.location.city}, {site.location.region},{" "}
                    {site.location.country}
                  </p>
                  <p className="mt-1 max-w-xs text-sm text-muted">
                    We work with clients across India and abroad by video call,
                    and meet Indore clients in person by appointment.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div
            id="cta"
            className="rounded-[1.5rem] border border-line bg-canvas p-6 shadow-[var(--shadow-raise)] sm:p-9"
          >
            <h2 className="font-display type-h3 text-ink">Send an enquiry</h2>
            <LeadForm source="contact-page" className="mt-7" />
          </div>
        </div>
      </section>
    </main>
  );
}
