import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, FileText } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-16 bg-roofing-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-roofing-blue">
          Our Honest Disclaimer
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg bg-background">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-roofing-blue mx-auto mb-4" />
              <CardTitle className="text-xl text-roofing-blue">
                Quality Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                [Content to be edited - Quality assurance and warranty information will be added here]
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-background">
            <CardHeader className="text-center">
              <AlertTriangle className="h-12 w-12 text-warning mx-auto mb-4" />
              <CardTitle className="text-xl text-roofing-blue">
                Important Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                [Content to be edited - Important terms and conditions will be detailed here]
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-background">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-roofing-blue mx-auto mb-4" />
              <CardTitle className="text-xl text-roofing-blue">
                Legal Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
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