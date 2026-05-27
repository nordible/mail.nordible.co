import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { SocialProof } from "@/components/social-proof/SocialProof";
import { Benefits } from "@/components/benefits/Benefits";
import { Features } from "@/components/features/Features";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Migration } from "@/components/migration/Migration";
import { Security } from "@/components/security/Security";
import { Pricing } from "@/components/pricing/Pricing";
import { Comparison } from "@/components/comparison/Comparison";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { FAQ } from "@/components/faq/FAQ";
import { CTA } from "@/components/cta/CTA";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Benefits />
        <Features />
        <HowItWorks />
        <Migration />
        <Security />
        <Pricing />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
