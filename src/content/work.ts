/**
 * Case-study content — real DigiGoTech client work.
 *
 * `image` values are screenshots of each live site, captured at 1280x800 and
 * stored under /public/work. Replace any of them with client-supplied art or a
 * fresh capture whenever a site is redesigned.
 *
 * Deliberately no invented outcome metrics: these are named, real businesses,
 * so the card leads with what the product is and links to the live site rather
 * than to a number nobody can verify.
 */

export interface Project {
  slug: string;
  name: string;
  category: string;
  /** Sector shown alongside the live link. */
  sector: string;
  blurb: string;
  href: string;
  /** Display form of the link, e.g. "digigocare.com". */
  domain: string;
  stack: string[];
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: "digigocare",
    name: "DigiGoCare AI",
    category: "Healthcare SaaS",
    sector: "Practice management",
    blurb:
      "An AI-assisted practice platform that runs an entire clinic from one place — patients, appointments, billing, reports and communication, with automated reminder calls and follow-ups replacing the admin pile.",
    href: "https://digigocare.com",
    domain: "digigocare.com",
    stack: ["Web app", "AI automation", "Billing"],
    image: "/work/digigocare.webp",
    imageAlt: "The DigiGoCare AI clinic dashboard on its marketing site.",
  },
  {
    slug: "catodrive",
    name: "CatoDrive",
    category: "Mobility Platform",
    sector: "Travel & rentals",
    blurb:
      "Curbside car delivery for airport travellers — no shuttle bus, no satellite lot. A booking platform plus an asset-partner side that turns idle vehicles into supply at DFW and Love Field.",
    href: "https://catodrive.com",
    domain: "catodrive.com",
    stack: ["Marketplace", "Booking", "Ops tooling"],
    image: "/work/catodrive.webp",
    imageAlt: "The CatoDrive airport mobility landing page.",
  },
  {
    slug: "rpa",
    name: "RPA International",
    category: "Web Platform",
    sector: "Architecture",
    blurb:
      "A portfolio-led site for an architectural practice working across residential and commercial projects, built so a project gallery this visual still loads fast and reads clearly on a phone.",
    href: "https://rpa.international",
    domain: "rpa.international",
    stack: ["Next.js", "CMS", "SEO"],
    image: "/work/rpa.webp",
    imageAlt: "The RPA International architecture portfolio site.",
  },
  {
    slug: "bsquare",
    name: "BSquare Global",
    category: "B2B Web Platform",
    sector: "CAD & BIM services",
    blurb:
      "A services platform for a BIM and CAD consultancy serving architects, engineers and construction teams — structured service pages, consultation scheduling, and a careers pipeline.",
    href: "https://bsquareglobalfze.com",
    domain: "bsquareglobalfze.com",
    stack: ["Web app", "Scheduling", "Careers"],
    image: "/work/bsquare.webp",
    imageAlt: "The BSquare Global CAD and BIM services site.",
  },
  {
    slug: "homeify",
    name: "Homeify Automation",
    category: "Product Site",
    sector: "Smart home",
    blurb:
      "A brand and product site for a luxury home-automation installer, built to make an inherently physical product — lighting, climate, security, audio — feel tangible on a screen.",
    href: "https://homeifyautomation.com",
    domain: "homeifyautomation.com",
    stack: ["Web design", "Brand", "Lead capture"],
    image: "/work/homeify.webp",
    imageAlt: "The Homeify Automation smart home landing page.",
  },
  {
    slug: "laywheeler",
    name: "Lay Wheeler Trading",
    category: "E-commerce",
    sector: "Fine wine",
    blurb:
      "A fine-wine acquisition and trading storefront — offers, new releases, and an investment side — where catalogue depth and a considered browsing experience had to coexist.",
    href: "https://laywheelertrading.com",
    domain: "laywheelertrading.com",
    stack: ["E-commerce", "Catalogue", "Payments"],
    image: "/work/laywheeler.webp",
    imageAlt: "The Lay Wheeler Trading fine wine storefront.",
  },
  {
    slug: "inkpot",
    name: "The Ink Pot Group",
    category: "Agency Site",
    sector: "Content & marketing",
    blurb:
      "A site for a content and marketing group that had to demonstrate craft by example — clear service architecture, a work section that carries weight, and copy that gets out of its own way.",
    href: "https://theinkpotgroup.com",
    domain: "theinkpotgroup.com",
    stack: ["Web design", "CMS", "SEO"],
    image: "/work/inkpot.webp",
    imageAlt: "The Ink Pot Group agency landing page.",
  },
  {
    slug: "medoease",
    name: "MedoEase",
    category: "Health Tech",
    sector: "Consumer health",
    blurb:
      "An NFC health card and companion platform: tap to carry your family's medical file to any doctor, book teleconsults, and get medicines delivered — built for families across India.",
    href: "https://medoease.com",
    domain: "medoease.com",
    stack: ["NFC", "Web platform", "Payments"],
    image: "/work/medoease.webp",
    imageAlt: "The MedoEase NFC health card landing page.",
  },
];

/** Portrait image for the studio section. */
export const studioImage = {
  src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  alt: "A team collaborating around a table with laptops.",
};
