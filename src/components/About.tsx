
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Heart, Zap, Quote } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering product, process, and packaging breakthroughs"
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "Unwavering commitment to quality and precision"
    },
    {
      icon: Zap,
      title: "Heritage",
      description: "18 years of industry mastery with 10 years in product development"
    }
  ];

  const milestones = [
    { year: "2005", event: "Industry Journey Begins", detail: "Dr. Shah enters the food & beverage industry" },
    { year: "2013", event: "Product Development Expertise", detail: "Specializes in beverage innovation and formulation" },
    { year: "2022", event: "Shreejibapa Foods Founded", detail: "Established in the heart of Pune, Maharashtra" },
    { year: "2024", event: "Innovation Continues", detail: "Leading the next generation of food science" }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-stone-50 via-amber-50/20 to-stone-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl animate-liquid-flow"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-stone-300/20 rounded-full blur-2xl animate-ingredient-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-8 animate-cinematic-fade">
              <p className="body-text text-amber-700 font-medium tracking-wider uppercase text-sm">Our Story</p>
              <h2 className="hero-text text-5xl lg:text-6xl font-light text-stone-800">
                Crafted by
                <span className="block font-medium">Passion</span>
              </h2>
              <p className="body-text text-xl text-stone-600 leading-relaxed">
                Born from a vision to revolutionize the food and beverage industry, Shreejibapa Foods stands as a testament to scientific excellence and culinary artistry.
              </p>
            </div>

            {/* Founder Quote */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-cinematic-fade" style={{ animationDelay: '0.3s' }}>
              <Quote className="absolute -top-4 -left-4 h-8 w-8 text-amber-600 bg-white rounded-full p-1" />
              <blockquote className="hero-text text-lg font-light text-stone-700 italic leading-relaxed">
                "Innovation is not just about creating something new—it's about perfecting the harmony between science and taste, tradition and technology."
              </blockquote>
              <div className="mt-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="hero-text text-white font-medium text-lg">Dr</span>
                </div>
                <div>
                  <p className="body-text font-medium text-stone-800">Dr. Rahulkumar Shah</p>
                  <p className="body-text text-sm text-stone-600">Founder & Chief Innovation Officer</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-8 animate-cinematic-fade" style={{ animationDelay: '0.6s' }}>
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="text-center group premium-hover cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 animate-soft-glow">
                    <value.icon className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="hero-text text-lg font-medium text-stone-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">{value.title}</h3>
                  <p className="body-text text-sm text-stone-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-stone-800 hover:bg-stone-900 text-stone-50 premium-hover animate-cinematic-fade animate-soft-glow"
              style={{ animationDelay: '0.9s' }}
            >
              Discover Our Vision
            </Button>
          </div>

          <div className="space-y-12">
            {/* Founder Portrait */}
            <div className="relative animate-cinematic-fade" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 premium-hover">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1577308856961-8e4916b6c0de?w=600&h=800&fit=crop" 
                    alt="Dr. Rahulkumar Shah - Founder" 
                    className="w-full h-full object-cover parallax-element" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-400 to-amber-600 text-white p-6 rounded-2xl animate-soft-glow">
                  <Target className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute top-8 -left-8 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-stone-200/40 rounded-full blur-xl animate-parallax-slow"></div>
            </div>

            {/* Timeline */}
            <div className="space-y-6 animate-cinematic-fade" style={{ animationDelay: '0.5s' }}>
              <h3 className="hero-text text-2xl font-medium text-stone-800 mb-8">Journey of Excellence</h3>
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 group premium-hover">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <span className="hero-text text-sm font-medium text-amber-700">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="body-text font-semibold text-stone-800 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                      {milestone.event}
                    </h4>
                    <p className="body-text text-sm text-stone-600">{milestone.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
