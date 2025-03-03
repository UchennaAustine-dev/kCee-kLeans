import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "What's included in a standard cleaning service?",
      answer:
        "Our standard cleaning service includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, and general tidying. We focus on high-touch areas and ensure your space is fresh and clean.",
    },
    {
      question: "Are the cleaning supplies included?",
      answer:
        "Yes, we bring all necessary cleaning supplies and equipment. We use eco-friendly products that are safe for your family and pets. If you have specific products you'd like us to use, please let us know.",
    },
    {
      question: "What do you offer after cleaning services?",
      answer:
        "After our cleaning service, we conduct a thorough inspection to ensure everything meets our high standards. We also welcome your feedback and are happy to address any concerns you might have about the service.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Frequently Asked
            <br className="hidden sm:inline" />
            Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-gray-100 p-6 rounded-lg">
            <div className="bg-primary text-white p-4 rounded-lg mb-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Need Help?
              </h3>
              <p className="text-sm mb-4">
                Our customer service team is here to answer any questions
              </p>
              <Button
                variant="default"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <PhoneCall className="h-4 w-4" />
                Call Us Now
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
