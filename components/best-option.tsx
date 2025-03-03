import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function BestOption() {
  const benefits = [
    "We provide high-quality and reliable cleaning services",
    "Our team consists of experienced and trained professionals",
    "We use eco-friendly cleaning products for your safety",
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            We Are the Best Option
            <br />
            for a Sparkling Home
          </h2>
          <p className="text-gray-600">
            Our professional cleaning services are designed to exceed your
            expectations. We take pride in delivering exceptional results that
            leave your space spotless.
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-primary rounded-full p-1 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>

          <Button variant="default" size="lg" className="rounded-full">
            Book Now
          </Button>
        </div>

        <div className="relative h-[400px]">
          <Image
            src="/clean.avif"
            alt="Cleaning professionals at work"
            fill
            className="object-contain rounded-lg w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
