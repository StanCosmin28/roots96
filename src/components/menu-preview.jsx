import { useState } from "react";
// import { button } from "./ui/button";
import { X } from "lucide-react";

import data from "../Model/data";
const { item1, item2, item3, item4 } = { ...data.menu };

const menuItems = [
  {
    name: "Signature Espresso",
    description: "Rich, bold espresso with notes of dark chocolate and caramel",
    fullDescription:
      "Our Signature Espresso is crafted from single-origin Brazilian beans, roasted to perfection to bring out deep chocolate notes with a smooth caramel finish. Each shot is pulled with precision, ensuring the perfect crema and balanced flavor profile that coffee connoisseurs love.",
    price: "$4.50",
    image: item1,
    ingredients: [
      "Brazilian Arabica Beans",
      "Dark Roast",
      "Precision Extraction",
    ],
    serving: "Served in a ceramic espresso cup",
  },
  {
    name: "Cold Brew Delight",
    description: "Smooth cold brew coffee with a hint of vanilla and cream",
    fullDescription:
      "Our Cold Brew Delight is steeped for 18 hours in cold water, creating an incredibly smooth and less acidic coffee experience. We infuse it with Madagascar vanilla and a touch of organic cream for a refreshing drink that's perfect for warm days or as an afternoon pick-me-up.",
    price: "$5.25",
    image: item2,
    ingredients: [
      "Colombian Beans",
      "Madagascar Vanilla",
      "Organic Cream",
      "18-hour Steep",
    ],
    serving: "Served over ice in a tall glass",
  },
  {
    name: "Artisan Latte",
    description: "Creamy latte with house-made syrup and beautiful latte art",
    fullDescription:
      "The Artisan Latte features our house-made vanilla syrup and locally sourced organic milk, steamed to the perfect microfoam consistency. Each cup is adorned with intricate latte art by our skilled baristas, making it as beautiful as it is delicious. The balance of espresso and milk creates a harmonious flavor experience.",
    price: "$5.75",
    image: item3,
    ingredients: [
      "Espresso",
      "Organic Milk",
      "House-made Vanilla Syrup",
      "Latte Art",
    ],
    serving: "Served in a 12oz ceramic mug",
  },
  {
    name: "Roots96 Special",
    description: "Our signature blend with Ethiopian and Colombian beans",
    fullDescription:
      "The Roots96 Special is our signature blend that combines the fruity notes of Ethiopian Yirgacheffe with the rich chocolate tones of Colombian Supremo. This carefully balanced blend represents our commitment to quality and sustainability. Each batch is roasted in-house to bring out the unique characteristics of both regions.",
    price: "$6.00",
    image: item4,
    ingredients: [
      "Ethiopian Yirgacheffe",
      "Colombian Supremo",
      "House Blend",
      "Medium Roast",
    ],
    serving: "Available as espresso or pour-over",
  },
];

export default function MenuPreview() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Featured Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium coffee drinks,
            each crafted with passion and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border cursor-pointer"
              onClick={() => setSelectedItem(index)}
            >
              <div className="relative overflow-hidden ">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                <p className="text-primary text-sm mt-3 font-medium">
                  Click for details →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full description */}
        {selectedItem !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={menuItems[selectedItem].image || "/placeholder.svg"}
                  alt={menuItems[selectedItem].name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {menuItems[selectedItem].price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {menuItems[selectedItem].name}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {menuItems[selectedItem].fullDescription}
                </p>

                <div className="grid gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">
                      Ingredients:
                    </h4>
                    <ul className="text-muted-foreground text-sm">
                      {menuItems[selectedItem].ingredients.map(
                        (ingredient, idx) => (
                          <li key={idx} className="flex items-center mb-1">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {ingredient}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">
                      Serving:
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {menuItems[selectedItem].serving}
                    </p>
                  </div>
                </div>

                {/* <button className="w-full bg-primary hover:bg-primary/90">
                  Add to Order
                </button> */}
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button
            size="lg"
            className="bg-primary hover:bg-secondary hover:border-1 hover:border-black border-1 hover:text-black text-primary-foreground px-8 py-3 cursor-pointer hover:scale-90 transition-all duration-200 rounded-md"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
