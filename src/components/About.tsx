
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Heart, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Data-driven solutions with meticulous attention to detail"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuine love for food and helping businesses succeed"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge approaches to traditional food challenges"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                About Shreejibapa Foods
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience in the food industry, Shreejibapa Foods has been at the forefront of food consultancy, helping businesses transform their operations and achieve remarkable success.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Industry Expertise:</span> Deep knowledge across all food sectors from restaurants to manufacturing
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Proven Results:</span> 50+ successful projects with measurable business growth
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Certified Team:</span> Food scientists, business strategists, and industry specialists
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1577308856961-8e4916b6c0de?w=300&h=400&fit=crop" 
                alt="Food consultation meeting" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop" 
                alt="Food quality testing" 
                className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=300&fit=crop" 
                alt="Restaurant kitchen consultation" 
                className="w-full h-48 object-cover rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1556909015-f7c3c73875de?w=300&h=400&fit=crop" 
                alt="Food business strategy" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
