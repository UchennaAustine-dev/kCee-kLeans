"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function QuoteForm() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="bg-secondary p-6 sm:p-8 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get a Quote</h2>
          <form className="space-y-4">
            <div>
              <Input type="text" placeholder="Your Name" className="w-full" />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                className="w-full"
              />
            </div>
            <div>
              <Input type="tel" placeholder="Phone Number" className="w-full" />
            </div>
            <div>
              <Textarea
                placeholder="Tell us about your cleaning needs"
                className="w-full min-h-[100px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </form>
          <div className="flex items-center gap-2 mt-4">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm">100% Satisfaction Guaranteed</span>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[300px] sm:h-[400px]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=500"
            alt="Cleaning professionals"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
