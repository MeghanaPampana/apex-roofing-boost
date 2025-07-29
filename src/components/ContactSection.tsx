import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Clock, Phone } from "lucide-react";

const ContactSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Green to black gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-sleek-charcoal via-sleek-green/20 to-sleek-charcoal"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--green-primary))_0%,_transparent_60%)] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Card className="glass-form border-sleek-green/30 hover:border-sleek-green/60 transition-all duration-500 hover:glow-green">
          <CardHeader className="text-center p-8">
            <CardTitle className="text-3xl md:text-4xl text-sleek-green mb-4 font-bold tracking-tight">
              Write to us
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center group">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-sleek-green to-sleek-green-dark glow-green mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-sleek-green mb-2 text-lg">Support Email</h3>
                <p className="text-muted-foreground">support@roofingpro.com</p>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-sleek-green to-sleek-green-dark glow-green mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-sleek-green mb-2 text-lg">24/7 Seamless Support</h3>
                <p className="text-muted-foreground">Always here when you need us</p>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-sleek-green to-sleek-green-dark glow-green mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-sleek-green mb-2 text-lg">Secure and Safe</h3>
                <p className="text-muted-foreground">Your data is protected</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <Button 
                variant="gradient" 
                size="lg" 
                onClick={scrollToForm}
                className="px-12 py-4 text-lg font-semibold"
              >
                <Phone className="mr-3 h-6 w-6" />
                Schedule a Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;