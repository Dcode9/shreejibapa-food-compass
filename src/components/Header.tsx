
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "Creations", href: "/portfolio" },
    { name: "Our Story", href: "/story" },
    { name: "Collaborate", href: "/contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-stone-200/50 z-50 animate-cinematic-fade">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 animate-cinematic-fade premium-hover">
            <img 
              src="/lovable-uploads/8b5a724c-8259-4387-808b-b9419cd9e878.png" 
              alt="Shreejibapa Foods Logo" 
              className="w-12 h-12 object-contain" 
            />
            <div>
              <span className="hero-text text-xl font-medium text-stone-800 hover:text-amber-700 transition-colors duration-300">
                Shreejibapa Foods
              </span>
              <p className="body-text text-xs text-stone-600 -mt-1">From Lab to Launch</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`body-text transition-all duration-300 font-medium soft-underline animate-cinematic-fade ${
                  isActive(item.href) 
                    ? 'text-amber-700' 
                    : 'text-stone-700 hover:text-stone-900'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 animate-cinematic-fade" style={{ animationDelay: '0.5s' }}>
            <a href="tel:+91-9075078993" className="no-underline">
              <Button 
                variant="ghost" 
                className="text-stone-700 hover:text-stone-900 hover:bg-stone-50 premium-hover"
              >
                Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button className="bg-stone-800 hover:bg-stone-900 text-stone-50 premium-hover animate-soft-glow">
                Start Project
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-stone-50 rounded-xl transition-colors duration-300" 
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
          <div className="md:hidden py-6 border-t border-stone-200/50 animate-cinematic-fade bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`body-text transition-colors duration-300 font-medium px-2 py-1 animate-cinematic-fade ${
                    isActive(item.href) 
                      ? 'text-amber-700' 
                      : 'text-stone-700 hover:text-stone-900'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <a href="tel:+91-9075078993" className="no-underline">
                  <Button 
                    variant="ghost" 
                    className="text-stone-700 hover:text-stone-900 hover:bg-stone-50 w-full justify-start premium-hover"
                  >
                    Call Now
                  </Button>
                </a>
                <Link to="/contact">
                  <Button className="bg-stone-800 hover:bg-stone-900 text-stone-50 w-full premium-hover animate-soft-glow">
                    Start Project
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
