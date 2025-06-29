
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, BarChart3, Users, Lightbulb, FileCheck, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Recipe Development",
      description: "Create innovative recipes that align with your brand and market demands while ensuring scalability and cost-effectiveness."
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Comprehensive market research and analysis to identify opportunities and position your products for maximum success."
    },
    {
      icon: Users,
      title: "Menu Engineering",
      description: "Optimize your menu for profitability, customer satisfaction, and operational efficiency with data-driven insights."
    },
    {
      icon: Lightbulb,
      title: "Product Innovation",
      description: "Develop new food products that meet consumer trends and regulatory requirements while maintaining quality standards."
    },
    {
      icon: FileCheck,
      title: "Quality Assurance",
      description: "Implement robust quality control systems to ensure consistent product quality and regulatory compliance."
    },
    {
      icon: TrendingUp,
      title: "Business Strategy",
      description: "Strategic planning and business development services to scale your food business and increase profitability."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive food consultancy solutions designed to help your business grow, innovate, and succeed in today's competitive market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
