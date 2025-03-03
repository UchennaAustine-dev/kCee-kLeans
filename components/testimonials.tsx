import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Working with CleanGo has been one of the best experiences I've had with a cleaning service. They are thorough, professional, and always on time.",
      author: "Jessica Lloyd",
      pic: "/auth1.png",
      position: "Homeowner",
    },
    {
      content:
        "CleanGo has transformed our office space. Their attention to detail and consistent quality has made a noticeable difference in our workplace environment.",
      author: "Michael Brown",
      pic: "/auth2.png",
      position: "Office Manager",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Empowering Thousands of
            <br />
            Users and Enterprises
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.pic}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button className="p-2 border border-gray-300 rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-2 border border-gray-300 rounded-full">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
