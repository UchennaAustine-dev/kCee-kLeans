import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, ShieldCheck, Users } from "lucide-react";

export default function ExperiencedTeam() {
  const stats = [
    {
      title: "Free Quote & Instant Booking",
      icon: <Clock className="h-8 w-8 text-white" />,
      description: "Get a free quote and book instantly online",
    },
    {
      title: "Equipment & Supplies Included",
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      description: "We bring all necessary cleaning supplies",
    },
    {
      title: "100% Satisfaction Guarantee",
      icon: <Users className="h-8 w-8 text-white" />,
      description: "If you're not satisfied, we'll re-clean for free",
    },
    {
      title: "Vetted & Background Checked Cleaners",
      icon: <DollarSign className="h-8 w-8 text-white" />,
      description: "All our cleaners are thoroughly vetted",
    },
  ];

  const metrics = [
    { value: "15+", label: "Years Experience" },
    { value: "10k+", label: "Happy Clients" },
    { value: "500+", label: "Expert Cleaners" },
    { value: "95%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 0L120 80H200L135 130L155 200L100 155L45 200L65 130L0 80H80L100 0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            We Are Experienced &<br />
            We Have Expert Teams
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-white text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
