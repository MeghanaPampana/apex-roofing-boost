import TopBanner from "@/components/TopBanner";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import DisclaimerSection from "@/components/DisclaimerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Navigation />
      <Header />
      <HeroSection />
      <TestimonialsGrid />
      <DisclaimerSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;