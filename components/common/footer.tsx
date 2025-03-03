import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 sm:pt-16 pb-8 px-4 md:px-8 lg:px-16 border-t">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">
              Our Goal is to Wow You With Every Clean
            </h3>
            <p className="text-gray-600 mb-4">
              Professional cleaning services for residential and commercial
              spaces. We provide high-quality cleaning with eco-friendly
              products.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Move In/Out
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Post Construction
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for tips and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-100 border-0 w-full"
              />
              <Button variant="default" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 sm:mb-0">
            © {new Date().getFullYear()} kCee. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-gray-600 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
