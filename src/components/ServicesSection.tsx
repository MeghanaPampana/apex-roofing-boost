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
      {/* <div className="absolute inset-0 bg-gradient-to-br from-sleek-charcoal via-sleek-charcoal-light to-sleek-green/10"></div> */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(18,128,0,0.4) 0%, transparent 20%),
            radial-gradient(circle at 100% 100%, rgba(18,128,0,0.4) 0%, transparent 20%),
            #0a0a0a
          `
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Services
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed specifically for roofing and home improvement contractors.
          </p> */}
        </div>

        {/* First row - 2 cards centered */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {services.slice(0, 2).map((service, index) => (
              <Card key={index} className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
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
          </div>
        </div>

        {/* Second row - 2 cards centered */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {services.slice(2, 4).map((service, index) => (
              <Card key={index + 2} className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
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
          </div>
        </div>

        {/* Third row - 1 card centered */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-md">
            <Card className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white">{services[4].title}</CardTitle>
                <p className="text-muted-foreground">{services[4].subtitle}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
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
      </div>
    </section>
  );
};

export default ServicesSection;