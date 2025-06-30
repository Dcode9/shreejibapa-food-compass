
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Microscope, ChefHat, ShieldCheck, Sparkles, Beaker } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: FlaskConical,
      title: "Process Development",
      description: "From concept to production-ready formulations with precision scaling",
      details: ["Recipe standardization", "Production optimization", "Quality protocols", "Shelf-life testing"]
    },
    {
      icon: Microscope,
      title: "Laboratory Analysis",
      description: "Comprehensive testing and validation for safety and quality assurance",
      details: ["Nutritional analysis", "Microbiological testing", "Sensory evaluation", "Stability testing"]
    },
    {
      icon: ChefHat,
      title: "Culinary Innovation",
      description: "Artisanal techniques merged with scientific precision",
      details: ["Flavor profiling", "Texture optimization", "Ingredient sourcing", "Trend research"]
    },
    {
      icon: ShieldCheck,
      title: "Food Safety & Compliance",
      description: "Regulatory expertise ensuring market-ready products",
      details: ["FSSAI compliance", "HACCP implementation", "Documentation", "Audit preparation"]
    },
    {
      icon: Sparkles,
      title: "Product Launch Strategy",
      description: "End-to-end support from lab bench to market shelf",
      details: ["Market research", "Packaging design", "Launch planning", "Scale-up support"]
    },
    {
      icon: Beaker,
      title: "Custom Formulations",
      description: "Bespoke solutions tailored to your brand vision",
      details: ["Unique recipes", "Nutritional enhancement", "Cost optimization", "Prototype development"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-stone-50 to-amber-50/20">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto text-center animate-cinematic-fade">
            <p className="body-text text-amber-700 font-medium tracking-wider uppercase text-sm mb-4">Our Expertise</p>
            <h1 className="hero-text text-6xl lg:text-7xl font-light text-stone-800 mb-8">
              Scientific Excellence
            </h1>
            <p className="body-text text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              Where culinary artistry meets laboratory precision. Our multidisciplinary approach transforms innovative concepts into market-ready masterpieces.
            </p>
          </div>
        </section>

        {/* Expertise Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {expertiseAreas.map((area, index) => (
                <Card 
                  key={area.title}
                  className="group border-0 shadow-xl bg-white/80 backdrop-blur-sm premium-hover animate-cinematic-fade overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="relative pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-stone-600 rounded-2xl flex items-center justify-center mb-6 animate-soft-glow">
                      <area.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="hero-text text-2xl font-medium text-stone-800 mb-4">
                      {area.title}
                    </CardTitle>
                    <p className="body-text text-stone-600 leading-relaxed">
                      {area.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start group/item">
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-stone-600 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                          <span className="body-text text-stone-700 group-hover/item:text-stone-900 transition-colors duration-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center animate-cinematic-fade">
            <h2 className="hero-text text-4xl font-light text-stone-800 mb-16">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your vision" },
                { step: "02", title: "Development", desc: "Laboratory experimentation" },
                { step: "03", title: "Testing", desc: "Quality validation" },
                { step: "04", title: "Launch", desc: "Market deployment" }
              ].map((item, index) => (
                <div 
                  key={item.step}
                  className="animate-cinematic-fade premium-hover"
                  style={{ animationDelay: `${1 + index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-stone-300 rounded-full flex items-center justify-center mx-auto mb-4 animate-ingredient-float">
                    <span className="hero-text text-2xl font-light text-stone-800">{item.step}</span>
                  </div>
                  <h3 className="hero-text text-xl text-stone-800 mb-2">{item.title}</h3>
                  <p className="body-text text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Expertise;
