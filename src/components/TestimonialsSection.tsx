import { Card, CardContent } from "@/components/ui/card";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import roofingWork1 from "@/assets/roofing-work-1.jpg";
import roofingWork2 from "@/assets/roofing-work-2.jpg";
import heroVideoThumb from "@/assets/hero-video-thumb.jpg";
import { Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestimonialsSectionProps {
  pageNumber: number;
}

const TestimonialsSection = ({ pageNumber }: TestimonialsSectionProps) => {
  const getTestimonialData = (page: number) => {
    const testimonials = [
      {
        image: testimonial1,
        workImage: roofingWork1,
        name: "Sarah & Mike Johnson",
        location: "Denver, CO",
        text: "Outstanding service from start to finish! They exceeded our expectations and delivered a beautiful roof that has stood up to everything Colorado weather can throw at it.",
        rating: 5
      },
      {
        image: testimonial2,
        workImage: roofingWork2,
        name: "Robert Chen",
        location: "Austin, TX", 
        text: "Professional, reliable, and affordable. The team was incredible to work with and the quality of work speaks for itself. Highly recommend!",
        rating: 5
      },
      {
        image: testimonial1,
        workImage: roofingWork1,
        name: "Lisa Martinez",
        location: "Phoenix, AZ",
        text: "From initial consultation to project completion, everything was handled with utmost professionalism. Our new roof looks amazing!",
        rating: 5
      }
    ];
    
    return testimonials[page - 2] || testimonials[0];
  };

  const testimonial = getTestimonialData(pageNumber);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Green to black gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sleek-charcoal via-sleek-charcoal-light to-sleek-charcoal"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--green-primary))_0%,_transparent_70%)] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sleek-green tracking-tight">
          Testimonials
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Two Images on Left */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <Card className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green overflow-hidden">
              <div className="relative">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-sleek-green text-sleek-green" />
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sleek-green text-sm font-medium">{testimonial.location}</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green overflow-hidden">
              <img 
                src={testimonial.workImage} 
                alt="Completed roofing work"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </Card>
          </div>

          {/* Video and Quote on Right */}
          <div className="flex flex-col">
            <div className="relative rounded-2xl overflow-hidden glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green mb-6">
              <img 
                src={heroVideoThumb} 
                alt="Customer testimonial video" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" variant="gradient" className="rounded-full p-4">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <Card className="glass-card border-sleek-green/30 hover:glow-green transition-all duration-500">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sleek-green text-sleek-green" />
                  ))}
                </div>
                <cite className="font-bold text-sleek-green text-lg">
                  - {testimonial.name}
                </cite>
                <p className="text-muted-foreground text-sm mt-1">{testimonial.location}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;