import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import roofingWork1 from "@/assets/roofing-work-1.jpg";
import roofingWork2 from "@/assets/roofing-work-2.jpg";
import heroVideoThumb from "@/assets/hero-video-thumb.jpg";

const TestimonialsGrid = () => {
  const [showMore, setShowMore] = useState(false);

  const mainItems = [
    { type: "image", src: testimonial1, alt: "Customer testimonial" },
    { type: "image", src: roofingWork1, alt: "Completed roofing work" },
    { type: "video", src: heroVideoThumb, alt: "Video testimonial" },
    { type: "image", src: testimonial2, alt: "Customer testimonial" },
    { type: "image", src: roofingWork2, alt: "Completed roofing work" },
    { type: "video", src: heroVideoThumb, alt: "Video testimonial" },
    { type: "image", src: roofingWork1, alt: "Before/after work" },
    { type: "image", src: testimonial1, alt: "Happy customer" },
    { type: "video", src: heroVideoThumb, alt: "Customer review video" }
  ];

  const additionalItems = [
    { type: "image", src: roofingWork2, alt: "Quality roofing work" },
    { type: "image", src: testimonial2, alt: "Satisfied customer" },
    { type: "video", src: heroVideoThumb, alt: "Success story video" },
    { type: "image", src: roofingWork1, alt: "Professional installation" },
    { type: "image", src: testimonial1, alt: "Customer review" },
    { type: "video", src: heroVideoThumb, alt: "Testimonial video" }
  ];

  const renderItem = (item: any, index: number) => (
    <Card key={index} className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green overflow-hidden group">
      <div className="relative aspect-square">
        <img 
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.type === "video" && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" variant="gradient" className="rounded-full p-4">
                <Play className="h-6 w-6" />
              </Button>
            </div>
          </>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-sleek-green text-sleek-green" />
            ))}
          </div>
          <p className="text-white text-xs font-medium">Verified Review</p>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-sleek-charcoal via-sleek-charcoal-light to-sleek-charcoal"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--green-primary))_0%,_transparent_70%)] opacity-10"></div> */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, hsl(var(--green-primary)) 0%, transparent 20%),
            radial-gradient(circle at 100% 50%, hsl(var(--green-primary)) 0%, transparent 20%),
            radial-gradient(circle at 0% 100%, hsl(var(--green-primary)) 0%, transparent 20%)
          `,
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-16 text-white tracking-tight">
          Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mainItems.map((item, index) => renderItem(item, index))}
        </div>

        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {additionalItems.map((item, index) => renderItem(item, index + mainItems.length))}
          </div>
        )}

        <div className="text-center">
          <Button 
            variant="gradient" 
            size="lg" 
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3"
          >
            {showMore ? "Show Less" : "See More"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;