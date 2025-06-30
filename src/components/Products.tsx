
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Coffee, Sparkles } from "lucide-react";

const Products = () => {
  const healthyBeverages = [
    "Artisanal Yoghurt Elixirs", "Heritage Lassi & Spiced Buttermilk", "Pure Coconut Water Blends",
    "Gourmet Milk Shakes", "Herbal-Infused Milk Creations", "Sparkling Citrus Lemonades",
    "Premium Fruit Nectars & Still Beverages", "Refreshing Watermelon Tonics", "Craft Carbonated Beverages"
  ];

  const dairyProducts = [
    "Artisan Ice Cream", "Aged Cheese Varieties", "Fresh Paneer Creations",
    "Traditional Shrikhand", "Probiotic Lactic Drinks", "Specialty Cold Brews"
  ];

  const launchedProducts = [
    "Dark Chocolate Milk Shake", "Signature Cold Coffee", "Dulce de Leche Shake",
    "Exotic Lychee Nectar", "Premium Mango Blend", "Fresh Guava Delight", "Classic Lemonade"
  ];

  const productImages = [
    { src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop", alt: "Premium beverages" },
    { src: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop", alt: "Artisan dairy" },
    { src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop", alt: "Fresh juices" },
    { src: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=400&h=300&fit=crop", alt: "Cold beverages" }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-stone-50 to-amber-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl animate-liquid-flow"></div>
        <div className="absolute bottom-40 right-20 w-36 h-36 bg-stone-300/20 rounded-full blur-2xl animate-ingredient-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-24 animate-cinematic-fade">
          <p className="body-text text-amber-700 font-medium tracking-wider uppercase text-sm mb-4">Product Portfolio</p>
          <h2 className="hero-text text-5xl lg:text-6xl font-light text-stone-800 mb-8">
            Artisanal Creations
          </h2>
          <p className="body-text text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            From laboratory innovation to market sensation—discover our curated collection of premium beverages and dairy products that redefine taste experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <Card className="group border-0 shadow-xl bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm premium-hover animate-cinematic-fade overflow-hidden">
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 animate-soft-glow">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="hero-text text-2xl font-medium text-stone-800 mb-4">
                Healthy Beverages
              </CardTitle>
              <div className="absolute top-6 right-6 w-20 h-20 bg-blue-100/30 rounded-full blur-xl animate-parallax-slow"></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {healthyBeverages.map((product, index) => (
                  <li key={index} className="flex items-start group/item">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                    <span className="body-text text-stone-700 group-hover/item:text-stone-900 transition-colors duration-300">{product}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-xl bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm premium-hover animate-cinematic-fade overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 animate-soft-glow">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="hero-text text-2xl font-medium text-stone-800 mb-4">
                Dairy Artistry
              </CardTitle>
              <div className="absolute top-6 right-6 w-20 h-20 bg-emerald-100/30 rounded-full blur-xl animate-parallax-slow"></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {dairyProducts.map((product, index) => (
                  <li key={index} className="flex items-start group/item">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                    <span className="body-text text-stone-700 group-hover/item:text-stone-900 transition-colors duration-300">{product}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-xl bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm premium-hover animate-cinematic-fade overflow-hidden" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 animate-soft-glow">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="hero-text text-2xl font-medium text-stone-800 mb-4">
                Signature Launches
              </CardTitle>
              <div className="absolute top-6 right-6 w-20 h-20 bg-amber-100/30 rounded-full blur-xl animate-parallax-slow"></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {launchedProducts.map((product, index) => (
                  <li key={index} className="flex items-start group/item">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                    <span className="body-text text-stone-700 group-hover/item:text-stone-900 transition-colors duration-300">{product}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Product Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-cinematic-fade" style={{ animationDelay: '0.6s' }}>
          {productImages.map((img, index) => (
            <div key={index} className="group parallax-container">
              <div className="relative overflow-hidden rounded-2xl shadow-lg premium-hover">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-64 object-cover parallax-element group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="hero-text text-white text-sm font-light">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-cinematic-fade" style={{ animationDelay: '1s' }}>
          <p className="body-text text-lg text-stone-600 mb-8">Experience the fusion of tradition and innovation</p>
          <button className="soft-underline hero-text text-xl text-stone-800 hover:text-amber-700 transition-colors duration-300">
            Taste the Future
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
