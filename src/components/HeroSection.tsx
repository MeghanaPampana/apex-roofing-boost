import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroVideoThumb from "@/assets/hero-video-thumb.jpg";
import { Play } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Green to black gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sleek-green/20 via-sleek-charcoal to-sleek-charcoal-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--green-primary))_0%,_transparent_50%)] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glass-card hover:glow-green transition-all duration-500">
              <img 
                src={heroVideoThumb} 
                alt="Roofing Services Video" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" variant="gradient" className="rounded-full p-6 shadow-2xl">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <Card className="glass-form border-sleek-green/30 hover:border-sleek-green/60 transition-all duration-500 hover:glow-green">
              <CardHeader className="bg-gradient-to-r from-sleek-green via-sleek-green-dark to-sleek-charcoal text-white rounded-t-2xl p-8">
                <CardTitle className="text-xl md:text-2xl text-center font-bold tracking-wide">
                  Close more roofing jobs by filling this out now!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8" id="contact-form">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="businessName" className="text-foreground mb-2 block font-medium">Business Name</Label>
                    <Input 
                      id="businessName" 
                      placeholder="Enter your business name"
                      className="glass-card border-sleek-charcoal-lighter focus:border-sleek-green focus:glow-green transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fullName" className="text-foreground mb-2 block font-medium">Full Name</Label>
                    <Input 
                      id="fullName" 
                      placeholder="Enter your full name"
                      className="glass-card border-sleek-charcoal-lighter focus:border-sleek-green focus:glow-green transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block font-medium">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address"
                      className="glass-card border-sleek-charcoal-lighter focus:border-sleek-green focus:glow-green transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground mb-2 block font-medium">Phone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number"
                      className="glass-card border-sleek-charcoal-lighter focus:border-sleek-green focus:glow-green transition-all duration-300"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    className="w-full mt-8 py-4 text-lg font-semibold"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;