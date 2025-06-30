
import { Beaker, Phone, Mail, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-100 py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl animate-liquid-flow"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-stone-600/20 rounded-full blur-2xl animate-ingredient-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6 animate-cinematic-fade">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center animate-soft-glow">
                <Beaker className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="hero-text text-xl font-medium">Shreejibapa Foods</span>
                <p className="body-text text-xs text-stone-400 -mt-1">Innovation Lab</p>
              </div>
            </div>
            <p className="body-text text-stone-300 leading-relaxed">
              Transforming culinary visions into market realities through scientific excellence and creative innovation in the heart of Pune, Maharashtra.
            </p>
            <div className="flex space-x-4">
              <div className="group w-10 h-10 bg-stone-700 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 rounded-xl flex items-center justify-center premium-hover cursor-pointer">
                <Linkedin className="h-5 w-5 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </div>

          {[
            {
              title: "Our Expertise",
              items: ["Beverage Innovation Lab", "Culinary Formulation", "Recipe Architecture", "Process Mastery", "Quality Excellence", "Regulatory Guidance"]
            },
            {
              title: "Product Artistry", 
              items: ["Premium Beverages", "Artisan Dairy", "Signature Launches", "Healthy Innovations", "Traditional Craft", "Future Flavors"]
            }
          ].map((section, index) => (
            <div key={index} className="space-y-6 animate-cinematic-fade" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
              <h3 className="hero-text text-lg font-medium text-stone-100">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="group flex items-center justify-between text-stone-400 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                    <span className="body-text">{item}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6 animate-cinematic-fade" style={{ animationDelay: '0.6s' }}>
            <h3 className="hero-text text-lg font-medium text-stone-100">Connect With Us</h3>
            <div className="space-y-4">
              <div className="group flex items-start space-x-3 premium-hover cursor-pointer">
                <div className="w-8 h-8 bg-stone-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-stone-300 group-hover:text-white" />
                </div>
                <div>
                  <div className="body-text text-stone-300 group-hover:text-amber-400 transition-colors duration-300">+91 9075078993</div>
                  <div className="body-text text-stone-400 text-sm">+91 7029052441</div>
                </div>
              </div>
              <div className="group flex items-start space-x-3 premium-hover cursor-pointer">
                <div className="w-8 h-8 bg-stone-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-stone-300 group-hover:text-white" />
                </div>
                <span className="body-text text-stone-300 group-hover:text-amber-400 transition-colors duration-300 text-sm">info.shreejibapafoods@gmail.com</span>
              </div>
              <div className="group flex items-start space-x-3 premium-hover cursor-pointer">
                <div className="w-8 h-8 bg-stone-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300 flex-shrink-0 mt-1">
                  <MapPin className="h-4 w-4 text-stone-300 group-hover:text-white" />
                </div>
                <div className="body-text text-stone-300 group-hover:text-amber-400 transition-colors duration-300 text-sm leading-relaxed">
                  511, GRAND CASA, PAWAR NAGAR<br />
                  THERGAON LINK ROAD<br />
                  CHICNHWAD, PUNE- 411033
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center animate-cinematic-fade" style={{ animationDelay: '1s' }}>
          <p className="body-text text-stone-400 text-sm">© 2024 Shreejibapa Foods. All rights reserved.</p>
          <p className="body-text text-stone-500 text-sm mt-2 md:mt-0">Founded by Dr. Rahulkumar Shah • Established September 1, 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
