import HeroSection from "@/components/hero-section";
import QuickSteps from "@/components/quick-steps";
import BestOption from "@/components/best-option";
import ExperiencedTeam from "@/components/experienced-team";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
// import QuoteForm from "@/components/quote-form";
import Faq from "@/components/faq";
import BlogSection from "@/components/blog-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickSteps />
      <BestOption />
      <ExperiencedTeam />
      <Services />
      <Testimonials />
      {/* <QuoteForm /> */}
      <Faq />
      <BlogSection />
    </>
  );
}
