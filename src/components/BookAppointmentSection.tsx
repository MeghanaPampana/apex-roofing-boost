import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookAppointmentSection = () => {
  return (
    <section id="book-appointment" className="min-h-[80vh] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, #128000 0%, #000000 100%)",
        }}
      ></div>
      <div className="max-w-5xl mx-auto px-4 relative z-10 flex items-center justify-center min-h-[80vh]">      
          <Card className=" transition-all duration-500 w-full max-w-8xl min-h-[500px] flex items-end justify-center" style={{ border: "1px solid white" }}>
            <CardContent className="p-16">
              <div className="space-y-8 text-foreground leading-relaxed text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-13 text-white tracking-tight">
                  Ready to take your next big step?
                </h2>
                <p className="text-lg">
                  Join us now and start transforming your vision into reality with expert support.
                </p>         
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="px-16 py-7"
                    style={{ border: "1px solid white", color: "white" }}
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