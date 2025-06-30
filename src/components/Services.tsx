
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Beaker, FileCheck, Lightbulb, BarChart3, Shield, Utensils, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Beaker,
      title: "Beverage Application Lab",
      description: "State-of-the-art laboratory facilities where science meets artistry, crafting exceptional beverages with precision and innovation.",
      gradient: "from-blue-50 to-cyan-50",
      iconBg: "from-blue-500 to-cyan-600"
    },
    {
      icon: Utensils,
      title: "Culinary Innovation",
      description: "Expert formulation services that transform concepts into market-ready products, balancing taste, nutrition, and consumer appeal.",
      gradient: "from-emerald-50 to-teal-50",
      iconBg: "from-emerald-500 to-teal-600"
    },
    {
      icon: Lightbulb,
      title: "Recipe Architecture",
      description: "Creative recipe development and menu engineering that optimizes flavor profiles while ensuring scalable production processes.",
      gradient: "from-amber-50 to-orange-50",
      iconBg: "from-amber-500 to-orange-600"
    },
    {
      icon: BarChart3,
      title: "Process Mastery",
      description: "Comprehensive process optimization ensuring efficient production workflows and consistent quality at every scale.",
      gradient: "from-purple-50 to-violet-50",
      iconBg: "from-purple-500 to-violet-600"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Thorough food safety audits and quality systems that exceed industry standards and regulatory requirements.",
      gradient: "from-red-50 to-rose-50",
      iconBg: "from-red-500 to-rose-600"
    },
    {
      icon: FileCheck,
      title: "Regulatory Excellence",
      description: "Expert guidance on compliance, nutritional labeling, and FSSAI guidelines for seamless market entry.",
      gradient: "from-slate-50 to-stone-50",
      iconBg: "from-slate-500 to-stone-600"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-stone-50 to-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-amber-100/30 rounded-full blur-3xl animate-liquid-flow"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-stone-200/40 rounded-full blur-2xl animate-ingredient-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-cinematic-fade">
          <p className="body-text text-amber-700 font-medium tracking-wider uppercase text-sm mb-4">Our Expertise</p>
          <h2 className="hero-text text-5xl lg:text-6xl font-light text-stone-800 mb-8">
            Crafting Excellence
          </h2>
          <p className="body-text text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            Every innovation begins with a vision. Our comprehensive suite of services transforms your culinary dreams into market-ready realities through scientific precision and creative excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group border-0 shadow-lg bg-gradient-to-br ${service.gradient} premium-hover cursor-pointer animate-cinematic-fade overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4 relative">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.iconBg} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 animate-soft-glow`}>
                  <service.icon className="h-10 w-10 text-white transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <CardTitle className="hero-text text-2xl font-medium text-stone-800 group-hover:text-stone-900 transition-colors duration-300 mb-2">
                  {service.title}
                </CardTitle>
                <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-stone-400 group-hover:text-stone-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </CardHeader>
              <CardContent>
                <CardDescription className="body-text text-stone-600 leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              {/* Animated Background Pattern */}
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <service.icon className="w-full h-full text-stone-800 animate-parallax-slow" />
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-cinematic-fade" style={{ animationDelay: '1.5s' }}>
          <p className="body-text text-lg text-stone-600 mb-8">Ready to transform your vision into reality?</p>
          <button className="soft-underline hero-text text-xl text-stone-800 hover:text-amber-700 transition-colors duration-300">
            Let's Begin the Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
