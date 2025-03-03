"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <header className="bg-white py-4 px-4 md:px-8 lg:px-16 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        {/* Logo with hover animation */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-1 text-xl font-bold">
            <motion.span
              className="text-primary"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              k
            </motion.span>
            <motion.span
              className="text-black"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Cee
            </motion.span>
          </Link>
        </div>

        {/* Desktop Navigation with hover animations */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Services", "About Us", "Contact", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="relative font-medium hover:text-primary"
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact and Button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <PhoneCall className="h-5 w-5 text-primary" />
            <span className="font-medium">+234 704 896 4491</span>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="default" size="lg" className="rounded-full">
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {["Home", "Services", "About Us", "Contact", "Blog"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="font-medium hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="default"
                  size="lg"
                  className="w-full rounded-full"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
