
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Beaker, FileCheck, Lightbulb, BarChart3, Shield, Utensils } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Beaker,
      title: "Beverage Application Lab",
      description: "State-of-the-art laboratory facilities for beverage development and testing with advanced equipment and quality control systems."
    },
    {
      icon: Utensils,
      title: "Food & Beverages Formulation",
      description: "Expert formulation services for creating innovative food and beverage products that meet market demands and quality standards."
    },
    {
      icon: Lightbulb,
      title: "Recipes and Menu Development",
      description: "Creative recipe development and menu engineering services to help restaurants and food businesses optimize their offerings."
    },
    {
      icon: BarChart3,
      title: "Process Development",
      description: "Comprehensive process optimization and development services to ensure efficient production and consistent quality."
    },
    {
      icon: Shield,
      title: "Food Safety and Quality Audits",
      description: "Thorough food safety audits and quality assurance services to ensure compliance with industry standards and regulations."
    },
    {
      icon: FileCheck,
      title: "Technical Regulatory Support",
      description: "Expert guidance on regulatory compliance, nutritional panel designing as per FSSAI guidelines for packed products."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We Are Offering
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive food and beverage consultancy solutions with specialized focus on product, process and packaging innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-4 bg-gradient-to-br from-white to-orange-50 group animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-700 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
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
