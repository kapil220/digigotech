import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digigotech.com"),
  title: "DigiGoTech — We build the software behind great companies",
  description:
    "A premium software studio building websites, mobile apps, CRM & ERP systems, and custom platforms for founders and growing businesses.",
  keywords: [
    "software studio",
    "web development",
    "mobile apps",
    "CRM",
    "ERP",
    "custom software",
  ],
  openGraph: {
    title: "DigiGoTech — Digital Product Studio",
    description:
      "Websites, mobile apps, CRM & ERP, and custom software — designed and engineered to scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-base text-ink antialiased">
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
