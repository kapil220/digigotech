import type { Post } from "./types";

export const postsA: Post[] = [
  {
    slug: "website-development-cost-in-indore",
    title: "Website development cost in Indore: what you actually pay for",
    description:
      "What decides the price of a business website in Indore, why quotes for the same site differ so much, and how to compare proposals without getting caught by hidden costs.",
    date: "2026-10-08",
    category: "Websites",
    intro: [
      "Ask five agencies in Indore for a website quote and you will get five numbers that barely overlap. One offers a site for the price of a phone. Another quotes twenty times that. Both call it a business website.",
      "The gap is not random. The quotes are for different things, and most proposals do a poor job of explaining what is included. This guide breaks down what drives the cost so you can compare like with like.",
    ],
    sections: [
      {
        heading: "The six things that decide the price",
        body: [
          "Almost every website quote comes down to the same handful of variables. If two quotes differ widely, one of these is the reason.",
          {
            list: [
              "Template or custom design. A bought theme with your logo dropped in takes days. A design made for your business, with pages planned around your customers, takes weeks. This is the single biggest difference.",
              "Number and type of pages. Five similar pages cost little more than three. Fifteen pages with different layouts, such as services, case studies, careers and a blog, are a different project.",
              "Who writes the content. If the agency writes your service descriptions, researches keywords and sources images, that is real work. If you supply everything, the quote should be lower.",
              "Functionality. A contact form is simple. Online booking, payments, customer login, a product catalogue or integration with your CRM each add build and testing time.",
              "Content management. A site only a developer can change is cheaper to build and more expensive to live with. An editor that lets your team update pages costs more up front.",
              "Search and performance work. Proper page titles, structured data, a sitemap, image optimisation and speed testing are often left out of low quotes entirely.",
            ],
          },
        ],
      },
      {
        heading: "Why the cheapest quote usually costs more",
        body: [
          "Very low quotes are possible because the same template is resold again and again. There is nothing wrong with a template if it fits, but be clear about what you are giving up.",
          "The common problems are a site that loads slowly on mobile data, pages that Google has barely indexed, a design identical to a competitor's, and no way to edit anything without paying the original developer. Fixing these later usually means starting again.",
          "The other hidden cost is ownership. If the domain and hosting are registered in the agency's name, you do not really own your website. Moving away becomes difficult, and renewals can be priced however the agency likes.",
        ],
      },
      {
        heading: "Costs that sit outside the build",
        body: [
          "Whatever you pay for design and development, a website has running costs. Ask every agency to list them separately.",
          {
            list: [
              "Domain name, renewed yearly.",
              "Hosting, monthly or yearly, depending on traffic and the platform.",
              "Business email, usually charged per mailbox.",
              "Platform or plugin licences, if the site uses paid themes, plugins or a hosted builder.",
              "Maintenance, covering updates, backups, security fixes and small changes.",
              "Ongoing SEO or advertising, which is a separate service from building the site.",
            ],
          },
          "None of these are large for a small business site, but they should be in your own accounts and you should know the yearly total before you sign.",
        ],
      },
      {
        heading: "Questions to ask before you accept a quote",
        body: [
          {
            list: [
              "Is the design custom, or based on a template? Can I see the template?",
              "How many pages and how many rounds of revision are included?",
              "Who writes the content and provides images?",
              "Will I be able to edit the site myself? Can you show me how?",
              "Are the domain, hosting and code in my name?",
              "What is the yearly cost after launch?",
              "Is basic SEO setup included, and what exactly does it cover?",
              "What happens if I need a change three months after launch?",
              "Can I speak to two recent clients?",
            ],
          },
          "A good agency answers all of these without hesitation. Vague answers on ownership or yearly costs are the clearest warning sign.",
        ],
      },
      {
        heading: "Matching the budget to the business",
        body: [
          "Not every business needs a custom build. A new shop or freelancer validating an idea can reasonably start with a simple, well-set-up template site and upgrade once it earns its keep.",
          "A business that depends on enquiries, such as a clinic, institute, builder, manufacturer or service firm, should treat the website as a sales asset. For these, custom design, clear service pages and proper search setup usually pay back within a few good leads.",
          "If the site must take bookings, payments or orders, you are commissioning software rather than a brochure, and the budget and timeline should reflect that.",
        ],
      },
      {
        heading: "How we quote",
        body: [
          "At Nexopsdev we give a fixed, written quote after a short call, listing the pages, features, content responsibilities, timeline and yearly running costs. The domain, hosting and code are always in the client's name.",
          "If a simpler or cheaper route would serve you just as well, we say so. Tell us what the site needs to achieve and we will tell you what it would take.",
        ],
      },
    ],
    services: ["website-development", "ecommerce-development"],
  },
  {
    slug: "whatsapp-business-api-automation-guide",
    title: "WhatsApp Business API automation: a practical guide for Indian businesses",
    description:
      "How the WhatsApp Business API works, what it costs, what you can automate, and how to set it up without getting your number banned.",
    date: "2026-10-08",
    category: "WhatsApp",
    intro: [
      "For most Indian businesses, WhatsApp is the sales counter, the support desk and the reminder system. It is also usually one phone, held by one person, with no record of who replied to whom.",
      "The WhatsApp Business API fixes this. It is the official way to connect WhatsApp to software, and it is what makes chatbots, automatic reminders and team inboxes possible. Here is how it works in plain terms.",
    ],
    sections: [
      {
        heading: "App versus API: what is the difference?",
        body: [
          "There are three WhatsApp products, and the names cause confusion.",
          {
            list: [
              "WhatsApp, the personal app everyone uses.",
              "WhatsApp Business app, a free app for small businesses with a profile, catalogue, quick replies and labels. It is designed for a person replying by hand.",
              "WhatsApp Business Platform, commonly called the API. There is no app. Your software, or a provider's dashboard, sends and receives messages on your number.",
            ],
          },
          "If you want messages sent automatically from your billing software, a chatbot answering at midnight, or ten staff sharing one number, you need the API.",
        ],
      },
      {
        heading: "What you can automate",
        body: [
          {
            list: [
              "Enquiry handling. A chatbot answers common questions, collects details and passes the lead to sales.",
              "Order and delivery updates. Confirmation, dispatch, tracking link and delivery messages sent by your store or ERP.",
              "Payment reminders. Due notices with a UPI or payment link, and a receipt once paid.",
              "Appointment reminders. Confirmation, a reminder the day before, and one-tap rescheduling.",
              "Broadcast campaigns. Offers and announcements to customers who opted in, with replies handled by the bot.",
              "Support. A shared inbox where conversations are assigned, tracked and never lost when someone is on leave.",
            ],
          },
        ],
      },
      {
        heading: "The rules you need to know",
        body: [
          "The API has rules the app does not, and they shape what you can build.",
          "First, the 24-hour window. When a customer messages you, you can reply freely for the next 24 hours. Outside that window you can only send a pre-approved template.",
          "Second, templates. Any message you start yourself, such as a reminder or an offer, must use a template that Meta has approved. Templates fall into categories: marketing, utility and authentication. Approval is usually quick if the wording is clear and matches the category.",
          "Third, opt-in. You may only message people who have agreed to hear from you on WhatsApp. A checkbox at checkout or a first message from the customer both count. Buying a list of numbers does not.",
          "Fourth, quality. Meta tracks how many recipients block or report you. Too many, and your sending limits are cut. This is why relevance matters more than volume.",
        ],
      },
      {
        heading: "What it costs",
        body: [
          "There are three separate costs, and proposals often blur them.",
          {
            list: [
              "Meta's message charges. Meta charges for template messages you send, with different rates for marketing, utility and authentication. Replies inside the 24-hour customer service window are not charged. Rates change from time to time, so check Meta's current rate card for India.",
              "Platform fee. If you use a provider's dashboard for the inbox, broadcasts and bot builder, they charge a monthly subscription and sometimes a markup per message.",
              "Build cost. Custom chatbots and integrations with your CRM, store or ERP are a one-time development cost.",
            ],
          },
          "For a business sending mostly utility messages such as order updates and reminders, running costs are modest. Marketing broadcasts are the expensive category, which is one more reason to send them only to people likely to respond.",
        ],
      },
      {
        heading: "Why unofficial bulk senders are a bad idea",
        body: [
          "Tools that promise unlimited bulk WhatsApp from a normal number work by automating the consumer app, which breaks WhatsApp's terms. Numbers used this way get banned, often permanently and without warning.",
          "If that number is printed on your packaging, your signboard and every customer's phone, losing it is expensive. The official API costs more per message than free, but it is the only route that protects the number.",
        ],
      },
      {
        heading: "How setup works",
        body: [
          {
            list: [
              "Verify your business with Meta using your GST certificate or another registration document.",
              "Choose a phone number. It can be new, or an existing number migrated to the API.",
              "Set a display name that matches your business and submit it for approval.",
              "Write and submit your first message templates.",
              "Connect the number to your inbox, chatbot and software.",
              "Collect opt-ins and start with your existing customers.",
            ],
          },
          "With documents ready, approval typically takes a few days. Building the chatbot and integrations takes longer, depending on how many systems are involved.",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "Start with one flow that already costs your team time every day. For a clinic that is appointment reminders. For a store it is order updates and cash-on-delivery confirmation. For an institute it is fee reminders. Get that working and measured, then add the next.",
          "We set up the official API and build WhatsApp chatbots and integrations for businesses in Indore and across India. If you want to know what it would cost at your message volume, send us your numbers and we will work it out with you.",
        ],
      },
    ],
    services: ["whatsapp-automation", "ai-chatbot-development"],
  },
  {
    slug: "chatbot-vs-voicebot-vs-ai-agent",
    title: "Chatbot, voicebot or AI agent: which one does your business need?",
    description:
      "The practical differences between AI chatbots, AI voicebots and AI agents, what each is good at, what each costs to run, and how to choose the right one first.",
    date: "2026-10-08",
    category: "AI",
    intro: [
      "Every software vendor now sells something with AI in the name, and the terms are used loosely. A chatbot, a voicebot and an AI agent are related, but they solve different problems and cost different amounts to run.",
      "This guide explains each one without the jargon and helps you decide which to build first.",
    ],
    sections: [
      {
        heading: "AI chatbot: conversation in text",
        body: [
          "An AI chatbot talks to people in writing, on your website, app or WhatsApp. Older chatbots followed fixed menus. Modern ones use a language model, so they understand questions typed in any wording and answer from the information you give them.",
          "A chatbot is the right choice when customers ask the same questions repeatedly and are comfortable typing. It suits product queries, admission enquiries, order tracking, lead capture and first-line support.",
          "Chatbots are the cheapest of the three to run, because text is inexpensive to process, and the fastest to launch.",
        ],
      },
      {
        heading: "AI voicebot: conversation on a phone call",
        body: [
          "An AI voicebot does the same job by voice. It answers or places a phone call, listens, works out a reply and speaks it aloud, quickly enough to feel like a normal conversation.",
          "Voice matters in India because many customers prefer calling to typing, especially outside the metros and among older customers. A voicebot suits appointment booking and reminders, lead qualification calls, payment follow-ups, cash-on-delivery confirmation and after-hours reception.",
          "Voice costs more per conversation than text, because you pay for telephony and for converting speech both ways. It is also harder to get right: accents, background noise and interruptions all need handling. The reward is that it reaches people who would never use a chat window.",
        ],
      },
      {
        heading: "AI agent: getting the task done",
        body: [
          "An AI agent is defined by what it can do, not how it talks. Where a basic bot answers questions, an agent takes actions in your systems: it checks the order database, issues the refund, updates the CRM, books the slot and sends the confirmation.",
          "An agent can sit behind a chat window, a phone line or no interface at all. An agent that reads incoming supplier invoices and enters them into your accounting system never speaks to anyone.",
          "Agents deliver the largest savings because they remove work rather than deflect questions. They also need the most care: clear limits on what they may do, approval steps for risky actions, and monitoring.",
        ],
      },
      {
        heading: "Side by side",
        body: [
          {
            list: [
              "Channel. Chatbot: website, app, WhatsApp. Voicebot: phone calls. Agent: any channel, or none.",
              "Best at. Chatbot: answering questions and capturing leads. Voicebot: calls at scale in local languages. Agent: completing multi-step tasks.",
              "Running cost. Chatbot: lowest. Voicebot: higher, charged per minute. Agent: depends on task complexity.",
              "Time to launch. Chatbot: weeks. Voicebot: a month or two. Agent: one to three months, starting with a pilot.",
              "Main risk. Chatbot: wrong answers if content is thin. Voicebot: misheard speech. Agent: a wrong action, which is why guardrails matter.",
            ],
          },
        ],
      },
      {
        heading: "How to choose",
        body: [
          "Ask three questions about the problem you want to solve.",
          "Where do your customers already contact you? If it is WhatsApp and your website, start with a chatbot. If the phone rings all day, a voicebot will have more effect.",
          "Is the problem answering, or doing? If staff spend their time replying to the same questions, a chatbot or voicebot that answers well is enough. If they spend it looking things up and updating systems, you need an agent with access to those systems.",
          "How costly is a mistake? A wrong answer about opening hours is minor. A wrong refund is not. The higher the stakes, the more you should start with the bot suggesting and a person approving.",
        ],
      },
      {
        heading: "A sensible order to build in",
        body: [
          "Most businesses do best starting small and expanding. A common path is a website and WhatsApp chatbot answering from your own content, then connecting it to your CRM and booking system so it can take simple actions, then adding voice for the calls that matter most.",
          "Each stage reuses the knowledge and integrations from the one before, so the investment builds on itself.",
        ],
      },
      {
        heading: "What all three need to work well",
        body: [
          {
            list: [
              "Good source material. The bot can only be as accurate as the information you give it.",
              "A clear handover to a person, with the conversation attached.",
              "Testing against real customer questions before launch.",
              "Regular review of transcripts and recordings afterwards.",
              "Honesty with customers that they are talking to an automated assistant.",
            ],
          },
          "We build all three at Nexopsdev, often for the same client in stages. If you describe the calls and messages your team handles each day, we can tell you which approach would pay back first.",
        ],
      },
    ],
    services: ["ai-chatbot-development", "ai-voicebot-development", "ai-agent-development"],
  },
];
