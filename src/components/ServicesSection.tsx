import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Service 1",
      subtitle: "Subtitle for service 1",
      bullets: [
        "Bullet point 1",
        "Bullet point 2", 
        "Bullet point 3"
      ]
    },
    {
      title: "Service 2", 
      subtitle: "Subtitle for service 2",
      bullets: [
        "Bullet point 1",
        "Bullet point 2",
        "Bullet point 3"
      ]
    },
    {
      title: "Service 3",
      subtitle: "Subtitle for service 3", 
      bullets: [
        "Bullet point 1",
        "Bullet point 2",
        "Bullet point 3"
      ]
    },
    {
      title: "Service 4",
      subtitle: "Subtitle for service 4",
      bullets: [
        "Bullet point 1", 
        "Bullet point 2",
        "Bullet point 3"
      ]
    },
    {
      title: "Service 5",
      subtitle: "Subtitle for service 5",
      bullets: [
        "Bullet point 1",
        "Bullet point 2",
        "Bullet point 3"
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed specifically for roofing and home improvement contractors.
          </p>
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