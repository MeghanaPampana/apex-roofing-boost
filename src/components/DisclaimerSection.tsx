import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const DisclaimerSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Green to black gradient background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-sleek-charcoal via-sleek-green/10 to-sleek-charcoal"></div> */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(18,128,0,0.4) 0%, transparent 35%),
            #0a0a0a
          `
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white tracking-tight">
          Our Honest Disclaimer
        </h2>    
          <div className="max-w-4xl mx-auto mb-12 p-8 bg-transparent">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Let's keep it real: Hera Digital Media has zero affiliation with Facebook. We simply know how to leverage their platform to line up quality appointments for roofing contractors who are hungry for growth.
              </p>
              <p>
                Those stellar testimonials you see? Genuine. And here's our commitment to you—we stand behind our work with a rock-solid guarantee. Depending on the ad spend you commit to, we guarantee a certain number of appointments. If we don't deliver at least that many, we'll work for free until we do. No excuses.
              </p>
              <p>
                But here's the truth: Getting a flood of appointments is just one piece of the puzzle. Closing the deal? That's on you. <br />
                Sometimes, clients get a boatload of opportunities but stumble when it's time to seal them. Success takes grit, persistence, and a relentless commitment to the process.
              </p>
              <p>
                We won't promise you the moon. What we do promise is our unwavering dedication to setting you up with the opportunities you need to succeed. We're in this together, and we're putting our money where our mouth is.
              </p>
              <p className="font-semibold">
                No sugarcoating, no fluff—just straight talk and real results. If you're ready to roll up your sleeves and work alongside a team that's as committed to your success as you are, let's make it happen.
              </p>
              <p className="text-white font-bold text-lg text-left">
                Are you ready? &emsp;              
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="px-8 py-3"
                >
                  Book a 15-Mins Call
                </Button>
              </p>
            </div>
          </div>        
      </div>
    </section>
  );
};

export default DisclaimerSection;