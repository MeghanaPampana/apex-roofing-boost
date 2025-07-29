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
    <section className="py-16 bg-gradient-to-br from-roofing-blue to-roofing-blue-dark text-white">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl text-roofing-blue mb-4">
              Write to us
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Mail className="h-12 w-12 text-roofing-blue mb-4" />
                <h3 className="font-semibold text-roofing-blue mb-2">Support Email</h3>
                <p className="text-muted-foreground">support@roofingpro.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-roofing-blue mb-4" />
                <h3 className="font-semibold text-roofing-blue mb-2">24/7 Seamless Support</h3>
                <p className="text-muted-foreground">Always here when you need us</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-roofing-blue mb-4" />
                <h3 className="font-semibold text-roofing-blue mb-2">Secure and Safe</h3>
                <p className="text-muted-foreground">Your data is protected</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToForm}
                className="px-8 py-3"
              >
                <Phone className="mr-2 h-5 w-5" />
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