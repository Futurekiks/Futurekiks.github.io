import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";

const Bedroom = () => {
  const products = [
    {
      id: 1,
      name: "Platform Bed",
      price: "$899",
      originalPrice: "$1,199",
      description: "Modern platform bed with minimalist design"
    },
    {
      id: 2,
      name: "Nightstand Set",
      price: "$399",
      originalPrice: "$599",
      description: "Matching pair of elegant nightstands"
    },
    {
      id: 3,
      name: "Dresser",
      price: "$799",
      originalPrice: "$999",
      description: "Spacious dresser with smooth-sliding drawers"
    },
    {
      id: 4,
      name: "Wardrobe",
      price: "$1,499",
      originalPrice: "$1,899",
      description: "Large wardrobe with multiple compartments"
    },
    {
      id: 5,
      name: "Bedside Table",
      price: "$199",
      originalPrice: "$299",
      description: "Compact bedside table with drawer storage"
    },
    {
      id: 6,
      name: "Vanity Set",
      price: "$699",
      originalPrice: "$899",
      description: "Elegant vanity with mirror and stool"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Bedroom Collection</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your bedroom into a peaceful sanctuary with our collection of beds, dressers, and storage solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="product-card group shadow-[var(--product-shadow)] hover:shadow-[var(--elegant-shadow)] transition-all duration-500">
                <div className="relative overflow-hidden rounded-t-lg bg-muted/30">
                  <div className="w-full h-80 flex items-center justify-center text-muted-foreground">
                    <span className="text-lg">Product Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="btn-primary rounded-full shadow-lg">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
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

          <div className="text-center mt-12">
            <Button className="btn-primary">Load More Products</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bedroom;