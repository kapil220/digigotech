import { Bot, MessageCircle, MessageSquare, PhoneCall, Workflow } from "lucide-react";
import type { Service } from "./types";

export const aiServices: Service[] = [
  {
    slug: "ai-agent-development",
    name: "AI Agent Development",
    icon: Bot,
    seed: 331,
    summary:
      "AI agents that do real work inside your business: answering customers, qualifying leads, processing documents and updating your systems, with a human in the loop where it matters.",
    metaTitle: "AI Agent Development Company in India",
    metaDescription:
      "AI agent development company in Indore, India. Custom AI agents for customer support, sales, document processing and operations, integrated with your CRM, ERP and WhatsApp.",
    h1: "AI agent development for work your team should not be doing by hand",
    intro: [
      "A chatbot answers questions. An AI agent finishes the job: it reads the request, looks up the order, checks the policy, updates the CRM, sends the reply and hands over to a person when it is unsure. That difference is where the time savings are.",
      "We design and build AI agents for businesses in India and abroad, from our studio in Indore. Each agent is connected to the tools you already use, tested against real cases from your business, and monitored so you can see what it did and why.",
    ],
    includes: [
      {
        title: "Agents built around one clear job",
        copy: "We start with a single, measurable task such as resolving support tickets or qualifying inbound leads, and get that right before widening the scope.",
      },
      {
        title: "Connected to your systems",
        copy: "Agents read from and write to your CRM, ERP, helpdesk, spreadsheets, email and WhatsApp through secure, permissioned integrations.",
      },
      {
        title: "Answers grounded in your data",
        copy: "Retrieval over your documents, policies, catalogue and past tickets, so replies come from your information rather than the model's guesswork.",
      },
      {
        title: "Human handover and approvals",
        copy: "Clear rules for when the agent acts alone, when it asks for approval and when it passes the conversation to a person with full context.",
      },
      {
        title: "Testing and evaluation",
        copy: "A test set built from your real conversations, run on every change, so quality is measured rather than assumed.",
      },
      {
        title: "Monitoring and cost control",
        copy: "Logs of every action, dashboards for accuracy and resolution rate, and limits that keep model spend predictable.",
      },
    ],
    useCases: [
      {
        title: "Customer support",
        copy: "Resolve order status, returns, appointment and account queries on chat, email and WhatsApp at any hour.",
      },
      {
        title: "Sales and lead qualification",
        copy: "Respond to every enquiry in seconds, ask the right questions, score the lead and book a call for your team.",
      },
      {
        title: "Document processing",
        copy: "Read invoices, purchase orders, KYC papers and reports, extract the data and enter it into your system.",
      },
      {
        title: "Internal assistants",
        copy: "Give staff one place to ask about policies, stock, pricing or customer history and get an answer with sources.",
      },
    ],
    steps: [
      {
        title: "Pick the right task",
        copy: "We review your workflows and choose a task with high volume, clear rules and a result we can measure.",
      },
      {
        title: "Prototype on real data",
        copy: "A working agent tested on your past conversations or documents within the first few weeks.",
      },
      {
        title: "Integrate and pilot",
        copy: "We connect it to live systems and run it on a share of real traffic with a person reviewing.",
      },
      {
        title: "Roll out and improve",
        copy: "Full rollout with monitoring, then regular reviews of failures to keep raising accuracy.",
      },
    ],
    stack: ["Claude", "OpenAI", "LangGraph", "Python", "pgvector", "n8n", "Twilio"],
    faqs: [
      {
        q: "What is the difference between an AI agent and a chatbot?",
        a: "A chatbot holds a conversation and answers from a script or knowledge base. An AI agent can also take actions: look up records, update systems, send messages and complete multi-step tasks. Many projects start as a chatbot and grow into an agent as trust builds.",
      },
      {
        q: "How much does it cost to build an AI agent?",
        a: "There are two parts: the build, which depends on how many systems the agent connects to and how complex the task is, and running costs, which are the AI model's usage charges and hosting. We estimate both up front and design the agent to keep usage costs under control.",
      },
      {
        q: "Will the agent make things up?",
        a: "Language models can produce wrong answers, so we design against it. The agent answers only from your approved data, cites where an answer came from, refuses when it lacks information and escalates to a person. We measure accuracy on a test set before and after launch.",
      },
      {
        q: "Is our business data safe?",
        a: "We use enterprise API access from model providers, under terms that do not use your data to train their models. Data stays in your own cloud account and the agent only has the permissions it needs. Sensitive fields can be masked before they reach the model.",
      },
      {
        q: "Can the agent work in Hindi and other Indian languages?",
        a: "Yes. Agents can read and reply in Hindi, Hinglish and major regional languages, in text and in voice.",
      },
      {
        q: "How long does an AI agent project take?",
        a: "A first working prototype usually takes two to four weeks. A production agent connected to your systems typically goes live in six to twelve weeks, starting with a supervised pilot.",
      },
    ],
    related: ["ai-chatbot-development", "ai-voicebot-development", "ai-automation"],
    work: ["digigocare"],
  },
  {
    slug: "ai-chatbot-development",
    name: "AI Chatbot Development",
    icon: MessageSquare,
    seed: 263,
    summary:
      "AI chatbots for your website and app that answer from your own content, capture leads and book appointments around the clock.",
    metaTitle: "AI Chatbot Development Company in India",
    metaDescription:
      "AI chatbot development company in Indore, India. Custom chatbots for websites, apps and WhatsApp that answer from your data, capture leads, book appointments and hand over to your team.",
    h1: "AI chatbot development that answers like your best team member",
    intro: [
      "Visitors have questions at eleven at night, and most will not fill in a form and wait. An AI chatbot trained on your own content answers them immediately, collects their details and passes warm leads to your team.",
      "We build custom AI chatbots for websites, mobile apps and WhatsApp. Unlike the rigid button-menu bots people have learned to ignore, these understand natural questions in English and Hindi, and they know when to bring in a human.",
    ],
    includes: [
      {
        title: "Trained on your content",
        copy: "The bot learns from your website, brochures, price lists, FAQs and policies, and is updated when they change.",
      },
      {
        title: "Lead capture and qualification",
        copy: "It collects name, phone and requirement during the conversation and sends qualified leads to your CRM or sheet instantly.",
      },
      {
        title: "Bookings and actions",
        copy: "Appointment scheduling, order tracking, quote requests and ticket creation handled inside the chat.",
      },
      {
        title: "Website, app and WhatsApp",
        copy: "One brain behind several channels, so customers get the same answer wherever they ask.",
      },
      {
        title: "Handover to a person",
        copy: "A smooth transfer to your staff with the full conversation, during working hours, and a callback request outside them.",
      },
      {
        title: "Conversation analytics",
        copy: "See what people ask most, where the bot fails and which questions lead to sales.",
      },
    ],
    useCases: [
      {
        title: "Lead generation sites",
        copy: "Real estate, education, clinics and service businesses that want every visitor engaged and every enquiry captured.",
      },
      {
        title: "E-commerce stores",
        copy: "Product questions, size and availability checks, order status and returns handled without a support queue.",
      },
      {
        title: "Customer support desks",
        copy: "First-line answers to repetitive queries so your team spends time on the difficult ones.",
      },
      {
        title: "Internal helpdesks",
        copy: "HR, IT and policy questions answered for employees from your internal documents.",
      },
    ],
    steps: [
      {
        title: "Gather the knowledge",
        copy: "We collect your content and the questions customers really ask, and define what the bot should and should not do.",
      },
      {
        title: "Build and train",
        copy: "We set up retrieval over your content, write the bot's instructions and design the conversation flows.",
      },
      {
        title: "Test with real questions",
        copy: "Your team tries to break it. We fix gaps and tune tone until the answers are right.",
      },
      {
        title: "Launch and review",
        copy: "We put it live, then review transcripts regularly to improve answers and add new topics.",
      },
    ],
    stack: ["Claude", "OpenAI", "LangGraph", "pgvector", "Next.js", "WhatsApp Business API", "Node.js"],
    faqs: [
      {
        q: "How is an AI chatbot different from a normal chatbot?",
        a: "A traditional chatbot follows fixed menus and breaks when someone types something unexpected. An AI chatbot understands free-form questions, answers from your content in natural language and can handle follow-up questions in the same conversation.",
      },
      {
        q: "How much does an AI chatbot cost?",
        a: "There is a one-time build cost, which depends on the number of channels and integrations, and a monthly running cost for hosting and AI usage that scales with conversation volume. We estimate both before you commit.",
      },
      {
        q: "Can the chatbot reply in Hindi?",
        a: "Yes. It can understand and reply in Hindi, Hinglish, English and other Indian languages, and switch based on what the customer writes.",
      },
      {
        q: "What happens when the bot does not know the answer?",
        a: "It says so, offers to connect the customer with your team and records the question so we can add the answer. It is instructed not to guess on prices, policies or commitments.",
      },
      {
        q: "Can it connect to my CRM or booking system?",
        a: "Yes. We integrate with common CRMs, calendars, e-commerce platforms and custom software so the bot can create leads, book slots and check order status.",
      },
      {
        q: "How long does it take to launch?",
        a: "A website chatbot answering from your existing content can be live in two to three weeks. Bots with bookings, payments or several integrations usually take four to eight weeks.",
      },
    ],
    related: ["whatsapp-automation", "ai-voicebot-development", "ai-agent-development"],
    work: ["digigocare"],
  },
  {
    slug: "ai-voicebot-development",
    name: "AI Voicebot Development",
    icon: PhoneCall,
    seed: 389,
    summary:
      "AI voice agents that answer and make phone calls in Hindi and English: reminders, lead qualification, order confirmation and support, without a call-centre queue.",
    metaTitle: "AI Voicebot Development Company in India",
    metaDescription:
      "AI voicebot and AI calling agent development in Indore, India. Voice agents in Hindi and English for inbound support, lead qualification, appointment reminders and payment follow-ups.",
    h1: "AI voicebot development for calls that never go unanswered",
    intro: [
      "In India the phone is still where business happens. Customers call to ask, confirm and complain, and a missed call is often a lost sale. An AI voice agent picks up every call instantly and speaks naturally in the caller's language.",
      "We build AI voicebots and calling agents for inbound and outbound use. They handle the repetitive calls, such as reminders, confirmations and first-level questions, and transfer to your staff when a person is needed.",
    ],
    includes: [
      {
        title: "Natural conversation in Hindi and English",
        copy: "Voices that sound human, understand accents and mixed Hindi-English speech, and respond quickly enough that the call feels normal.",
      },
      {
        title: "Inbound call answering",
        copy: "A virtual receptionist that answers questions, books appointments, takes orders and routes callers to the right person.",
      },
      {
        title: "Outbound calling campaigns",
        copy: "Appointment reminders, lead qualification, payment follow-ups, feedback calls and delivery confirmation at scale.",
      },
      {
        title: "Live transfer to your team",
        copy: "The agent hands the call to a person with a summary when the caller asks, or when the situation is beyond its brief.",
      },
      {
        title: "CRM and calendar integration",
        copy: "Every call logged with recording, transcript, summary and outcome on the customer's record, with bookings written to your calendar.",
      },
      {
        title: "Telephony setup",
        copy: "Indian phone numbers, call routing and compliant outbound calling arranged through an established telephony provider.",
      },
    ],
    useCases: [
      {
        title: "Clinics and hospitals",
        copy: "Appointment booking, reminder calls and follow-ups after treatment, reducing no-shows and front-desk load.",
      },
      {
        title: "Real estate and education",
        copy: "Call every new lead within minutes, ask qualifying questions and book a site visit or counselling session.",
      },
      {
        title: "Lending and collections",
        copy: "Polite, consistent payment reminders with promises to pay recorded and escalations flagged.",
      },
      {
        title: "E-commerce and logistics",
        copy: "Cash-on-delivery confirmation, address verification and delivery rescheduling by phone.",
      },
    ],
    steps: [
      {
        title: "Script the calls",
        copy: "We listen to real call recordings, define the agent's goals and write how it should handle each situation.",
      },
      {
        title: "Build the voice agent",
        copy: "We select speech and language models, tune the voice and response speed, and connect your data.",
      },
      {
        title: "Pilot on live calls",
        copy: "A limited rollout with every call reviewed, so we can correct misunderstandings before scaling.",
      },
      {
        title: "Scale and monitor",
        copy: "Full rollout with dashboards for call outcomes, transfer rate and customer sentiment.",
      },
    ],
    stack: ["Claude", "OpenAI Realtime", "Deepgram", "ElevenLabs", "Twilio", "Exotel", "Python"],
    faqs: [
      {
        q: "What is an AI voicebot?",
        a: "An AI voicebot, also called an AI voice agent or AI calling agent, is software that talks to people on a phone call. It converts speech to text, uses a language model to decide what to say, and speaks the reply in a natural voice, all within about a second.",
      },
      {
        q: "Does it really sound human, and can it speak Hindi?",
        a: "Modern voice models are natural enough that many callers do not notice at first. Our agents speak Hindi, English and mixed Hinglish, and we can add other Indian languages. We recommend the agent introduces itself as an automated assistant, which callers generally accept.",
      },
      {
        q: "How much does an AI voice agent cost?",
        a: "You pay a one-time build cost and then per-minute running costs covering telephony, speech and AI model usage. Per-minute cost depends on the voice quality and call volume you choose. We share a clear estimate based on your expected minutes.",
      },
      {
        q: "Is automated calling legal in India?",
        a: "Outbound commercial calls are regulated by TRAI. We set up calling through a registered telephony provider, call only people who have given you their number for that purpose, respect do-not-disturb preferences and keep call timings within permitted hours.",
      },
      {
        q: "Can it transfer the call to a real person?",
        a: "Yes. The agent can transfer live to your staff, schedule a callback or send the caller a WhatsApp message with details.",
      },
      {
        q: "How long does it take to deploy a voicebot?",
        a: "A single-purpose agent, such as appointment reminders, can be piloted in three to four weeks. Agents handling open-ended inbound calls with several integrations usually take six to ten weeks.",
      },
    ],
    related: ["ai-chatbot-development", "whatsapp-automation", "crm-development"],
    work: ["digigocare"],
  },
  {
    slug: "whatsapp-automation",
    name: "WhatsApp Automation",
    icon: MessageCircle,
    seed: 419,
    summary:
      "WhatsApp Business API setup, chatbots, broadcasts and CRM integration, so enquiries, orders and reminders run on the app your customers already use.",
    metaTitle: "WhatsApp Automation & Chatbot Development",
    metaDescription:
      "WhatsApp automation services in Indore, India. Official WhatsApp Business API setup, AI chatbots, broadcast campaigns, order and payment notifications, and CRM integration.",
    h1: "WhatsApp automation that turns chats into orders, bookings and repeat customers",
    intro: [
      "Your customers already message you on WhatsApp. The problem is that replies depend on one phone, one person and their working hours. WhatsApp automation moves that onto the official Business API, where messages can be answered, routed and tracked properly.",
      "We set up and build on the official WhatsApp Business Platform from Meta. That means approved templates, a verified business number, and no risk of the bans that come with unofficial bulk-messaging tools.",
    ],
    includes: [
      {
        title: "WhatsApp Business API setup",
        copy: "Meta Business verification, number registration, display name approval and message template submission handled for you.",
      },
      {
        title: "AI chatbot on WhatsApp",
        copy: "Automatic replies to enquiries, catalogue browsing, order taking and appointment booking in natural language.",
      },
      {
        title: "Notifications and reminders",
        copy: "Order confirmations, dispatch updates, payment reminders, appointment alerts and OTPs sent automatically from your software.",
      },
      {
        title: "Broadcast campaigns",
        copy: "Offers and announcements sent to opted-in customers in segments, with delivery, read and reply tracking.",
      },
      {
        title: "Shared team inbox",
        copy: "Several staff answering from one number, with assignment, notes, labels and the full chat history.",
      },
      {
        title: "CRM, ERP and store integration",
        copy: "Chats create leads, orders update customers, and payments are collected through links inside the conversation.",
      },
    ],
    useCases: [
      {
        title: "Retail and e-commerce",
        copy: "Abandoned-cart recovery, order tracking, cash-on-delivery confirmation and reorder reminders.",
      },
      {
        title: "Clinics, salons and services",
        copy: "Booking, reminders, rescheduling and follow-up messages that cut no-shows.",
      },
      {
        title: "Education and coaching",
        copy: "Admission enquiries, fee reminders, class updates and results sent to parents and students.",
      },
      {
        title: "B2B and distribution",
        copy: "Dealers placing orders, checking stock and downloading invoices and ledgers over chat.",
      },
    ],
    steps: [
      {
        title: "Set up the official API",
        copy: "We complete Meta verification, connect your number and get your first templates approved.",
      },
      {
        title: "Design the conversations",
        copy: "We map the journeys, such as enquiry, order, reminder and support, and write the messages.",
      },
      {
        title: "Build and integrate",
        copy: "We build the bot and flows and connect them to your CRM, store, ERP and payment gateway.",
      },
      {
        title: "Launch and optimise",
        copy: "We go live, train your team on the inbox and tune flows using reply and conversion data.",
      },
    ],
    stack: ["WhatsApp Business Platform", "WhatsApp Cloud API", "Claude", "n8n", "Node.js", "Razorpay", "PostgreSQL"],
    faqs: [
      {
        q: "What is the WhatsApp Business API, and how is it different from the WhatsApp Business app?",
        a: "The WhatsApp Business app is a free phone app for one or a few users replying manually. The WhatsApp Business API, now called the WhatsApp Business Platform, lets software send and receive messages, so you can run chatbots, automatic notifications, a multi-agent inbox and integrations at scale.",
      },
      {
        q: "How much does WhatsApp automation cost?",
        a: "There are three parts: a one-time setup and build cost, a monthly platform or hosting cost, and Meta's own charges for template messages, which vary by message category. We show you the current rate card and an estimate based on your volumes before you start.",
      },
      {
        q: "Will my number get banned for sending bulk messages?",
        a: "Bans happen with unofficial tools that scrape or spam. On the official API you send approved templates to customers who have opted in, and Meta monitors quality. We set up opt-in collection and sending practices that keep your quality rating healthy.",
      },
      {
        q: "Can I keep my existing WhatsApp number?",
        a: "Usually yes. An existing number can be migrated to the API, and Meta offers a coexistence option that lets some businesses keep using the app alongside it. We check eligibility for your number before migrating.",
      },
      {
        q: "Can customers pay inside WhatsApp?",
        a: "Yes. The bot can send a UPI or payment gateway link in the chat and confirm the order automatically once payment is received.",
      },
      {
        q: "How long does setup take?",
        a: "API access and first templates are usually approved within a few days once your Meta Business verification documents are in order. A complete chatbot with integrations typically takes three to six weeks.",
      },
    ],
    related: ["ai-chatbot-development", "crm-development", "ecommerce-development"],
    work: ["digigocare", "medoease"],
  },
  {
    slug: "ai-automation",
    name: "AI Tools & Business Automation",
    icon: Workflow,
    seed: 457,
    summary:
      "Custom AI tools and automated workflows that take repetitive work off your team: data entry, reports, follow-ups, document handling and system-to-system updates.",
    metaTitle: "AI Automation & Custom AI Tools",
    metaDescription:
      "AI automation services in Indore, India. Custom AI tools and workflow automation for data entry, document processing, reporting, lead follow-up and integration between your business systems.",
    h1: "AI tools and business automation that give your team its hours back",
    intro: [
      "Look closely at any office and you will find people copying data between systems, building the same report every Monday, chasing the same follow-ups and reading documents to type their contents somewhere else. Most of that can be automated today.",
      "We build custom AI tools and automated workflows for businesses in Indore and across India. Some are simple connections between two apps. Others use AI to read documents, write drafts or make routine decisions. All of them are built to run reliably without supervision.",
    ],
    includes: [
      {
        title: "Workflow automation",
        copy: "Multi-step processes across your apps triggered automatically, such as a new order creating an invoice, a dispatch entry and a customer message.",
      },
      {
        title: "Document processing",
        copy: "Invoices, purchase orders, bank statements, forms and contracts read by AI, checked against rules and entered into your system.",
      },
      {
        title: "Custom AI tools for your team",
        copy: "Purpose-built assistants for tasks such as writing quotations, drafting replies, summarising calls or preparing proposals in your format.",
      },
      {
        title: "Automated reporting",
        copy: "Daily and weekly reports compiled from several sources and delivered to email or WhatsApp without anyone building them.",
      },
      {
        title: "System integration",
        copy: "Your website, CRM, ERP, accounting, payment and logistics tools connected so data is entered once.",
      },
      {
        title: "AI added to existing software",
        copy: "Search, summaries, recommendations and assistants built into the software you already run.",
      },
    ],
    useCases: [
      {
        title: "Back-office teams",
        copy: "Accounts, operations and admin staff spending hours on entry, reconciliation and reports.",
      },
      {
        title: "Sales and marketing teams",
        copy: "Lead routing, follow-up sequences, proposal drafting and campaign reporting handled automatically.",
      },
      {
        title: "Document-heavy businesses",
        copy: "Logistics, finance, legal, healthcare and trading firms processing large volumes of paperwork.",
      },
      {
        title: "Owners who want visibility",
        copy: "One daily summary of sales, collections, stock and pending tasks pulled from every system.",
      },
    ],
    steps: [
      {
        title: "Audit the workflows",
        copy: "We list repetitive tasks, estimate the hours each one costs and rank them by payback.",
      },
      {
        title: "Automate the first one",
        copy: "We build the highest-value automation first, usually within two to three weeks.",
      },
      {
        title: "Test with real cases",
        copy: "We run it alongside the manual process until the results match and exceptions are handled.",
      },
      {
        title: "Extend and maintain",
        copy: "We add further automations, monitor for failures and adjust when your tools or process change.",
      },
    ],
    stack: ["n8n", "Claude", "OpenAI", "Python", "Zapier", "Google Workspace", "PostgreSQL"],
    faqs: [
      {
        q: "Which business tasks can be automated with AI?",
        a: "Good candidates are frequent, rule-based and digital: data entry, document reading, report building, lead follow-up, invoice matching, email triage and updates between systems. Tasks needing judgement on unusual cases are better assisted by AI than fully automated.",
      },
      {
        q: "How much does AI automation cost?",
        a: "A single workflow connecting existing apps is a small project. Tools involving document reading or custom AI logic cost more to build and have modest monthly running costs. We estimate the hours saved alongside the price so you can judge the return.",
      },
      {
        q: "Do we need to replace our existing software?",
        a: "No. Automation works on top of what you already use, including Tally, Excel, Google Sheets, your CRM and email. We connect to them rather than replace them.",
      },
      {
        q: "What tools do you use for automation?",
        a: "We commonly use n8n for workflows, Claude and OpenAI models for language and document tasks, and custom code where reliability or scale demands it. We choose based on your volume, budget and data-sensitivity needs.",
      },
      {
        q: "What happens when an automation fails?",
        a: "Every workflow has error handling, alerts and a log. If a step fails, the right person is notified with the details and the item is queued for retry or manual handling, so nothing is silently lost.",
      },
    ],
    related: ["ai-agent-development", "custom-software-development", "erp-software-development"],
    work: ["digigocare"],
  },
];
