import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import DashboardPreview from "@/components/DashboardPreview";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Industries />
      <DashboardPreview />
      <Security />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
