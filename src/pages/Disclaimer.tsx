import Navigation from "@/components/Navigation";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <DisclaimerSection />
      </div>
      <Footer />
    </div>
  );
};

export default Disclaimer;