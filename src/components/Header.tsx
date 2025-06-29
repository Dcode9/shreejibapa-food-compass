
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 animate-scale-in">
            <img 
              src="/lovable-uploads/8b5a724c-8259-4387-808b-b9419cd9e878.png" 
              alt="Shreejibapa Foods Logo" 
              className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300" 
            />
            <span className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors duration-300">
              Shreejibapa Foods
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-orange-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button 
              variant="outline" 
              className="border-orange-600 text-orange-600 hover:bg-orange-50 hover:scale-105 transition-all duration-300"
            >
              Call Now
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white hover:scale-105 transition-all duration-300">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-orange-50 rounded-lg transition-colors duration-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 transition-transform duration-300 rotate-90" /> : 
              <Menu className="h-6 w-6 transition-transform duration-300" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-in-right">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 w-full hover:scale-105 transition-all duration-300"
                >
                  Call Now
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full hover:scale-105 transition-all duration-300">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
