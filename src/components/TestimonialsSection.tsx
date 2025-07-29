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
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-roofing-blue">
          Testimonials
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Two Images on Left */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-white/80 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <img 
                src={testimonial.workImage} 
                alt="Completed roofing work"
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>

          {/* Video on Right */}
          <div className="flex flex-col">
            <div className="relative rounded-lg overflow-hidden shadow-xl mb-6">
              <img 
                src={heroVideoThumb} 
                alt="Customer testimonial video" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Button size="lg" className="rounded-full p-4 bg-white/90 hover:bg-white text-roofing-blue">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <Card className="bg-roofing-light-gray border-0">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-roofing-gray mb-4">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <cite className="font-semibold text-roofing-blue">
                  - {testimonial.name}, {testimonial.location}
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;