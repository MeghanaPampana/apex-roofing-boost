import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sleek-charcoal via-sleek-charcoal-light to-sleek-charcoal"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--green-primary))_0%,_transparent_70%)] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sleek-green mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.slice(0, 4).map((service, index) => (
              <Card key={index} className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-sleek-green">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-center text-foreground">
                        <div className="w-2 h-2 bg-sleek-green rounded-full mr-4"></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mb-16">
            <Card className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-sleek-green">
                  {services[4].title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {services[4].subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {services[4].bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-sleek-green rounded-full mr-4"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Ready to Book Section */}
          <Card className="glass-form border-sleek-green/30 hover:border-sleek-green/60 transition-all duration-500 hover:glow-green">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-sleek-green mb-6">
                Ready to Book an Appointment?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can help grow your business with qualified leads
              </p>
              <Button variant="gradient" size="lg" className="px-8 py-3">
                Book an Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;