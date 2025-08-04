import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sleek-green to-sleek-green-dark bg-clip-text text-transparent">
              Ready to Book an Appointment?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards transforming your roofing business. Schedule your free strategy call today and discover how we can help you grow.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-sleek-green">Free Strategy Call</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Analyze your current marketing efforts
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Identify growth opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Create a custom digital strategy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    No commitment required
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-sleek-green">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    30-minute consultation call
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Personalized recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Industry insights and trends
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sleek-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Clear next steps for growth
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="glass-card max-w-2xl mx-auto">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-semibold mb-4">Schedule Your Free Call</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to take your roofing business to the next level? Book your complimentary strategy session now.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-sleek-green to-sleek-green-dark hover:from-sleek-green-dark hover:to-sleek-green transition-all duration-300 glow-green"
                >
                  Book My Free Strategy Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookAppointment;