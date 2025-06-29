
import { Beaker, Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <Beaker className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Shreejibappa Foods</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Food & Beverages R&D Lab - Your trusted partner in product, process and packaging innovation. Established in Pune, Maharashtra.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Beverage Application Lab</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Food & Beverages Formulation</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Recipes and Menu Development</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Process Development</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Food Safety and Quality Audits</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Technical Regulatory Support</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product Sectors</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Healthy Beverages</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Dairy Products</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Fruit Juices & Nectars</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Carbonated Beverages</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Milk Shakes</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Ice Cream & Dairy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600" />
                <div>
                  <div className="text-gray-400">+91 9075078993</div>
                  <div className="text-gray-400">+91 7029052441</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <span className="text-gray-400">info.shreejibapafoods@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
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

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Shreejibappa Foods. All rights reserved. | Founded by Dr. Rahulkumar Shah | Established September 1, 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
