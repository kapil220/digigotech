import {
  Boxes,
  Cloud,
  Database,
  Globe2,
  ShoppingCart,
  Smartphone,
  Users,
} from "lucide-react";
import type { Service } from "./types";

export const softwareServices: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    icon: Globe2,
    seed: 12,
    summary:
      "Fast, search-friendly business websites and web apps, designed around what your customers need to do and built on a stack that stays easy to maintain.",
    metaTitle: "Website Development Company in India",
    metaDescription:
      "Website development company based in Indore, India. Custom business websites, landing pages and web apps built with Next.js: fast, mobile-first and ready for SEO.",
    h1: "Website development for businesses that need the site to earn its keep",
    intro: [
      "Most business websites are slow, hard to update and silent on the questions customers actually ask. We design and build websites that load quickly on a mid-range phone, explain what you do in plain language, and turn visitors into enquiries.",
      "We are a website development company based in Indore, working with clients across India and abroad. Every site is designed from scratch around your business, written with search in mind, and handed over with the ability to edit your own content.",
    ],
    includes: [
      {
        title: "Design made for your business",
        copy: "No bought templates. We plan the pages, write the structure and design the look around your customers, your brand and the action you want visitors to take.",
      },
      {
        title: "Mobile-first and fast",
        copy: "Most Indian traffic arrives on a phone and a patchy connection. We build for that first, with compressed images, minimal scripts and pages that pass Core Web Vitals.",
      },
      {
        title: "SEO built in from day one",
        copy: "Clean URLs, page titles and descriptions, structured data, a sitemap, and a page for every service you want to be found for. It is part of the build, not an add-on.",
      },
      {
        title: "A CMS you can actually use",
        copy: "Add a blog post, change a price or publish a new case study without calling a developer. We set up the editor and train your team on it.",
      },
      {
        title: "Lead capture that reaches you",
        copy: "Enquiry forms, WhatsApp click-to-chat and call buttons wired into your inbox, Google Sheet or CRM, so no lead sits unread.",
      },
      {
        title: "Hosting, domain and launch",
        copy: "We set up hosting, SSL, business email records and analytics, move the old site across with redirects, and stay on call through launch week.",
      },
    ],
    useCases: [
      {
        title: "Company and corporate websites",
        copy: "A credible home for manufacturers, consultancies, clinics, schools and service firms, with clear service pages and proof of work.",
      },
      {
        title: "Landing pages for campaigns",
        copy: "Single-purpose pages for Google or Meta ads, built to load instantly and convert the click you paid for.",
      },
      {
        title: "Portfolio and catalogue sites",
        copy: "Image-heavy sites for architects, builders, designers and product companies that still load fast on mobile data.",
      },
      {
        title: "Web apps and portals",
        copy: "Customer logins, booking systems, dashboards and partner portals when the site needs to do more than inform.",
      },
    ],
    steps: [
      {
        title: "Discovery",
        copy: "We learn the business, look at competitors and agree the pages, the goals and a fixed scope.",
      },
      {
        title: "Design",
        copy: "You see the real design in the browser, on desktop and phone, and we refine it with you before building the rest.",
      },
      {
        title: "Build and content",
        copy: "We build the pages, load the content, connect forms and set up search basics. You get a staging link to review throughout.",
      },
      {
        title: "Launch and care",
        copy: "We go live, submit the site to Google, watch for errors and remain available for updates and improvements.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Headless CMS", "WordPress", "Vercel"],
    faqs: [
      {
        q: "How much does a business website cost?",
        a: "It depends on the number of pages, whether the design is fully custom, how much content needs writing, and whether you need extras such as a CMS, booking or payments. We give a fixed quote after a short call, so you know the full cost before any work starts.",
      },
      {
        q: "How long does it take to build a website?",
        a: "A focused landing page can be ready in about a week. A typical business website with several service pages usually takes three to five weeks, and most of that depends on how quickly content and feedback come back. Larger web apps are planned in phases.",
      },
      {
        q: "Will my website show up on Google?",
        a: "We build every site so Google can read and index it properly: fast pages, correct titles, structured data and a sitemap. Ranking for competitive searches also needs ongoing content, reviews and links, and we will tell you honestly what that takes for your industry.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. We audit the current site, keep what is working, redirect every old URL to its new home so you do not lose search traffic, and move your content across.",
      },
      {
        q: "Do you work with clients outside Indore?",
        a: "Yes. We are based in Indore and work with clients across India and overseas. Meetings happen on video calls, and Indore clients are welcome to meet in person.",
      },
      {
        q: "Who owns the website after launch?",
        a: "You do. The domain, hosting account, code and content are all in your name, and we hand over every login.",
      },
    ],
    related: ["ecommerce-development", "custom-software-development", "ai-chatbot-development"],
    work: ["rpa", "bsquare", "homeify", "inkpot"],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Development",
    icon: ShoppingCart,
    seed: 151,
    summary:
      "Online stores on Shopify or a custom stack, with Indian payment gateways, shipping partners, GST invoices and a checkout that does not lose customers.",
    metaTitle: "E-commerce Website Development Company",
    metaDescription:
      "E-commerce website development from Indore, India. Shopify and custom online stores with UPI and Razorpay payments, shipping integration, GST invoicing and WhatsApp order updates.",
    h1: "E-commerce development that makes buying easy and running the store easier",
    intro: [
      "An online store has two jobs: make it effortless for a customer to buy, and make it painless for you to fulfil the order. We build e-commerce websites that do both, whether you sell fifty products or fifty thousand.",
      "From our base in Indore we build online stores for brands, wholesalers and retailers. We handle the parts that are specific to selling here: UPI and card payments, cash on delivery, courier integration, GST-ready invoices and order updates on WhatsApp.",
    ],
    includes: [
      {
        title: "Shopify or custom, chosen honestly",
        copy: "Shopify gets most brands selling fastest. A custom store makes sense for unusual catalogues, B2B pricing or heavy integration. We recommend what fits, not what bills more.",
      },
      {
        title: "Payments that work in India",
        copy: "UPI, cards, net banking, wallets, EMI and cash on delivery through Razorpay, PhonePe, Cashfree or PayU, with refunds handled from your dashboard.",
      },
      {
        title: "Shipping and tracking",
        copy: "Integration with Shiprocket, Delhivery and other couriers for rate calculation, label printing, pincode checks and live tracking links.",
      },
      {
        title: "Catalogue and inventory",
        copy: "Variants, bundles, stock levels across warehouses, bulk upload from a spreadsheet and low-stock alerts.",
      },
      {
        title: "GST invoices and reports",
        copy: "Tax-correct invoices generated on every order, HSN codes on products, and sales exports your accountant can use directly.",
      },
      {
        title: "Recovery and repeat orders",
        copy: "Abandoned-cart reminders, order confirmations and reorder nudges over WhatsApp and email, plus coupons and loyalty rules.",
      },
    ],
    useCases: [
      {
        title: "D2C brands",
        copy: "Fashion, beauty, food, home and wellness brands that want a storefront they control rather than paying marketplace commission on every sale.",
      },
      {
        title: "B2B and wholesale",
        copy: "Dealer logins, tiered pricing, minimum order quantities, quote requests and credit terms for distributors.",
      },
      {
        title: "Retailers going online",
        copy: "Shops with an existing customer base that need online ordering tied to the stock they already hold in store.",
      },
      {
        title: "Specialist catalogues",
        copy: "Large or unusual inventories, such as wine, spare parts or made-to-order goods, where search and filtering decide whether people buy.",
      },
    ],
    steps: [
      {
        title: "Plan the store",
        copy: "We map your catalogue, shipping zones, tax setup and the systems the store has to talk to, then pick the platform.",
      },
      {
        title: "Design the buying journey",
        copy: "Home, category, product, cart and checkout pages designed for phones first, with the fewest possible steps to pay.",
      },
      {
        title: "Build and integrate",
        copy: "We load products, connect payments and couriers, set up taxes and invoices, and run real test orders end to end.",
      },
      {
        title: "Launch and grow",
        copy: "We go live, train your team on orders and returns, and keep improving conversion using real sales data.",
      },
    ],
    stack: ["Shopify", "Next.js", "WooCommerce", "Razorpay", "Shiprocket", "PostgreSQL", "WhatsApp Business API"],
    faqs: [
      {
        q: "Should I use Shopify or a custom-built store?",
        a: "If you sell a standard catalogue direct to consumers, Shopify is usually the faster and safer choice, and you pay a monthly platform fee. If you need dealer pricing, complex product rules or deep integration with your ERP, a custom store gives you control without per-feature app fees. We will walk through both for your case.",
      },
      {
        q: "How much does an e-commerce website cost?",
        a: "Cost depends on the platform, the number of products, how custom the design is, and how many integrations you need for payments, shipping, accounting and marketplaces. We quote a fixed price after reviewing your catalogue and requirements.",
      },
      {
        q: "Which payment gateways can you integrate?",
        a: "Razorpay, PhonePe, Cashfree, PayU, CCAvenue and Stripe for international cards, along with UPI, EMI and cash on delivery. We help with the gateway's KYC paperwork too.",
      },
      {
        q: "Can the store connect to Amazon, Flipkart or my billing software?",
        a: "Yes. We can sync stock and orders with marketplaces and push sales into Tally, Zoho Books or a custom ERP so you are not entering orders twice.",
      },
      {
        q: "Can you move my existing store to a new platform?",
        a: "Yes. We migrate products, customers and order history, and redirect old URLs so existing search rankings and saved links keep working.",
      },
    ],
    related: ["website-development", "whatsapp-automation", "erp-software-development"],
    work: ["laywheeler", "medoease"],
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    icon: Cloud,
    seed: 173,
    summary:
      "SaaS products from first prototype to paying customers: multi-tenant architecture, subscription billing, onboarding and the dashboards your users live in.",
    metaTitle: "SaaS Development Company in India",
    metaDescription:
      "SaaS product development company in Indore, India. MVPs and full SaaS platforms with multi-tenant architecture, subscription billing, role-based access and AI features.",
    h1: "SaaS development for founders who need a real product, not a demo",
    intro: [
      "A SaaS product is never just the feature. It is sign-up, onboarding, billing, permissions, emails, an admin panel and the infrastructure that keeps all of it running at three in the morning. We build the whole thing.",
      "Our SaaS work includes platforms in healthcare and mobility, for founders in India and abroad. Whether you are validating an idea with an MVP or rebuilding a product that has outgrown its first version, you work directly with the engineers writing it.",
    ],
    includes: [
      {
        title: "MVP scoped to prove the idea",
        copy: "We cut the feature list down to what a first paying customer needs, ship that, and let real usage decide what comes next.",
      },
      {
        title: "Multi-tenant architecture",
        copy: "Each customer's data kept separate and secure, with workspaces, teams and role-based permissions designed in from the start.",
      },
      {
        title: "Subscription billing",
        copy: "Plans, trials, upgrades, invoices and failed-payment handling through Razorpay or Stripe, including GST invoices for Indian customers.",
      },
      {
        title: "Onboarding and product emails",
        copy: "Sign-up flows, guided setup, transactional emails and in-app prompts that get a new user to their first result quickly.",
      },
      {
        title: "Admin and analytics",
        copy: "An internal panel to manage accounts, plus usage dashboards so you can see who is active and who is about to leave.",
      },
      {
        title: "Cloud infrastructure",
        copy: "Automated deployments, backups, monitoring and alerts on AWS or a comparable platform, sized to your current stage and budget.",
      },
    ],
    useCases: [
      {
        title: "First-time founders",
        copy: "You know the industry and the problem. We bring product thinking and engineering to get a first version in front of customers.",
      },
      {
        title: "Vertical SaaS",
        copy: "Industry-specific software for clinics, schools, logistics, real estate or manufacturing, where generic tools do not fit the workflow.",
      },
      {
        title: "Services firms productising",
        copy: "Agencies and consultancies turning an internal process or spreadsheet into a product they can sell.",
      },
      {
        title: "Rebuilds and rescues",
        copy: "Products that have become slow, fragile or impossible to change, moved to a clean foundation without stopping the business.",
      },
    ],
    steps: [
      {
        title: "Shape the product",
        copy: "We define the user, the core job and the smallest release worth paying for, and turn it into a plan with weekly milestones.",
      },
      {
        title: "Prototype",
        copy: "Clickable designs of the key flows, tested with you and ideally with a few target users, before production code.",
      },
      {
        title: "Build in weekly releases",
        copy: "Working software every week on a staging link. You see progress and can change direction early.",
      },
      {
        title: "Launch and iterate",
        copy: "We release, monitor, fix quickly and keep shipping features as customer feedback arrives.",
      },
    ],
    stack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Stripe", "Razorpay"],
    faqs: [
      {
        q: "How long does it take to build a SaaS MVP?",
        a: "Most MVPs we scope take eight to fourteen weeks from kickoff to first users, depending on how many roles and integrations the first release needs. We agree the scope and timeline in writing before starting.",
      },
      {
        q: "How much does SaaS development cost?",
        a: "The main drivers are the number of user roles, the number of core workflows, third-party integrations and whether you need mobile apps as well. We break the product into phases and quote each one, so you can fund the MVP first.",
      },
      {
        q: "Do I own the code and intellectual property?",
        a: "Yes. The source code, designs, data and accounts belong to you, and the repository is in your organisation from the first commit.",
      },
      {
        q: "Can you add AI features to my SaaS product?",
        a: "Yes. We build assistants, document extraction, search over your own data and automated workflows using Claude and OpenAI models, with cost controls and evaluation so the feature stays reliable.",
      },
      {
        q: "Will you maintain the product after launch?",
        a: "Yes. Most clients keep us on for continued development and support. If you later hire an in-house team, we document and hand over properly.",
      },
    ],
    related: ["custom-software-development", "mobile-app-development", "ai-agent-development"],
    work: ["digigocare", "catodrive", "medoease"],
  },
  {
    slug: "erp-software-development",
    name: "ERP Software Development",
    icon: Database,
    seed: 83,
    summary:
      "Custom ERP software shaped around how your business actually runs: inventory, purchase, production, sales, billing and accounts in one system.",
    metaTitle: "Custom ERP Software Development Company",
    metaDescription:
      "Custom ERP software development in Indore, India for manufacturers, traders and distributors. Inventory, production, purchase, GST billing, accounts and reports in one system.",
    h1: "Custom ERP software built around the way your business already works",
    intro: [
      "Off-the-shelf ERP asks you to change your process to suit the software. That is why so many implementations end with staff back on Excel and WhatsApp. We build ERP systems the other way round, starting from how your team works today.",
      "We build ERP software for manufacturers, traders and distributors in Indore, Pithampur and across India. The result is one system for stock, purchase, production, sales and billing, with the reports the owner actually wants to see each morning.",
    ],
    includes: [
      {
        title: "Inventory and warehouse",
        copy: "Stock by location, batch and serial number, with barcode scanning, reorder levels and a clear record of every movement.",
      },
      {
        title: "Purchase and vendors",
        copy: "Indents, purchase orders, goods receipts, vendor rates and payment schedules, with approvals where you need them.",
      },
      {
        title: "Production and job work",
        copy: "Bills of materials, work orders, machine and shift planning, wastage tracking and job-work challans for manufacturers.",
      },
      {
        title: "Sales, dispatch and GST billing",
        copy: "Quotations, orders, dispatch notes and GST invoices, with e-invoice and e-way bill generation where your turnover requires it.",
      },
      {
        title: "Accounts and Tally sync",
        copy: "Receivables, payables and ledgers inside the ERP, or a clean sync to Tally if your accountant prefers to stay there.",
      },
      {
        title: "Dashboards and mobile access",
        copy: "Daily sales, stock value, pending orders and outstanding payments on your phone, with role-based access for each department.",
      },
    ],
    useCases: [
      {
        title: "Manufacturers",
        copy: "Units that need to trace raw material through production to finished goods and know the true cost of each batch.",
      },
      {
        title: "Traders and distributors",
        copy: "Businesses with many SKUs, several godowns, dealer price lists and credit to track across hundreds of parties.",
      },
      {
        title: "Multi-branch businesses",
        copy: "Companies that need each branch to work independently while the head office sees one consolidated picture.",
      },
      {
        title: "Businesses outgrowing Tally and Excel",
        copy: "Teams where accounts are in order but operations still run on spreadsheets, registers and phone calls.",
      },
    ],
    steps: [
      {
        title: "Study the process",
        copy: "We sit with each department, document how work flows today and find where time and money leak.",
      },
      {
        title: "Design the modules",
        copy: "You approve screen designs and reports for each module, so there are no surprises when the software arrives.",
      },
      {
        title: "Build and roll out in stages",
        copy: "We deliver one module at a time, starting with the one that hurts most, and migrate your opening data.",
      },
      {
        title: "Train and support",
        copy: "On-screen training for staff in Hindi or English, a support line, and changes as the business evolves.",
      },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "React Native", "AWS", "Tally integration", "GST e-invoice APIs"],
    faqs: [
      {
        q: "Should I buy a ready-made ERP or have one built?",
        a: "If your process is standard, a ready-made product such as Tally, Zoho or Odoo is cheaper to start and worth trying first. A custom ERP pays off when your process is unusual, when licence fees grow with every user, or when you have already tried a packaged product and staff worked around it.",
      },
      {
        q: "How much does custom ERP software cost?",
        a: "Cost follows the number of modules, users, locations and integrations. We quote module by module, so you can begin with one or two and add more once they have proved their value.",
      },
      {
        q: "How long does an ERP project take?",
        a: "A first module is typically in use within six to ten weeks. A full system covering inventory, production, sales and accounts is usually rolled out in stages over four to eight months.",
      },
      {
        q: "Will it work with Tally and GST?",
        a: "Yes. We can post vouchers to Tally automatically and generate GST-compliant invoices, e-invoices and e-way bills through authorised API providers.",
      },
      {
        q: "Is our data safe, and who owns it?",
        a: "The data and the software belong to you. We host on a cloud account in your name with daily backups and role-based access, or on your own server if you prefer.",
      },
      {
        q: "Can you migrate data from our current system?",
        a: "Yes. We import item masters, party ledgers, opening stock and outstanding balances from Tally, Excel or your existing software.",
      },
    ],
    related: ["crm-development", "custom-software-development", "ai-automation"],
    work: ["digigocare"],
  },
  {
    slug: "crm-development",
    name: "CRM Development",
    icon: Users,
    seed: 97,
    summary:
      "Custom CRM software that captures every lead, assigns it, reminds your team to follow up and shows you exactly where each deal stands.",
    metaTitle: "Custom CRM Development Company in India",
    metaDescription:
      "Custom CRM development in Indore, India. Lead management, sales pipelines, automatic follow-ups, WhatsApp and call integration, and reports built around your sales process.",
    h1: "Custom CRM development so no lead is ever forgotten again",
    intro: [
      "Leads arrive from the website, ads, WhatsApp, phone calls and referrals. Without one place to hold them, some get three calls and some get none. A CRM built around your sales process fixes that.",
      "We build custom CRM systems for sales teams across India, whether that is a five-person office or a multi-branch business. You get the pipeline, reminders and reports your team needs, without paying per user for features nobody opens.",
    ],
    includes: [
      {
        title: "Every lead in one place",
        copy: "Automatic capture from your website, Meta and Google ads, IndiaMART, JustDial, WhatsApp and missed calls, with duplicates merged.",
      },
      {
        title: "Assignment and follow-up",
        copy: "Leads routed to the right person by city, product or round-robin, with reminders and escalation when a follow-up is missed.",
      },
      {
        title: "Pipeline built on your stages",
        copy: "Your own deal stages, required fields at each step and a board that shows the value sitting at every stage.",
      },
      {
        title: "WhatsApp, calls and email inside",
        copy: "Send templates, log calls and read the whole conversation history on the customer's record.",
      },
      {
        title: "Quotations and after-sales",
        copy: "Quotes, invoices, service tickets and renewal reminders so the relationship continues after the sale.",
      },
      {
        title: "Reports for owners",
        copy: "Conversion by source and salesperson, response time, lost reasons and forecast, on a dashboard and a daily summary.",
      },
    ],
    useCases: [
      {
        title: "Real estate",
        copy: "Site-visit scheduling, inventory by tower and unit, channel-partner tracking and payment milestones.",
      },
      {
        title: "Education and coaching",
        copy: "Enquiry to admission tracking, counsellor targets, batch allocation and fee follow-ups.",
      },
      {
        title: "Clinics and healthcare",
        copy: "Patient enquiries, appointment reminders, treatment follow-ups and recall campaigns.",
      },
      {
        title: "B2B sales teams",
        copy: "Long sales cycles with several contacts per account, quotations, approvals and repeat orders.",
      },
    ],
    steps: [
      {
        title: "Map the sales process",
        copy: "We document where leads come from, who handles them and where they currently go missing.",
      },
      {
        title: "Design the screens",
        copy: "Lead form, pipeline, customer record and reports, designed so a salesperson can update a lead in seconds.",
      },
      {
        title: "Build and connect sources",
        copy: "We build the CRM, connect every lead source and import your existing contacts.",
      },
      {
        title: "Train and tune",
        copy: "Team training, then adjustments in the first weeks based on how people actually use it.",
      },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "React Native", "WhatsApp Business API", "Telephony APIs", "n8n"],
    faqs: [
      {
        q: "Why build a custom CRM instead of using Zoho or HubSpot?",
        a: "Packaged CRMs are a good start for a small team with a standard process. Custom makes sense when per-user fees add up, when you need industry-specific screens such as property inventory or batch allocation, or when the CRM must tie tightly into your ERP, billing or telephony.",
      },
      {
        q: "How much does custom CRM development cost?",
        a: "It depends on the number of lead sources, pipelines, user roles and integrations. We give a fixed quote after mapping your process, and there is no per-user licence fee afterwards.",
      },
      {
        q: "Can the CRM capture leads from Facebook, Google and IndiaMART automatically?",
        a: "Yes. Leads from Meta lead forms, Google Ads, your website, IndiaMART, JustDial and WhatsApp can arrive in the CRM within seconds and be assigned straight away.",
      },
      {
        q: "Will my sales team be able to use it on mobile?",
        a: "Yes. The CRM works in any phone browser, and we can add an Android and iOS app with call logging and location check-in for field teams.",
      },
      {
        q: "Can you customise an existing CRM instead?",
        a: "Yes. If you already use Zoho, HubSpot or Odoo, we can configure it, build custom modules and connect it to your other systems.",
      },
    ],
    related: ["erp-software-development", "whatsapp-automation", "ai-agent-development"],
    work: ["digigocare", "bsquare"],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    icon: Smartphone,
    seed: 47,
    summary:
      "Android and iOS apps from a single codebase, with offline support, push notifications, payments and the polish users expect.",
    metaTitle: "Mobile App Development Company in India",
    metaDescription:
      "Mobile app development company in Indore, India. Android and iOS apps built with React Native and Flutter, including backend, admin panel, payments and store submission.",
    h1: "Mobile app development for Android and iOS, built once and built properly",
    intro: [
      "A good app feels instant, works when the network does not, and never makes the user think. Getting there takes more than screens: it takes a solid backend, careful handling of weak connections, and attention to the small details.",
      "We build mobile apps with React Native and Flutter, which means one codebase serves both Android and iOS. That keeps cost and timelines sensible while still delivering an app that feels native on each platform.",
    ],
    includes: [
      {
        title: "Android and iOS from one codebase",
        copy: "Both platforms shipped together, with shared logic and platform-specific touches where they matter.",
      },
      {
        title: "Backend and admin panel",
        copy: "The API, database and web dashboard behind the app, so you can manage users, content and orders yourself.",
      },
      {
        title: "Offline and low-network support",
        copy: "Data cached on the device and synced when the connection returns, which matters for field staff and smaller towns.",
      },
      {
        title: "Payments, notifications and maps",
        copy: "UPI and card payments, push and WhatsApp notifications, live location, OTP login and other integrations.",
      },
      {
        title: "Store submission",
        copy: "We prepare listings, screenshots and privacy forms, and take the app through Google Play and App Store review.",
      },
      {
        title: "Updates and monitoring",
        copy: "Crash reporting, usage analytics and regular releases to keep up with new OS versions and user feedback.",
      },
    ],
    useCases: [
      {
        title: "Customer apps",
        copy: "Ordering, booking, loyalty and account apps for retail, food, healthcare, education and services.",
      },
      {
        title: "Field and staff apps",
        copy: "Attendance, visit tracking, order taking, delivery and inspection apps for teams working outside the office.",
      },
      {
        title: "Marketplace and on-demand",
        copy: "Two-sided apps connecting customers with drivers, vendors or professionals, with live status and payouts.",
      },
      {
        title: "Companion apps for SaaS",
        copy: "A mobile front end for an existing web product, sharing the same backend and login.",
      },
    ],
    steps: [
      {
        title: "Define the first release",
        copy: "We agree the users, the core flows and what can wait for version two.",
      },
      {
        title: "Design and prototype",
        copy: "A tappable prototype on your own phone, refined until the main flows feel right.",
      },
      {
        title: "Build and test",
        copy: "Weekly test builds installed on real devices, including older and low-end Android phones.",
      },
      {
        title: "Publish and improve",
        copy: "Store submission, launch support and a plan for ongoing updates.",
      },
    ],
    stack: ["React Native", "Flutter", "TypeScript", "Node.js", "PostgreSQL", "Firebase", "AWS"],
    faqs: [
      {
        q: "How much does it cost to build a mobile app?",
        a: "The cost depends on the number of screens and user roles, whether a backend already exists, and integrations such as payments, maps or chat. We provide a fixed quote for the first release after a scoping call.",
      },
      {
        q: "Should I build with React Native, Flutter or native code?",
        a: "For most business apps, React Native or Flutter delivers both platforms for roughly the effort of one. Fully native development is worth it for heavy graphics, advanced camera work or deep hardware access. We recommend based on your app, not on our preference.",
      },
      {
        q: "How long does app development take?",
        a: "A first release with a handful of core flows usually takes ten to sixteen weeks, including design, backend and store approval. Store review itself can take from a day to a couple of weeks.",
      },
      {
        q: "Do I need my own developer accounts?",
        a: "Yes, and we help you set them up. Google Play charges a one-time registration fee and Apple charges an annual fee. The accounts stay in your company's name so you always control the app.",
      },
      {
        q: "Do I need an app, or is a website enough?",
        a: "If customers use you occasionally, a fast mobile website is often enough and far cheaper. An app earns its place when people use it repeatedly, need notifications, or need it to work offline. We will tell you which applies.",
      },
    ],
    related: ["saas-development", "custom-software-development", "ecommerce-development"],
    work: ["medoease", "catodrive"],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    icon: Boxes,
    seed: 205,
    summary:
      "Bespoke software, internal tools, dashboards and APIs for the problems that off-the-shelf products cannot solve.",
    metaTitle: "Custom Software Development Company",
    metaDescription:
      "Custom software development company in Indore, India. Internal tools, business applications, dashboards, APIs and integrations designed and engineered around your process.",
    h1: "Custom software development for the work no ready-made product fits",
    intro: [
      "Every business has a process that is uniquely its own: the way it quotes, schedules, inspects, approves or reports. When that process lives in spreadsheets and people's heads, it slows down as the company grows.",
      "We turn those processes into software. As a custom software development company in Indore, we have built practice management platforms, booking systems and B2B portals for clients in India and overseas.",
    ],
    includes: [
      {
        title: "Business applications",
        copy: "Web-based systems for operations such as scheduling, approvals, quality checks, field service or project tracking.",
      },
      {
        title: "Internal tools and dashboards",
        copy: "Admin panels and reporting screens that replace shared spreadsheets and give management live numbers.",
      },
      {
        title: "APIs and integrations",
        copy: "Connections between the systems you already use, such as accounting, payment, logistics and government portals.",
      },
      {
        title: "Customer and partner portals",
        copy: "Secure logins where clients, dealers or vendors can place orders, download documents and track status.",
      },
      {
        title: "Legacy modernisation",
        copy: "Old desktop or Access-based software rebuilt for the web, with data carried across safely.",
      },
      {
        title: "AI inside your software",
        copy: "Document reading, smart search, summaries and assistants added where they genuinely save time.",
      },
    ],
    useCases: [
      {
        title: "Operations-heavy businesses",
        copy: "Logistics, healthcare, construction and services firms coordinating many people and steps each day.",
      },
      {
        title: "Growing companies on spreadsheets",
        copy: "Teams where one Excel file has become critical infrastructure and nobody dares change it.",
      },
      {
        title: "Businesses with a unique model",
        copy: "Companies whose pricing, workflow or compliance needs do not match any packaged product.",
      },
      {
        title: "Startups needing a technical partner",
        copy: "Founders who want a senior team to design and build the product alongside them.",
      },
    ],
    steps: [
      {
        title: "Understand the problem",
        copy: "We study the current process and agree what success looks like in numbers.",
      },
      {
        title: "Design the solution",
        copy: "Screen designs and a technical plan you can review and challenge before build starts.",
      },
      {
        title: "Build in short cycles",
        copy: "Working software each week on a staging link, with your feedback shaping the next cycle.",
      },
      {
        title: "Deploy and support",
        copy: "Launch, training, documentation and ongoing maintenance under a clear support agreement.",
      },
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
    faqs: [
      {
        q: "When is custom software worth it over a ready-made product?",
        a: "When the ready-made product forces workarounds that cost more than the software saves, when licence fees scale badly with your team, or when the process itself is your competitive edge. If a packaged tool fits well, we will say so.",
      },
      {
        q: "How do you price custom software projects?",
        a: "We prefer a fixed price for a clearly defined scope, split into phases so you can stop or change direction after each one. For open-ended work we offer a monthly team arrangement.",
      },
      {
        q: "Who owns the source code?",
        a: "You do. Code is kept in a repository under your organisation and all intellectual property is assigned to you.",
      },
      {
        q: "How do you keep our data secure?",
        a: "Role-based access, encrypted connections, audit logs, regular backups and hosting in an account you own. We sign a non-disclosure agreement before seeing any sensitive information.",
      },
      {
        q: "What happens after the software goes live?",
        a: "We provide a support period for fixes, then an optional maintenance plan covering updates, monitoring and new features.",
      },
    ],
    related: ["erp-software-development", "saas-development", "ai-automation"],
    work: ["digigocare", "catodrive", "bsquare"],
  },
];
