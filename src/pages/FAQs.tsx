import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQs = () => {
  const faqs = [
    {
      question: "FAQ Question 1?",
      answer: "This is the answer to FAQ question 1. You can edit this content to provide the actual information."
    },
    {
      question: "FAQ Question 2?", 
      answer: "This is the answer to FAQ question 2. You can edit this content to provide the actual information."
    },
    {
      question: "FAQ Question 3?",
      answer: "This is the answer to FAQ question 3. You can edit this content to provide the actual information."
    },
    {
      question: "FAQ Question 4?",
      answer: "This is the answer to FAQ question 4. You can edit this content to provide the actual information."
    },
    {
      question: "FAQ Question 5?",
      answer: "This is the answer to FAQ question 5. You can edit this content to provide the actual information."
    },
    {
      question: "FAQ Question 6?",
      answer: "This is the answer to FAQ question 6. You can edit this content to provide the actual information."
    },
    {
      question: "FAQ Question 7?",
      answer: "This is the answer to FAQ question 7. You can edit this content to provide the actual information."
    },
    {
      question: "FAQ Question 8?",
      answer: "This is the answer to FAQ question 8. You can edit this content to provide the actual information."
    },
    {
      question: "FAQ Question 9?",
      answer: "This is the answer to FAQ question 9. You can edit this content to provide the actual information."
    },
    {
      question: "FAQ Question 10?",
      answer: "This is the answer to FAQ question 10. You can edit this content to provide the actual information."
    },
    {
      question: "FAQ Question 11?",
      answer: "This is the answer to FAQ question 11. You can edit this content to provide the actual information.",
      hasButton: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sleek-charcoal via-sleek-charcoal-light to-sleek-charcoal"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--green-primary))_0%,_transparent_70%)] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sleek-green mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="glass-card border-sleek-charcoal-lighter p-8 rounded-2xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-sleek-charcoal-lighter">
                  <AccordionTrigger className="text-left text-foreground hover:text-sleek-green transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    <p className="mb-4">{faq.answer}</p>
                    {faq.hasButton && (
                      <Button variant="gradient" size="lg" className="mt-4">
                        Book an Appointment
                      </Button>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;