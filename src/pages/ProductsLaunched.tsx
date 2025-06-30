
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsLaunched = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Beverages", "Dairy", "Specialty Blends"];

  const products = [
    {
      name: "Dark Chocolate Milk Shake",
      category: "Beverages",
      launchDate: "June 2024",
      description: "Rich cocoa blend with premium Belgian chocolate",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      highlights: ["Premium Belgian Cocoa", "Natural Sweeteners", "Protein Enriched"],
      rating: 4.8
    },
    {
      name: "Signature Cold Coffee",
      category: "Beverages",
      launchDate: "May 2024",
      description: "Artisanal coffee blend with smooth vanilla notes",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
      highlights: ["Single Origin Beans", "Cold Brew Process", "Zero Preservatives"],
      rating: 4.9
    },
    {
      name: "Artisan Ice Cream Collection",
      category: "Dairy",
      launchDate: "April 2024",
      description: "Handcrafted ice cream with natural ingredients",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
      highlights: ["Natural Flavors", "Premium Cream", "Small Batch"],
      rating: 4.7
    },
    {
      name: "Exotic Lychee Nectar",
      category: "Specialty Blends",
      launchDate: "March 2024",
      description: "Tropical lychee with a hint of rose water",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      highlights: ["Imported Lychees", "Rose Water Infusion", "No Artificial Colors"],
      rating: 4.6
    },
    {
      name: "Heritage Lassi & Spiced Buttermilk",
      category: "Dairy",
      launchDate: "February 2024",
      description: "Traditional yogurt drinks with modern packaging",
      image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=400&h=300&fit=crop",
      highlights: ["Traditional Recipe", "Probiotic Rich", "Authentic Spices"],
      rating: 4.5
    },
    {
      name: "Herbal Mint Fusion",
      category: "Specialty Blends",
      launchDate: "January 2024",
      description: "Refreshing mint blend with therapeutic herbs",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
      highlights: ["Organic Herbs", "Natural Mint", "Digestive Benefits"],
      rating: 4.4
    }
  ];

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-stone-50 to-amber-50/20">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/portfolio" className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors duration-300 mb-8 animate-cinematic-fade">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
            <div className="text-center animate-cinematic-fade">
              <p className="body-text text-amber-700 font-medium tracking-wider uppercase text-sm mb-4">Market Success</p>
              <h1 className="hero-text text-6xl lg:text-7xl font-light text-stone-800 mb-8">
                Products Launched
              </h1>
              <p className="body-text text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                From concept to consumer—witness our laboratory innovations that have successfully captured market attention and taste preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center animate-cinematic-fade" style={{ animationDelay: '0.3s' }}>
              <div className="flex space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    variant={activeFilter === filter ? "default" : "ghost"}
                    className={`px-6 py-2 rounded-xl transition-all duration-300 premium-hover ${
                      activeFilter === filter
                        ? "bg-stone-800 text-white shadow-lg"
                        : "text-stone-600 hover:text-stone-800 hover:bg-stone-50"
                    }`}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.name}
                  className="group border-0 shadow-xl bg-white/90 backdrop-blur-sm premium-hover animate-cinematic-fade overflow-hidden"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="h-3 w-3 text-amber-500 fill-current" />
                        <span className="text-xs font-medium text-stone-800">{product.rating}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-stone-800/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <div className="flex items-center space-x-2 text-white">
                          <Calendar className="h-3 w-3" />
                          <span className="text-xs font-medium">{product.launchDate}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <CardTitle className="hero-text text-xl font-medium text-stone-800 mb-3">
                      {product.name}
                    </CardTitle>
                    <p className="body-text text-stone-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      <p className="body-text text-xs font-medium text-stone-800 uppercase tracking-wider">Key Highlights</p>
                      <ul className="space-y-1">
                        {product.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start">
                            <span className="w-1 h-1 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="body-text text-xs text-stone-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 animate-cinematic-fade">
                <p className="body-text text-stone-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Statistics */}
        <section className="px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center animate-cinematic-fade" style={{ animationDelay: '1s' }}>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="premium-hover">
                <h3 className="hero-text text-4xl font-light text-stone-800 mb-2">35+</h3>
                <p className="body-text text-stone-600">Products Launched</p>
              </div>
              <div className="premium-hover">
                <h3 className="hero-text text-4xl font-light text-stone-800 mb-2">98%</h3>
                <p className="body-text text-stone-600">Market Success Rate</p>
              </div>
              <div className="premium-hover">
                <h3 className="hero-text text-4xl font-light text-stone-800 mb-2">4.7★</h3>
                <p className="body-text text-stone-600">Average Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsLaunched;
