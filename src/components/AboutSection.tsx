import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sleek-green/20 via-sleek-charcoal to-sleek-charcoal-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--green-primary))_0%,_transparent_50%)] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sleek-green mb-6 tracking-tight">
            About Hera Digital Media
          </h2>
          <p className="text-xl text-muted-foreground">
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
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Residential and Commercial Roofers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  General Contractors
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  HVAC Companies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Solar Installation Companies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Siding & Window Companies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Other Home Improvement Contractors
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
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Exclusive Leads:</strong> You're the only contractor receiving these leads
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Qualified Prospects:</strong> We pre-qualify leads so you talk to serious buyers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>USA-Only Focus:</strong> We work exclusively with US contractors
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>2+ Years Experience:</strong> Proven track record in contractor lead generation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>No Time Wasting:</strong> Ready-to-book homeowners, not tire kickers
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;