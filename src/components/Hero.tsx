
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
                Shreejibapa Foods
                <span className="text-orange-600 block animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                  Food & Beverages R&D Lab
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                A well-established and reputed consultancy firm based in Pune, India. We support Product, Process and Packaging Innovation with expertise in food and beverages development.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { icon: Users, number: "20+", text: "Happy Clients" },
                { icon: TrendingUp, number: "18", text: "Years Experience" },
                { icon: Award, number: "2022", text: "Established" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center animate-scale-in hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${1.2 + index * 0.2}s` }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" 
                alt="Food and Beverages R&D Lab" 
                className="w-full h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute -top-4 -right-4 bg-orange-600 text-white p-4 rounded-full animate-pulse hover:animate-none hover:scale-110 transition-all duration-300">
                <Award className="h-8 w-8" />
              </div>
            </div>
            <div className="absolute top-8 left-8 w-full h-full bg-orange-200 rounded-2xl -z-10 animate-slide-in-right" style={{ animationDelay: '0.8s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
