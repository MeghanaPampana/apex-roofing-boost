import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Page 1 */}
      <TopBanner />
      <Header />
      <HeroSection />
      
      {/* Page 2 */}
      <TestimonialsSection pageNumber={2} />
      
      {/* Page 3 */}
      <TestimonialsSection pageNumber={3} />
      
      {/* Page 4 */}
      <TestimonialsSection pageNumber={4} />
      
      {/* Page 5 */}
      <DisclaimerSection />
      
      {/* Page 6 */}
      <ContactSection />
    </div>
  );
};

export default Index;