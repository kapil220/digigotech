import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import LeadProvider from "@/components/lead/LeadProvider";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { serviceGroups, servicePath } from "@/content/services";
import { site } from "@/content/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

/**
 * Fraunces carries the editorial voice — a warm, slightly wonky serif that
 * reads as considered rather than corporate. Inter handles everything a person
 * actually has to read at length.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Names and links only — keeps the full service copy out of the client bundle. */
const navServiceGroups = serviceGroups.map((g) => ({
  heading: g.heading,
  links: g.services.map((s) => ({ name: s.name, href: servicePath(s.slug) })),
}));

const defaultDescription =
  "Software and AI development company in Indore, India. Websites, e-commerce, SaaS, ERP, mobile apps, AI agents, chatbots, voicebots and WhatsApp automation.";
const defaultTitle = "Software & AI Development Company in Indore, India";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${defaultTitle} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  applicationName: site.name,
  keywords: [
    "software development company in Indore",
    "IT company in Indore",
    "website development company in Indore",
    "e-commerce website development",
    "SaaS development company",
    "ERP software development",
    "CRM development",
    "mobile app development",
    "AI agent development",
    "AI chatbot development",
    "AI voicebot",
    "WhatsApp automation",
    "business automation",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: "/",
    title: `${defaultTitle} | ${site.name}`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${defaultTitle} | ${site.name}`,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The inline script below stamps data-theme before hydration, so the
    // server markup intentionally differs from the client on this element.
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="bg-canvas text-ink antialiased">
        {/* Applies the stored theme before first paint so there is no flash of
            the wrong palette. Kept inline and tiny on purpose. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("nexopsdev-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","light")}})()`,
          }}
        />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[300] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:text-on-accent"
        >
          Skip to content
        </a>
        <PageLoader />
        <CustomCursor />
        <ThemeProvider>
          <SmoothScrollProvider>
            <LeadProvider>
              <Navbar serviceGroups={navServiceGroups} />
              {children}
              <Footer />
            </LeadProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
