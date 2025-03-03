"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  console.log("Background Image URL:", "url('/hero.jpg')");

  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-16 sm:py-24 md:py-32 px-4 sm:px-8 lg:px-16"
      style={{
        backgroundImage: "url('/hero.jpg')",
        // backgroundColor: "blue",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-2xl space-y-4 sm:space-y-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Sparkly Residential and Commercial Cleaning Services
          </h1>
          <p className="text-base sm:text-lg">
            Professional cleaning services tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              className="rounded-full w-full sm:w-auto"
            >
              Book Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-black"
            >
              Learn More
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm">Professional</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-primary rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm">Affordable</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-primary rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm">Reliable</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
