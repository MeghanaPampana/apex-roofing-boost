import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQsSection = () => {
  const faqs = [
    {
      question: "How do you generate leads for roofing contractors?",
      answer: "We use a combination of Facebook/Instagram ads, Google Search ads, and proven landing pages to generate leads from homeowners actively looking for roofing services. Every lead is exclusive to your business and targeted by your service area."
    },
    {
      question: "Are the leads exclusive to my company?", 
      answer: "Yes — 100%. We do not share leads with other contractors. When you partner with us, the leads we generate are yours only, and we limit our services to one contractor per area to ensure exclusivity."
    },
    {
      question: "Do you also book appointments, or just send leads?",
      answer: "We offer both options. Our Done-for-You Appointment Setting service follows up with leads via calls, texts, and emails, and books them directly on your calendar. You can choose to handle follow-ups yourself or let our team do it for you."
    },
    {
      question: "What type of leads will I get?",
      answer: `
        You'll receive qualified homeowner leads looking for:
           • Roof repairs or replacements
           • Storm damage restoration 
           • New roof installations 
           • Gutter and siding services 
           • Other home improvement projects 
        We screen for location, contact info, and service interest.
      `
    },
    {
      question: "How quickly will I start getting leads?",
      answer: "Most campaigns go live within 2–3 business weeks. You can expect leads to start coming in within the first week after launch, depending on your market and budget."
    },
    {
      question: "What's the minimum ad budget required?",
      answer: "We typically recommend a minimum ad spend of $50/day to get consistent results. We'll guide you on the most efficient spend based on your location and competition."
    },
    {
      question: "Do I need a website to work with you?",
      answer: "Not necessarily. We can build custom landing pages that convert better than most websites. However, if you have a site, we’ll optimize it for lead capture and search engine visibility."
    },
    {
      question: "Which areas do you serve?",
      answer: "We work only with contractors in the USA, and we serve clients across all 50 states. We ensure exclusive partnerships by working with only one contractor per zip code or territory."
    },
    {
      question: "Can I see some results or case studies?",
      answer: "Absolutely. On our discovery call, we’ll walk you through real examples of campaigns we’ve run for roofing and home improvement contractors — including lead volume, cost per lead, and booked job rates."
    },
    {
      question: "Is there a contract?",
      answer: "We offer flexible plans with no long-term contracts required. Most of our partners stay with us because they see results — not because they're locked in."
    },
    {
      question: "How do I get started?",
      answer: "Simple. Just book a free strategy call with our team. We’ll audit your market, explain our system, and give you a custom growth plan — no pressure, no BS.",
      hasButton: true
    }
  ];

  return (
    <section id="faqs" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sleek-charcoal-light via-sleek-charcoal to-sleek-green/20"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            FAQs
          </h2>
          {/* <p className="text-xl text-muted-foreground">
            Get answers to common questions about our services and process.
          </p> */}
        </div>

        <Accordion type="single" collapsible className="glass-card p-6 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-sleek-charcoal-lighter last:border-b-0"
            >
              <AccordionTrigger className="text-left hover:text-white transition-colors">
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