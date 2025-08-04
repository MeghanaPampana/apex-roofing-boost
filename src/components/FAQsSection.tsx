import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQsSection = () => {
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
    <section id="faqs" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sleek-charcoal-light via-sleek-charcoal to-sleek-green/20"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sleek-green mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our services and process.
          </p>
        </div>

        <Accordion type="single" collapsible className="glass-card p-6 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-sleek-charcoal-lighter last:border-b-0"
            >
              <AccordionTrigger className="text-left hover:text-sleek-green transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
                {faq.hasButton && (
                  <div className="mt-4">
                    <Button variant="gradient" size="lg">
                      Book an Appointment
                    </Button>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQsSection;