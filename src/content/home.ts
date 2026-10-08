import type { Faq, Point } from "@/content/services";

/** Sectors named on the home page. Kept general: no client claims implied. */
export const industries: Point[] = [
  {
    title: "Manufacturing & distribution",
    copy: "ERP, inventory, production tracking and dealer ordering for factories, traders and wholesalers.",
  },
  {
    title: "Healthcare & clinics",
    copy: "Practice management, appointment booking, patient reminders and AI receptionists.",
  },
  {
    title: "Education & coaching",
    copy: "Admission CRMs, fee reminders on WhatsApp, student apps and enquiry chatbots.",
  },
  {
    title: "Real estate",
    copy: "Project websites, lead CRMs, site-visit scheduling and AI calling for new enquiries.",
  },
  {
    title: "Retail & e-commerce",
    copy: "Online stores, payment and courier integration, order updates and repeat-purchase automation.",
  },
  {
    title: "Startups & SaaS",
    copy: "MVPs, multi-tenant platforms, subscription billing and AI features for founders.",
  },
];

export const homeFaqs: Faq[] = [
  {
    q: "What does Nexopsdev Technologies do?",
    a: "We are a software and AI development company in Indore, India. We build websites, e-commerce stores, SaaS products, ERP and CRM systems, mobile apps and custom software, along with AI agents, chatbots, voicebots and WhatsApp automation.",
  },
  {
    q: "Where are you located, and do you work with clients outside Indore?",
    a: "We are based in Indore, Madhya Pradesh. We meet Indore clients in person and work with businesses across India and abroad over video calls.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on the scope. After a short call we send a fixed, written quote listing what is included, the timeline and any running costs, so there are no surprises later.",
  },
  {
    q: "How long does it take to build a website or app?",
    a: "A business website typically takes three to five weeks. Mobile apps, SaaS products and ERP systems are delivered in phases over a few months, with working software shown every week.",
  },
  {
    q: "Can you add AI or WhatsApp automation to the software we already use?",
    a: "Yes. We connect AI agents, chatbots and WhatsApp to existing websites, CRMs, ERPs, Tally and spreadsheets, so you do not need to replace what already works.",
  },
  {
    q: "Do we own the code and data?",
    a: "Yes. Source code, designs, data, domains and hosting accounts are all in your name, and we hand over every credential.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every project includes a support period, and we offer ongoing maintenance for monitoring, updates and new features.",
  },
];
