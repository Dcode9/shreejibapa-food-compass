
import { ChefHat, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Shreejibapa Foods</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in food consultancy, helping businesses transform their operations and achieve remarkable success in the food industry.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <Twitter className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Recipe Development</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Market Analysis</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Menu Engineering</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Product Innovation</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Quality Assurance</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Business Strategy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Our Team</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <span className="text-gray-400">info@shreejibapafoods.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                <span className="text-gray-400">
                  123 Food Street<br />
                  Business District<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Shreejibapa Foods. All rights reserved. | Designed with ❤️ for food industry success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
