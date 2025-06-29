
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const healthyBeverages = [
    "Yoghurt drink",
    "Lassi and spiced buttermilk",
    "Coconut water based drink",
    "Milk shakes",
    "Herbal flavored milk",
    "Carbonated flavored lemonade",
    "All kinds of fruit juices, Nectars and RTS Beverages (Still Drinks)",
    "Watermelon Refresher",
    "Soft drinks, Carbonated Beverages"
  ];

  const dairyProducts = [
    "Ice Cream",
    "Cheese",
    "Paneer",
    "Shreekhand",
    "LAD – Lactic Acid Drink",
    "Cold coffee"
  ];

  const launchedProducts = [
    "Dark Chocolate Milk Shake",
    "Cold Coffee",
    "Dulce de leche Milk Shake",
    "Lychee juice drink",
    "Mango Juice Drink",
    "Guava Juice Drink",
    "Lemonade"
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Product Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specializing in Healthy Beverages and All Dairy Products with innovative formulations and quality assurance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600 text-center">
                Healthy Beverages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {healthyBeverages.map((product, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{product}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600 text-center">
                Dairy Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {dairyProducts.map((product, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{product}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600 text-center">
                Products Launched by SBF
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {launchedProducts.map((product, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{product}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <img 
            src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop" 
            alt="Healthy beverages" 
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop" 
            alt="Dairy products" 
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" 
            alt="Fruit juices" 
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=300&h=200&fit=crop" 
            alt="Cold beverages" 
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
