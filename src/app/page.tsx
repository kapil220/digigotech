import Hero from "@/components/hero/Hero";
import Services from "@/components/sections/Services";
import Why from "@/components/sections/Why";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Marquee from "@/components/sections/Marquee";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Why />
      <Process />
      <Marquee />
      <Work />
      <CTA />
      <Footer />
    </main>
  );
}
