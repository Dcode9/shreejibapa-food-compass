
import { Beaker, Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors duration-300">
                <Beaker className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Shreejibapa Foods</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Food & Beverages R&D Lab - Your trusted partner in product, process and packaging innovation. Established in Pune, Maharashtra.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-all duration-300 cursor-pointer hover:scale-110">
                <Linkedin className="h-4 w-4" />
              </div>
            </div>
          </div>

          {[
            {
              title: "Our Services",
              items: ["Beverage Application Lab", "Food & Beverages Formulation", "Recipes and Menu Development", "Process Development", "Food Safety and Quality Audits", "Technical Regulatory Support"]
            },
            {
              title: "Product Sectors", 
              items: ["Healthy Beverages", "Dairy Products", "Fruit Juices & Nectars", "Carbonated Beverages", "Milk Shakes", "Ice Cream & Dairy"]
            }
          ].map((section, index) => (
            <div key={index} className="space-y-4 animate-fade-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.items.map((item, i) => (
                  <li key={i} className="hover:text-orange-400 transition-colors duration-300 cursor-pointer hover:translate-x-1 transform">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <Phone className="h-5 w-5 text-orange-600" />
                <div>
                  <div className="text-gray-400">+91 9075078993</div>
                  <div className="text-gray-400">+91 9111786332</div>
                  <div className="text-gray-400">+91 8730831986</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <Mail className="h-5 w-5 text-orange-600" />
                <span className="text-gray-400">rahulkumar.shah@shreejibapafoods.in</span>
              </div>
              <div className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-300">
                <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                <span className="text-gray-400">
                  511, GRAND CASA, PAWAR NAGAR<br />
                  THERGAON LINK ROAD<br />
                  CHICNHWAD, PUNE- 411033
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-400">© 2024 Shreejibapa Foods. All rights reserved. | Founded by Dr. Rahulkumar Shah | Established September 1, 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
