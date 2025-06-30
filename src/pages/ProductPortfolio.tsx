
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Coffee, Sparkles, ArrowRight } from "lucide-react";

const ProductPortfolio = () => {
  const categories = [
    {
      icon: Droplets,
      title: "Healthy Beverages",
      count: "12+ Products",
      description: "From artisanal yoghurt elixirs to premium fruit nectars",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50/80 to-cyan-50/80",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop"
    },
    {
      icon: Coffee,
      title: "Dairy Artistry",
      count: "8+ Products",
      description: "Artisan ice creams, aged cheeses, and specialty cold brews",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50/80 to-teal-50/80",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=400&fit=crop"
    },
    {
      icon: Sparkles,
      title: "Signature Launches",
      count: "15+ Products",
      description: "Market-tested successes from dark chocolate shakes to exotic nectars",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50/80 to-orange-50/80",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-stone-50 to-amber-50/20">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto text-center animate-cinematic-fade">
            <p className="body-text text-amber-700 font-medium tracking-wider uppercase text-sm mb-4">Product Portfolio</p>
            <h1 className="hero-text text-6xl lg:text-7xl font-light text-stone-800 mb-8">
              Artisanal Creations
            </h1>
            <p className="body-text text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed mb-12">
              From laboratory innovation to market sensation—discover our curated collection of premium beverages and dairy products that redefine taste experiences.
            </p>
            <Link to="/portfolio/launched">
              <Button className="bg-stone-800 hover:bg-stone-900 text-stone-50 premium-hover animate-soft-glow px-8 py-3 text-lg">
                View Launched Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Category Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {categories.map((category, index) => (
                <Card 
                  key={category.title}
                  className={`group border-0 shadow-xl bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm premium-hover animate-cinematic-fade overflow-hidden`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="relative">
                    <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent"></div>
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 animate-soft-glow`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="hero-text text-2xl font-medium text-stone-800 mb-2">
                      {category.title}
                    </CardTitle>
                    <p className="body-text text-sm text-stone-500 font-medium mb-4">{category.count}</p>
                    <p className="body-text text-stone-600 leading-relaxed">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <button className="soft-underline hero-text text-lg text-stone-800 hover:text-amber-700 transition-colors duration-300">
                      Explore Collection
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="px-6 mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-cinematic-fade">
              <h2 className="hero-text text-4xl font-light text-stone-800 mb-8">Featured Innovations</h2>
              <p className="body-text text-lg text-stone-600 max-w-3xl mx-auto">
                A glimpse into our laboratory's latest masterpieces
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Dark Chocolate Milk Shake", category: "Signature Launch", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" },
                { name: "Herbal-Infused Milk", category: "Healthy Beverage", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" },
                { name: "Artisan Ice Cream", category: "Dairy Artistry", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop" },
                { name: "Exotic Lychee Nectar", category: "Signature Launch", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop" }
              ].map((product, index) => (
                <div 
                  key={product.name}
                  className="group parallax-container animate-cinematic-fade"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg premium-hover">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-cover parallax-element group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <p className="body-text text-white text-xs uppercase tracking-wider mb-1">{product.category}</p>
                      <p className="hero-text text-white text-lg font-light">{product.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPortfolio;
