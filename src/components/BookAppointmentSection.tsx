import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookAppointmentSection = () => {
  return (
    <section id="book-appointment" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sleek-green/10 via-sleek-charcoal to-sleek-charcoal-light"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Hero Section
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sleek-green to-sleek-green-dark bg-clip-text text-transparent">
            Ready to take your next big step?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us now and start transforming your vision into reality with expert support.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-sleek-green to-sleek-green-dark hover:from-sleek-green-dark hover:to-sleek-green transition-all duration-300 glow-green"
          >
            Book My Free Strategy Call
          </Button>
        </div> */}

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to take your next big step?</h3>
              <p className="text-muted-foreground mb-6">
                Join us now and start transforming your vision into reality with expert support.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sleek-green to-sleek-green-dark hover:from-sleek-green-dark hover:to-sleek-green transition-all duration-300 glow-green"
              >
                Book an Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentSection;