import type { Faq, Point } from "@/content/services";

/**
 * Indore-specific pages. Each one carries its own local context rather than a
 * service page with the city name swapped in — search engines discard those.
 */

export interface LocalService {
  /** Matches a slug in src/content/services. */
  slug: string;
  /** Short link label, e.g. "Website development in Indore". */
  label: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Paragraph shown beside the deliverables. */
  lead: string;
  local: Point[];
  faqs: Faq[];
}

export const indore = {
  metaTitle: "Software Development Company in Indore",
  metaDescription:
    "Nexopsdev Technologies is a software and AI development company in Indore. Websites, e-commerce, ERP, CRM, mobile apps, AI chatbots, voicebots and WhatsApp automation for Indore businesses.",
  h1: "Software development company in Indore",
  intro:
    "Nexopsdev Technologies is an Indore-based software and AI development company. We build websites, online stores, ERP and CRM systems, mobile apps and AI automation for businesses in Indore and across Madhya Pradesh, and we are close enough to meet in person when it helps.",
  why: [
    {
      title: "We are in the same city",
      copy: "Kickoff meetings, process walkthroughs at your office or factory, and training for your staff can all happen face to face. Day-to-day work continues over calls and WhatsApp.",
    },
    {
      title: "Hindi and English, your choice",
      copy: "We discuss requirements, train your team and build software interfaces, chatbots and voice agents in Hindi, English or both.",
    },
    {
      title: "Built for how business runs here",
      copy: "GST invoicing, Tally, UPI, cash on delivery, dealer credit and WhatsApp-first customers are the starting assumptions, not afterthoughts.",
    },
    {
      title: "Senior people on your project",
      copy: "You speak directly with the people designing and writing your software, from the first call to launch and support.",
    },
  ] satisfies Point[],
  industries: [
    {
      title: "Manufacturing and industrial units",
      copy: "ERP, production tracking and dealer portals for units in Pithampur, Sanwer Road, Palda and Dewas.",
    },
    {
      title: "Traders and wholesalers",
      copy: "Inventory, billing and B2B ordering for textile, FMCG, pharma and hardware traders in Indore's wholesale markets.",
    },
    {
      title: "Food and namkeen brands",
      copy: "Online stores, distributor ordering and WhatsApp reordering for Indore's food and snack businesses.",
    },
    {
      title: "Coaching institutes and schools",
      copy: "Admission CRMs, fee reminders, parent communication and student apps for institutes in Bhawarkua, Geeta Bhawan and beyond.",
    },
    {
      title: "Clinics and hospitals",
      copy: "Appointment booking, patient reminders, practice management software and AI receptionists.",
    },
    {
      title: "Real estate and builders",
      copy: "Project websites, lead CRMs, site-visit scheduling and AI calling for developers on the Super Corridor, AB Bypass and Rau.",
    },
  ] satisfies Point[],
  areas: [
    "Vijay Nagar",
    "Palasia",
    "Bhawarkua",
    "Rajwada",
    "Rau",
    "Super Corridor",
    "Sanwer Road",
    "Pithampur",
    "Mhow",
    "Dewas",
    "Ujjain",
    "Bhopal",
  ],
  faqs: [
    {
      q: "Where is Nexopsdev Technologies based?",
      a: "We are based in Indore, Madhya Pradesh. We work with clients in Indore in person and by video call, and with clients across India and abroad remotely.",
    },
    {
      q: "Can we meet in person in Indore?",
      a: "Yes. We are happy to meet Indore clients at their office, shop or factory to understand the requirement and to train staff. Call or WhatsApp us to arrange a time.",
    },
    {
      q: "Which services do you offer in Indore?",
      a: "Website development, e-commerce stores, custom ERP and CRM software, mobile apps, SaaS products, AI agents, AI chatbots, AI voicebots, WhatsApp automation and business process automation.",
    },
    {
      q: "Do you work with small businesses and startups?",
      a: "Yes. We work with shops, clinics, institutes and early-stage startups as well as larger companies, and we scope projects in phases so you can start with what matters most.",
    },
    {
      q: "Do you provide support after the project is delivered?",
      a: "Yes. Every project includes a support period after launch, and we offer ongoing maintenance for updates, monitoring and new features.",
    },
  ] satisfies Faq[],
};

export const indoreServices: LocalService[] = [
  {
    slug: "website-development",
    label: "Website development in Indore",
    metaTitle: "Website Development Company in Indore",
    metaDescription:
      "Website development company in Indore. Custom, mobile-first, SEO-ready websites for Indore businesses, with local search setup, WhatsApp enquiry buttons and in-person support.",
    h1: "Website development company in Indore",
    intro:
      "We design and build websites for Indore businesses that want more calls, enquiries and walk-ins from people searching nearby. Every site is custom, quick to load on a phone and set up to be found in local search.",
    lead: "Whether you run a showroom in Vijay Nagar, a clinic in Palasia or a factory in Pithampur, your customers check you online before they call. We make sure what they find is fast, clear and convincing.",
    local: [
      {
        title: "Set up for local search",
        copy: "We structure the site for searches such as your service plus Indore, add local business markup, and guide you through your Google Business Profile so you can appear in map results.",
      },
      {
        title: "Call and WhatsApp first",
        copy: "Most local customers would rather call or message than fill in a form. Every page carries tap-to-call and WhatsApp buttons, tracked so you know which pages bring enquiries.",
      },
      {
        title: "Content in Hindi and English",
        copy: "We can write and publish your pages in both languages, which matters for reaching customers across Indore and nearby towns.",
      },
      {
        title: "Meet us in person",
        copy: "We can visit your premises to understand the business, photograph products or facilities, and train your team to update the site.",
      },
    ],
    faqs: [
      {
        q: "How much does website development cost in Indore?",
        a: "Pricing in Indore varies widely, from low-cost template sites to fully custom builds. The cost depends on the number of pages, custom design, content writing and features such as a CMS, booking or payments. We give a fixed written quote after a short discussion.",
      },
      {
        q: "Can you help my business appear on Google Maps in Indore?",
        a: "We set up the website correctly for local search and help you create and optimise your Google Business Profile. Appearing in map results also depends on reviews, proximity and competition, so we will give you a realistic view for your category.",
      },
      {
        q: "Do you also provide domain, hosting and business email?",
        a: "Yes. We register or connect your domain, set up reliable hosting and SSL, and configure business email, all in accounts that you own.",
      },
      {
        q: "How soon can my website go live?",
        a: "A simple business website can go live in two to four weeks once content is ready. We share a timeline with dates before starting.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    label: "E-commerce development in Indore",
    metaTitle: "E-commerce Website Development in Indore",
    metaDescription:
      "E-commerce website development company in Indore. Online stores for Indore brands, wholesalers and retailers with UPI payments, courier integration, GST invoices and WhatsApp ordering.",
    h1: "E-commerce website development company in Indore",
    intro:
      "We build online stores for Indore's brands, wholesalers and retailers, so you can sell across India without depending entirely on marketplaces. Payments, shipping, GST invoices and WhatsApp updates are set up and tested before launch.",
    lead: "Indore has a deep base of namkeen and food makers, textile and garment traders, jewellers and consumer brands. Many already sell nationally through dealers and marketplaces. A store of your own lets you keep the margin and the customer relationship.",
    local: [
      {
        title: "From wholesale market to web",
        copy: "Dealer logins, bulk pricing and minimum order quantities for traders who want existing wholesale buyers to order online.",
      },
      {
        title: "Shipping from Indore",
        copy: "Courier integration with pickup from your Indore godown, pincode serviceability checks and accurate delivery estimates across India.",
      },
      {
        title: "Food and perishable products",
        copy: "Batch and expiry handling, FSSAI details on product pages, and weight-based shipping for food and namkeen brands.",
      },
      {
        title: "Local delivery and store pickup",
        copy: "Same-day delivery zones within Indore and collect-from-store options for retailers with a showroom.",
      },
    ],
    faqs: [
      {
        q: "How much does an e-commerce website cost in Indore?",
        a: "It depends on the platform, the number of products and the integrations you need. A Shopify store with a standard catalogue costs less to build than a custom B2B ordering system. We quote a fixed price after reviewing your catalogue.",
      },
      {
        q: "Can I sell on my own website and on Amazon or Flipkart together?",
        a: "Yes. We can sync stock and orders between your store and marketplaces so inventory stays accurate everywhere.",
      },
      {
        q: "Can you help with payment gateway approval?",
        a: "Yes. We guide you through the gateway's KYC documents and make sure the site has the policy pages gateways require for approval.",
      },
      {
        q: "Do you offer product photography and content?",
        a: "We can write product descriptions and structure your catalogue. For photography we can coordinate with a local Indore photographer or work from images you supply.",
      },
    ],
  },
  {
    slug: "erp-software-development",
    label: "ERP software development in Indore",
    metaTitle: "ERP Software Company in Indore",
    metaDescription:
      "Custom ERP software company in Indore for manufacturers, traders and distributors in Pithampur, Sanwer Road and Dewas. Inventory, production, GST billing, Tally sync and mobile dashboards.",
    h1: "ERP software development company in Indore",
    intro:
      "We build custom ERP software for manufacturers, traders and distributors in and around Indore. Stock, purchase, production, dispatch and billing run in one system designed around your process, with on-site study and training.",
    lead: "Pithampur, Sanwer Road, Palda and Dewas hold thousands of units in auto components, pharma, packaging, food processing and engineering. Many run accounts in Tally and everything else in registers and Excel. That gap is what a custom ERP closes.",
    local: [
      {
        title: "We visit your plant",
        copy: "ERP cannot be designed from a meeting room. We walk the shop floor, stores and dispatch area with your team before proposing any screen.",
      },
      {
        title: "Tally stays if you want it",
        copy: "Your accountant can keep working in Tally while operations move to the ERP, with vouchers posted across automatically.",
      },
      {
        title: "Training in Hindi",
        copy: "Store keepers, supervisors and dispatch staff are trained in Hindi on their own screens, with simple interfaces designed for them.",
      },
      {
        title: "Job work and multi-unit setups",
        copy: "Challans for material sent to job workers, inter-unit transfers and consolidated reporting for groups with more than one plant.",
      },
    ],
    faqs: [
      {
        q: "How much does ERP software cost for a manufacturing unit in Indore?",
        a: "Cost depends on the modules, number of users and integrations. We quote module by module so a unit can start with inventory and dispatch, for example, and add production and accounts later.",
      },
      {
        q: "Do you provide on-site ERP implementation in Pithampur and Sanwer Road?",
        a: "Yes. We visit units in Pithampur, Sanwer Road, Palda, Dewas and nearby industrial areas for process study, go-live and staff training.",
      },
      {
        q: "Can the ERP generate e-invoices and e-way bills?",
        a: "Yes. GST invoices, e-invoices and e-way bills are generated from the dispatch screen through authorised API providers.",
      },
      {
        q: "We already use Tally. Do we still need an ERP?",
        a: "Tally handles accounting well. If your stock, production planning, purchase approvals and dispatch are still managed in Excel or on paper, an ERP covers those and feeds clean data into Tally.",
      },
    ],
  },
  {
    slug: "ai-chatbot-development",
    label: "AI chatbot development in Indore",
    metaTitle: "AI Chatbot Development Company in Indore",
    metaDescription:
      "AI chatbot development company in Indore. Hindi and English chatbots for websites and WhatsApp that answer enquiries, capture leads and book appointments for Indore businesses.",
    h1: "AI chatbot development company in Indore",
    intro:
      "We build AI chatbots for Indore businesses that answer customer questions instantly on your website and WhatsApp, in Hindi and English, and pass qualified leads to your team.",
    lead: "Coaching institutes, clinics, real estate firms and showrooms in Indore receive the same questions all day: fees, timings, availability, location. A chatbot trained on your information answers them at any hour and collects the enquirer's details.",
    local: [
      {
        title: "Hinglish that sounds natural",
        copy: "Customers here type in a mix of Hindi and English. The bot understands it and replies in the same style.",
      },
      {
        title: "Admission and appointment enquiries",
        copy: "Course details, fee structures, batch timings, doctor availability and booking handled without waiting for the front desk.",
      },
      {
        title: "Site-visit and demo booking",
        copy: "For builders and showrooms, the bot qualifies the buyer, shares the brochure and books a visit slot.",
      },
      {
        title: "Local setup and training",
        copy: "We sit with your team in Indore to gather the right answers and show them how to review conversations and update the bot.",
      },
    ],
    faqs: [
      {
        q: "How much does an AI chatbot cost in Indore?",
        a: "There is a one-time build cost and a monthly running cost that depends on how many conversations the bot handles. We estimate both based on your enquiry volume before you decide.",
      },
      {
        q: "Can the chatbot work on WhatsApp as well as my website?",
        a: "Yes. The same bot can answer on your website, WhatsApp Business number and app, with all conversations visible in one place.",
      },
      {
        q: "Will it understand Hindi typed in English letters?",
        a: "Yes. It handles Hindi in Devanagari, Hindi typed in Roman script, and English, and can switch mid-conversation.",
      },
      {
        q: "What if a customer wants to talk to a person?",
        a: "The bot hands the chat to your staff with the full conversation, or arranges a callback outside working hours.",
      },
    ],
  },
  {
    slug: "whatsapp-automation",
    label: "WhatsApp automation in Indore",
    metaTitle: "WhatsApp Automation Services in Indore",
    metaDescription:
      "WhatsApp automation and WhatsApp Business API services in Indore. Chatbots, broadcasts, order and payment reminders and CRM integration for Indore shops, clinics, institutes and traders.",
    h1: "WhatsApp automation services in Indore",
    intro:
      "We set up the official WhatsApp Business API for Indore businesses and build the chatbots, reminders and broadcasts that run on it, so customer messages are answered and followed up without depending on one person's phone.",
    lead: "In Indore, as everywhere in India, business happens on WhatsApp: price lists to dealers, fee reminders to parents, appointment confirmations to patients. Doing it by hand from a single phone does not scale, and unofficial bulk tools get numbers banned.",
    local: [
      {
        title: "Dealer and distributor ordering",
        copy: "Traders can let dealers check rates, place orders and receive invoices and ledger statements over WhatsApp.",
      },
      {
        title: "Fee and payment reminders",
        copy: "Institutes, societies and service businesses send due reminders with a UPI link and get paid inside the chat.",
      },
      {
        title: "Appointment reminders",
        copy: "Clinics, salons and service centres confirm and remind automatically, with one-tap rescheduling.",
      },
      {
        title: "Festival and offer campaigns",
        copy: "Approved broadcast templates to opted-in customers for Diwali, Rakhi and seasonal sales, with replies handled by the bot.",
      },
    ],
    faqs: [
      {
        q: "How much does WhatsApp automation cost in Indore?",
        a: "You pay for setup and build once, a monthly platform cost, and Meta's charges for template messages. We share the current rates and an estimate for your message volume up front.",
      },
      {
        q: "Is this the official WhatsApp Business API?",
        a: "Yes. We work only with the official WhatsApp Business Platform from Meta. We do not use unofficial bulk-sender software, which risks a permanent ban on your number.",
      },
      {
        q: "What documents are needed for WhatsApp Business API?",
        a: "Meta asks for business verification, usually your GST certificate or other registration document, a working website or page, and a phone number that can receive an OTP.",
      },
      {
        q: "Can it connect to Tally or my billing software?",
        a: "Yes. We can send invoices, outstanding statements and payment reminders from Tally, your ERP or billing software automatically.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    label: "Mobile app development in Indore",
    metaTitle: "Mobile App Development Company in Indore",
    metaDescription:
      "Mobile app development company in Indore. Android and iOS apps for Indore startups and businesses, with backend, admin panel, payments and Play Store and App Store publishing.",
    h1: "Mobile app development company in Indore",
    intro:
      "We build Android and iOS apps for Indore startups and established businesses, from the first prototype through to the Play Store and App Store, with the backend and admin panel included.",
    lead: "Indore's startup scene has grown quickly alongside its IT parks and colleges, and local businesses increasingly want their own ordering, booking and staff apps. We bring product thinking as well as code, so the first version is one people keep using.",
    local: [
      {
        title: "For Indore startups",
        copy: "MVP scoping, investor-ready prototypes and a build plan that fits an early-stage budget.",
      },
      {
        title: "Field-force apps",
        copy: "Order taking, visit tracking and collections for sales teams covering Indore, Malwa and Nimar routes, working offline where the network drops.",
      },
      {
        title: "Android-first where it matters",
        copy: "Tested on the affordable Android phones most local customers and staff actually use.",
      },
      {
        title: "Work with us face to face",
        copy: "Meet our designers and developers in Indore for workshops and reviews instead of managing a distant vendor.",
      },
    ],
    faqs: [
      {
        q: "How much does mobile app development cost in Indore?",
        a: "The cost depends on the number of screens, user roles and integrations, and whether a backend already exists. We provide a fixed quote for the first release after a scoping session.",
      },
      {
        q: "Do you build both Android and iOS apps?",
        a: "Yes. We use React Native and Flutter to deliver both from one codebase, which lowers cost and keeps the two apps in step.",
      },
      {
        q: "Will you publish the app on the Play Store and App Store?",
        a: "Yes. We prepare the listings and handle submission and review, using developer accounts registered in your company's name.",
      },
      {
        q: "Can you take over an app built by another company?",
        a: "Yes. We review the existing code, tell you honestly whether to continue with it or rebuild, and take over maintenance.",
      },
    ],
  },
];

export function getIndoreService(slug: string): LocalService | undefined {
  return indoreServices.find((s) => s.slug === slug);
}
