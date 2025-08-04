import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Lead Generation (Done-for-You)",
      subtitle: "We deliver real, ready-to-buy roofing leads — straight to your phone or inbox.",
      bullets: [
        "Exclusive homeowner leads (no sharing with competitors)",
        "Targeted by zip code, service type, and homeowner intent", 
        "Verified contact info (phone, email, address)",
        "Real-time lead delivery"
      ]
    },
    {
      title: "Appointment Setting ", 
      subtitle: "We don’t just send leads — we book appointments on your calendar.",
      bullets: [
        "Lead nurturing via call/text/email",
        "Calendar integration (Google/Outlook/etc.)",
        "AI Hybrid Appointment Systems",
        "Only pay for qualified appointments"
      ]
    },
    {
      title: "Paid Ad Campaigns (Meta & Google Ads)",
      subtitle: "We run proven ad campaigns that attract high-intent homeowners.", 
      bullets: [
        "Facebook/Instagram Lead Forms",
        "Google Search Ads for \"roof repair near me\"",
        "Landing pages optimized for conversions",
        "Local radius targeting & A/B testing"
      ]
    },
    {
      title: "Local SEO & Google Business Profile Management",
      subtitle: "Get found when people search \"roofing contractor near me.\"",
      bullets: [
        "Google Business Profile management", 
        "Review generation & response system",
        "Website SEO for your service area",
        "Monthly performance reports"
      ]
    },
    {
      title: "CRM & Automation Setup",
      subtitle: "Track every lead and never miss a follow-up.",
      bullets: [
        "CRM setup (we use your preferred tool)",
        "Automated follow-up sequences (text, email, voicemail drops)",
        "Pipeline tracking and lead scoring",
        "Call tracking & performance analytics"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sleek-charcoal via-sleek-charcoal-light to-sleek-green/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sleek-green mb-6 tracking-tight">
            Our Services
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed specifically for roofing and home improvement contractors.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.slice(0, 4).map((service, index) => (
            <Card key={index} className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green h-full">
              <CardHeader>
                <CardTitle className="text-xl text-sleek-green">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.subtitle}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-sm">
                      <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          
          {/* Fifth service card spanning full width */}
          <Card className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-xl text-sleek-green">{services[4].title}</CardTitle>
              <p className="text-muted-foreground">{services[4].subtitle}</p>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-3 gap-4">
                {services[4].bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start text-sm">
                    <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;