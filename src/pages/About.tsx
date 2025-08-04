import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sleek-green/20 via-sleek-charcoal to-sleek-charcoal-light"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--green-primary))_0%,_transparent_50%)] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sleek-green mb-6 tracking-tight text-left">
              About Hera Digital Media
            </h1>
            <p className="text-xl text-muted-foreground text-left">
              We Bring You Leads. You Focus on the Work You Love.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                At Hera Digital Media, we specialize in helping roofers and home improvement contractors across the US grow their businesses with qualified leads and booked appointments — no fluff, no shared leads, no wasted time.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                We've been in the game for over 2 years, working exclusively with contractors in the United States, and we understand exactly what it takes to fill your pipeline with real homeowners who need your services now.
              </p>
            </div>
            
            <Card className="glass-form border-sleek-green/30 hover:border-sleek-green/60 transition-all duration-500 hover:glow-green">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-sleek-green mb-4">
                  Let's turn your slow days into booked weeks.
                </h3>
                <Button variant="gradient" size="lg" className="px-8 py-3">
                  Schedule a Free Strategy Call
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-sleek-green mb-6">
                  Who do We Work With?
                </h3>
                <ul className="space-y-4 text-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sleek-green rounded-full mr-4"></div>
                    Roofing Contractors
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sleek-green rounded-full mr-4"></div>
                    Remodeling Companies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sleek-green rounded-full mr-4"></div>
                    Painters, Siding, Window & Gutter Installers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sleek-green rounded-full mr-4"></div>
                    HVAC, Plumbing, and General Home Improvement Pros
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-sleek-green mb-6">
                  Why Choose Hera?
                </h3>
                <ul className="space-y-4 text-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sleek-green rounded-full mr-4"></div>
                    Exclusive Leads Only – No sharing with competitors
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sleek-green rounded-full mr-4"></div>
                    Appointments Booked For You – We follow up so you don't have to
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sleek-green rounded-full mr-4"></div>
                    USA Only – Hyper-focused on local markets across the States
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sleek-green rounded-full mr-4"></div>
                    2+ Years of Results – Trusted by contractors nationwide
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;