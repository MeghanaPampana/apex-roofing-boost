import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookAppointmentSection = () => {
  return (
    <section id="book-appointment" className="min-h-[80vh] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #062b00, #128000, #062b00)",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex items-center justify-center min-h-[80vh]">
        {/* <div className="max-w-6xl mx-auto mb-20"> */}
          <Card className="glass-card transition-all duration-500 w-full max-w-4xl" style={{ border: "2px solid white" }}>
            <CardContent className="p-16">
              <div className="space-y-6 text-foreground leading-relaxed text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white tracking-tight">
                  Ready to take your next big step?
                </h2>
                <p className="text-lg">
                  Join us now and start transforming your vision into reality with expert support.
                </p>         
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="px-8 py-3"
                    style={{ border: "2px solid white", color: "white" }}
                  >
                    Book an Appointment
                  </Button>
              </div>
            </CardContent>
          </Card>
        {/* </div> */}
      </div>
    </section>
  );
};

export default BookAppointmentSection;