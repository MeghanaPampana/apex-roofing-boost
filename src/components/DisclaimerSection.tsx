import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, FileText } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Green to black gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sleek-charcoal via-sleek-green/10 to-sleek-charcoal"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sleek-green tracking-tight">
          Our Honest Disclaimer
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green">
            <CardHeader className="text-center p-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-sleek-green to-sleek-green-dark glow-green mx-auto w-fit mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-xl text-sleek-green font-bold">
                Quality Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-muted-foreground text-center leading-relaxed">
                [Content to be edited - Quality assurance and warranty information will be added here]
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-sleek-charcoal-lighter hover:border-warning/50 transition-all duration-500 hover:shadow-lg hover:shadow-warning/20">
            <CardHeader className="text-center p-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-warning to-orange-600 shadow-lg shadow-warning/30 mx-auto w-fit mb-6">
                <AlertTriangle className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-xl text-sleek-green font-bold">
                Important Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-muted-foreground text-center leading-relaxed">
                [Content to be edited - Important terms and conditions will be detailed here]
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-sleek-charcoal-lighter hover:border-sleek-green/50 transition-all duration-500 hover:glow-green">
            <CardHeader className="text-center p-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-sleek-green to-sleek-green-dark glow-green mx-auto w-fit mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-xl text-sleek-green font-bold">
                Legal Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-muted-foreground text-center leading-relaxed">
                [Content to be edited - Legal disclaimers and liability information will go here]
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;