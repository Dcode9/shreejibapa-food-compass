
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Heart, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Product, Process and Packaging Innovation expertise"
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Commitment to excellence in food and beverage development"
    },
    {
      icon: Zap,
      title: "Experience",
      description: "18 years of industry experience with 10 years in product development"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 animate-fade-in">About Shreejibapa Foods</h2>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Shreejibapa Foods (SBF) is a well-established and reputed consultancy firm based in Pune, India. Founded by Dr. Rahulkumar Shah, our company was established on 1st September 2022 in the central smart city of India, Pune, Maharashtra.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Founder: Dr. Rahulkumar Shah with 18 years of industry experience",
                "Specialization: 10 years of hands-on product development experience in beverages", 
                "Location: Based in Pune, Maharashtra - Central Smart City of India"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 animate-slide-in-right hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <CheckCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">{item.split(':')[0]}:</span> {item.split(':')[1]}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="text-center animate-scale-in hover:scale-110 transition-all duration-300 group"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-700 transition-all duration-300 group-hover:rotate-12">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: '1.2s' }}
            >
              Learn More About Us
            </Button>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "https://images.unsplash.com/photo-1577308856961-8e4916b6c0de?w=300&h=400&fit=crop", alt: "Food and beverage consultation", class: "w-full h-64" },
                { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", alt: "R&D Laboratory", class: "w-full h-48 mt-8" },
                { src: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=300&fit=crop", alt: "Product development", class: "w-full h-48 -mt-8" },
                { src: "https://images.unsplash.com/photo-1556909015-f7c3c73875de?w=300&h=400&fit=crop", alt: "Quality testing", class: "w-full h-64" }
              ].map((img, index) => (
                <img 
                  key={index}
                  src={img.src} 
                  alt={img.alt} 
                  className={`${img.class} object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
