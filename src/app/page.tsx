import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Services from "@/components/sections/Services";
import Why from "@/components/sections/Why";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Marquee from "@/components/sections/Marquee";
import Industries from "@/components/sections/Industries";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { homeFaqs } from "@/content/home";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main">
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <Services />
      <Why />
      <Industries />
      <Process />
      <Marquee />
      <Work />
      <FAQ faqs={homeFaqs} />
      <CTA />
    </main>
  );
}
