/**
 * Business facts used across the site, metadata and structured data.
 *
 * Name, phone and location must match the Google Business Profile and every
 * directory listing character for character — search engines treat a mismatch
 * as a different business.
 */
export const site = {
  name: "Nexopsdev Technologies",
  shortName: "Nexopsdev",
  /** Must be the host the domain actually serves from: the bare domain redirects to www. */
  url: "https://www.nexopsdev.com",
  tagline: "Software and AI development company in Indore, India",
  description:
    "Nexopsdev Technologies is a software and AI development company in Indore, India. We build websites, e-commerce stores, SaaS products, ERP and CRM systems, mobile apps, AI agents, chatbots, voicebots and WhatsApp automation.",
  phone: {
    display: "+91 96442 42808",
    e164: "+919644242808",
    href: "tel:+919644242808",
  },
  emails: ["nexopsdev@gmail.com", "rajputkapil436@gmail.com"],
  /** No street address is published: the business serves clients remotely. */
  location: {
    city: "Indore",
    region: "Madhya Pradesh",
    country: "India",
    countryCode: "IN",
  },
  /** Shown as "Est." in the studio section. Not used in structured data until confirmed. */
  foundingYear: 2019,
  blogAuthor: "Kapil Rajput",
} as const;

/**
 * Headline figures on the home page. Confirm each one before reusing it
 * anywhere else — they are deliberately kept out of the service pages and the
 * structured data until then.
 */
export const stats = [
  { value: "40+", label: "Products shipped" },
  { value: "6 wks", label: "Avg. to first launch" },
  { value: "98%", label: "Client retention" },
  { value: "24/7", label: "Post-launch support" },
];

export function absoluteUrl(path = "/"): string {
  return `${site.url}${path === "/" ? "" : path}`;
}
