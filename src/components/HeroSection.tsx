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
    <section className="py-16 bg-gradient-to-br from-roofing-light-gray to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={heroVideoThumb} 
                alt="Roofing Services Video" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Button size="lg" className="rounded-full p-4 bg-white/90 hover:bg-white text-roofing-blue hover:scale-105">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <Card className="shadow-2xl border-0" style={{ boxShadow: 'var(--shadow-form)' }}>
              <CardHeader className="bg-gradient-to-r from-roofing-blue to-roofing-blue-dark text-white rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl text-center">
                  Close more roofing jobs by filling this out now!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6" id="contact-form">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input 
                      id="businessName" 
                      placeholder="Enter your business name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full mt-6"
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