import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://nexopsdev.com"),
  title: "Nexopsdev Technologies — AI agents and software for growing businesses",
  description:
    "A senior software studio building AI agents and business automation, websites, mobile apps, CRM & ERP systems, and custom platforms for founders and growing businesses.",
  keywords: [
    "AI agents",
    "business automation",
    "workflow automation",
    "software studio",
    "web development",
    "mobile apps",
    "CRM",
    "ERP",
    "custom software",
  ],
  openGraph: {
    title: "Nexopsdev Technologies — Digital Product Studio",
    description:
      "AI agents and business automation, websites, mobile apps, CRM & ERP, and custom software — designed and engineered to scale.",
    type: "website",
  },
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
      lang="en"
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
            <Navbar />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
