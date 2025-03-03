"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Home Cleaning",
      image: "/home.jpg",
      description: "Regular cleaning services for your home",
    },
    {
      title: "Office Cleaning",
      image: "/image3.jpg",
      description: "Professional cleaning for office spaces",
    },
    {
      title: "Deep Cleaning",
      image: "/image2.jpg",
      description: "Thorough cleaning for those special occasions",
    },
    {
      title: "Move In/Out Cleaning",
      image: "/image4.jpg",
      description: "Specialized cleaning for moving transitions",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="container-custom">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Here&apos;s What We Can
            <br className="hidden sm:inline" />
            Do For You
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
