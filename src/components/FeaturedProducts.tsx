import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import chairImage from "@/assets/chair-product.jpg";
import tableImage from "@/assets/table-product.jpg";
import sofaImage from "@/assets/sofa-product.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Nordic Chair",
      price: "$299",
      originalPrice: "$399",
      image: chairImage,
      category: "Seating"
    },
    {
      id: 2,
      name: "Minimalist Table",
      price: "$599",
      originalPrice: "$799",
      image: tableImage,
      category: "Tables"
    },
    {
      id: 3,
      name: "Comfort Sofa",
      price: "$1,299",
      originalPrice: "$1,599",
      image: sofaImage,
      category: "Seating"
    }
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces, 
            each designed to elevate your living space with style and comfort.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="product-card group shadow-[var(--product-shadow)] hover:shadow-[var(--elegant-shadow)] transition-all duration-500">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" className="btn-primary rounded-full shadow-lg">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="btn-primary">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;