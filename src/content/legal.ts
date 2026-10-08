import type { PostSection } from "@/content/blog";
import { site } from "@/content/site";

/**
 * Plain-language drafts describing how this site actually works today. Have a
 * lawyer review both before relying on them, and update the privacy policy
 * whenever analytics, ads or a new data processor is added.
 */

export const legalUpdated = "2026-10-08";

const contactLine = `Email ${site.emails[0]} or call ${site.phone.display}.`;

export const privacySections: PostSection[] = [
  {
    heading: "Who we are",
    body: [
      `${site.name} ("we", "us") is a software and AI development company based in ${site.location.city}, ${site.location.region}, ${site.location.country}. This policy explains what personal information we collect through ${site.url.replace("https://", "")}, why we collect it and what choices you have.`,
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect only what you choose to send us through an enquiry form on this site:",
      {
        list: [
          "Your name and email address.",
          "Your phone number, if you provide it.",
          "The service you are interested in and any message you write.",
          "The page you were on and which form or button you used, so we know what you were asking about.",
        ],
      },
      "If you email, call or message us on WhatsApp, we also keep that correspondence.",
      "Our hosting provider automatically records standard technical logs, such as IP address, browser type and the pages requested, to keep the site secure and running.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      {
        list: [
          "To reply to your enquiry and prepare a proposal or quote.",
          "To provide the services you engage us for.",
          "To keep records of our business communications.",
          "To protect the site against spam and misuse.",
        ],
      },
      "We do not sell your information, and we do not use it for advertising by third parties.",
    ],
  },
  {
    heading: "Where it is stored and who can see it",
    body: [
      "Enquiries are stored in a Google Sheets spreadsheet in our Google account and are visible only to our team. Google acts as our service provider for this storage. The website itself is served by a cloud hosting provider.",
      "We share personal information outside our team only when it is needed to deliver a service you have asked for, or when the law requires it.",
    ],
  },
  {
    heading: "Cookies and browser storage",
    body: [
      "This site does not use advertising or tracking cookies. It stores a few small values in your own browser so the site works properly:",
      {
        list: [
          "Your light or dark theme preference.",
          "A marker that the welcome message has already been shown in this visit.",
          "A marker that you have already sent an enquiry, so the welcome message is not shown again.",
        ],
      },
      "These values stay on your device and can be removed by clearing your browser's site data. If we add analytics in future, we will update this policy first.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep enquiry details for as long as needed to respond and to maintain a record of our dealings with you, and delete them when they are no longer required or when you ask us to, unless the law requires us to retain them.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Under India's Digital Personal Data Protection Act, 2023, you may ask us to:",
      {
        list: [
          "Tell you what personal information we hold about you.",
          "Correct or update it.",
          "Delete it.",
          "Stop contacting you, by withdrawing your consent.",
        ],
      },
      `To make a request or raise a concern, contact us. ${contactLine} We aim to respond within a reasonable time.`,
    ],
  },
  {
    heading: "Links to other sites",
    body: [
      "Our portfolio links to client websites that we do not operate. Their own privacy policies apply once you leave this site.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy as the site or the law changes. The date at the top of the page shows when it was last revised.",
    ],
  },
];

export const termsSections: PostSection[] = [
  {
    heading: "About these terms",
    body: [
      `These terms apply to your use of the ${site.name} website. By using the site you accept them. Any project we carry out for you is governed by a separate written agreement or proposal, which takes priority over this page.`,
    ],
  },
  {
    heading: "Using this website",
    body: [
      "You may browse the site and contact us through it for genuine business enquiries. You agree not to misuse it, including by attempting to gain unauthorised access, disrupting its operation, submitting false or automated enquiries, or copying it in bulk.",
    ],
  },
  {
    heading: "Information on the site",
    body: [
      "The content here, including service descriptions, articles, timelines and any prices shown, is general information and not a binding offer. Prices marked as starting from are indicative. A firm price, scope and timeline are confirmed only in a written quote.",
      "We take care to keep the site accurate and current, but we do not guarantee that every statement is complete or free of error. Articles are not professional, legal or financial advice.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      `The design, text, graphics and code of this site belong to ${site.name} unless stated otherwise. Client names, logos and screenshots in our portfolio belong to their respective owners and are shown to illustrate our work. Third-party product names mentioned on the site are trademarks of their owners.`,
      "You may share links to our pages and quote short extracts with credit. Please ask before reproducing anything more.",
    ],
  },
  {
    heading: "Links to other websites",
    body: [
      "The site links to client and third-party websites for your convenience. We do not control them and are not responsible for their content or practices.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "The website is provided as it is. To the extent the law allows, we are not liable for any loss arising from use of the site or reliance on its content. Nothing in these terms limits liability that cannot be limited by law, or affects the terms of a signed project agreement.",
    ],
  },
  {
    heading: "Privacy",
    body: [
      "Our Privacy Policy explains how we handle the personal information you send us through this site.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      `These terms are governed by the laws of India. Courts in ${site.location.city}, ${site.location.region} have jurisdiction over any dispute relating to this website.`,
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms? ${contactLine}`],
  },
];
