
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const OurStory = () => {
  const milestones = [
    { year: "2018", title: "Foundation", description: "Started with a vision to bridge culinary art and food science" },
    { year: "2019", title: "First Lab", description: "Established our state-of-the-art R&D laboratory in Pune" },
    { year: "2020", title: "Innovation", description: "Developed proprietary formulations for health beverages" },
    { year: "2022", title: "Expansion", description: "Extended services to dairy product development" },
    { year: "2024", title: "Recognition", description: "Awarded for excellence in food innovation and safety" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-stone-50 to-amber-50/20">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto text-center animate-cinematic-fade">
            <p className="body-text text-amber-700 font-medium tracking-wider uppercase text-sm mb-4">Our Journey</p>
            <h1 className="hero-text text-6xl lg:text-7xl font-light text-stone-800 mb-8">
              Our Story
            </h1>
            <p className="body-text text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              From a small laboratory to a trusted partner in food innovation—discover the passion and precision that drives our mission to transform culinary visions into market realities.
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="px-6 mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-cinematic-fade">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop" 
                    alt="Founder in laboratory"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl premium-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="animate-cinematic-fade" style={{ animationDelay: '0.3s' }}>
                <h2 className="hero-text text-4xl font-light text-stone-800 mb-8">
                  Where Science Meets Artistry
                </h2>
                <div className="space-y-6 body-text text-stone-600 leading-relaxed">
                  <p>
                    "Food is not just sustenance—it's emotion, memory, and experience crafted into every sip and bite. At Shreejibapa Foods, we believe that the perfect product emerges when traditional culinary wisdom meets modern scientific precision."
                  </p>
                  <p>
                    Our journey began with a simple observation: the food industry needed partners who could understand both the soul of a recipe and the science behind its success. Today, we've transformed countless culinary dreams into market-ready products that don't just satisfy—they inspire.
                  </p>
                  <p>
                    Every formulation that leaves our laboratory carries our commitment to excellence, innovation, and the unwavering belief that great food products can change how people experience flavor, nutrition, and joy.
                  </p>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl">
                  <p className="hero-text text-lg text-stone-800 font-light italic">
                    "From the first spark of an idea to the moment it reaches consumers—we're with you every step of the way."
                  </p>
                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <p className="body-text text-sm text-stone-600 font-medium">Founder & Chief Innovation Officer</p>
                    <p className="body-text text-sm text-stone-500">Shreejibapa Foods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 mb-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-cinematic-fade">
              <h2 className="hero-text text-4xl font-light text-stone-800 mb-8">Our Journey</h2>
              <p className="body-text text-lg text-stone-600">Milestones that shaped our vision</p>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300 via-stone-300 to-amber-300"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className="relative animate-cinematic-fade"
                    style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                  >
                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-amber-400 to-stone-500 rounded-full shadow-lg animate-soft-glow"></div>
                    <div className="ml-20">
                      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm premium-hover">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="hero-text text-2xl font-light text-stone-800">{milestone.year}</span>
                            <h3 className="hero-text text-xl text-stone-800">{milestone.title}</h3>
                          </div>
                          <p className="body-text text-stone-600 leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-cinematic-fade">
              <h2 className="hero-text text-4xl font-light text-stone-800 mb-8">Our Values</h2>
              <p className="body-text text-lg text-stone-600">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Scientific Rigor",
                  description: "Every formulation undergoes rigorous testing and validation to ensure consistent quality and safety standards.",
                  icon: "🔬"
                },
                {
                  title: "Creative Innovation",
                  description: "We push the boundaries of flavor, texture, and nutrition to create products that surprise and delight.",
                  icon: "✨"
                },
                {
                  title: "Partnership Excellence",
                  description: "Your success is our success. We collaborate closely to bring your vision to life with precision and care.",
                  icon: "🤝"
                }
              ].map((value, index) => (
                <Card 
                  key={value.title}
                  className="border-0 shadow-xl bg-white/90 backdrop-blur-sm premium-hover animate-cinematic-fade text-center"
                  style={{ animationDelay: `${1 + index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="text-4xl mb-6 animate-ingredient-float">{value.icon}</div>
                    <h3 className="hero-text text-xl text-stone-800 mb-4">{value.title}</h3>
                    <p className="body-text text-stone-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
