
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Award, Beaker, Droplets } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-liquid-flow"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-stone-300/20 rounded-full blur-3xl animate-liquid-flow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-300/15 rounded-full blur-2xl animate-ingredient-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h1 className="hero-text text-6xl lg:text-7xl font-light text-stone-800 animate-cinematic-fade">
                  Shreejibapa
                  <span className="block text-5xl lg:text-6xl font-medium text-amber-700 animate-reveal-text" style={{ animationDelay: '0.4s' }}>
                    Foods
                  </span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <p className="hero-text text-2xl lg:text-3xl font-light text-stone-600 animate-reveal-text" style={{ animationDelay: '0.8s' }}>
                  From Lab to Launch
                </p>
              </div>

              <div className="overflow-hidden">
                <p className="body-text text-lg text-stone-600 max-w-xl leading-relaxed animate-cinematic-fade" style={{ animationDelay: '1.2s' }}>
                  Where culinary artistry meets scientific precision. We transform visionary concepts into market-ready innovations through our state-of-the-art R&D laboratory in Pune.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-cinematic-fade" style={{ animationDelay: '1.6s' }}>
              <Button 
                size="lg" 
                className="bg-stone-800 hover:bg-stone-900 text-stone-50 px-10 py-6 text-lg premium-hover border-0 animate-soft-glow"
              >
                Begin Your Journey
                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-stone-700 hover:text-stone-900 px-10 py-6 text-lg soft-underline hover:bg-transparent"
              >
                Explore Our Craft
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-12 pt-16">
              {[
                { icon: Beaker, number: "18", text: "Years of Innovation", detail: "Industry Experience" },
                { icon: TrendingUp, number: "10", text: "Product Mastery", detail: "Years in Development" },
                { icon: Award, number: "2022", text: "Legacy Born", detail: "Established" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group animate-cinematic-fade premium-hover cursor-pointer"
                  style={{ animationDelay: `${2 + index * 0.3}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <stat.icon className="h-8 w-8 text-amber-700" />
                    </div>
                  </div>
                  <div className="hero-text text-3xl font-medium text-stone-800 mb-1">{stat.number}</div>
                  <div className="body-text text-sm font-medium text-stone-600 mb-1">{stat.text}</div>
                  <div className="body-text text-xs text-stone-500">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative parallax-container animate-cinematic-fade" style={{ animationDelay: '1s' }}>
            <div className="relative z-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 premium-hover">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop" 
                    alt="Food and Beverages R&D Excellence" 
                    className="w-full h-full object-cover parallax-element" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="hero-text text-white text-xl font-light">Innovation in Every Drop</p>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-400 to-amber-600 text-white p-6 rounded-2xl animate-soft-glow">
                  <Droplets className="h-10 w-10" />
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-16 -left-8 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-stone-200/40 rounded-full blur-xl animate-parallax-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-stone-300/40 to-amber-300/40 rounded-full blur-xl animate-parallax-slow" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-cinematic-fade" style={{ animationDelay: '2.5s' }}>
        <div className="flex flex-col items-center space-y-2">
          <span className="body-text text-xs text-stone-500 tracking-wider uppercase">Discover More</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-stone-400 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
