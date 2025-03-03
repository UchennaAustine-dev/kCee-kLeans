import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function BlogSection() {
  const articles = [
    {
      title: "The Deep Cleaning and Organizing Guide",
      image: "/deep.jpg",
      category: "Cleaning Tips",
    },
    {
      title: "Eco-Friendly Products for Cleaning",
      image: "/supplies.jpg",
      category: "Products",
    },
    {
      title: "House Cleaning Services Worth Paying For",
      image: "/cl.jpeg",
      category: "Services",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Cleaning Tips From Pros
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-gray-200"
            >
              <div className="relative h-40 sm:h-48">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-primary mb-2">
                  {article.category}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {article.title}
                </h3>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
