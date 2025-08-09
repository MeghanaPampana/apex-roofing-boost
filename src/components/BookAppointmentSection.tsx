import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookAppointmentSection = () => {
  return (
    <section id="book-appointment" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sleek-green/10 via-sleek-charcoal to-sleek-charcoal-light"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white tracking-tight">
          Ready to take your next big step?
        </h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green">
            <CardContent className="p-8">
              <div className="space-y-6 text-foreground leading-relaxed text-center">
                <p className="text-lg">
                  Join us now and start transforming your vision into reality with expert support.
                </p>
                <p className="text-lg">
                  We're here to help you turn your slow days into booked weeks with qualified leads and appointments that actually show up.
                </p>
                <p className="text-lg">
                  Don't let another opportunity slip by. Your competition is already booking their calendars full—it's time to join them.
                </p>
                <p className="text-white font-bold text-lg">
                  Let's get started today! &emsp;              
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="px-8 py-3"
                  >
                    Book My Free Strategy Call
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentSection;