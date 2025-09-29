import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import sofaImage from "@/assets/sofa-product.jpg";
import chairImage from "@/assets/chair-product.jpg";
import tableImage from "@/assets/table-product.jpg";

const LivingRoom = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const products = [
    {
      id: "living-1",
      name: "Comfort Sofa",
      price: 1299,
      originalPrice: "$1,599",
      image: sofaImage,
      category: "living-room",
      description: "Premium comfort sofa perfect for family gatherings"
    },
    {
      id: "living-2",
      name: "Nordic Chair",
      price: 299,
      originalPrice: "$399",
      image: chairImage,
      category: "living-room",
      description: "Elegant Nordic-style accent chair with wooden frame"
    },
    {
      id: "living-3",
      name: "Coffee Table",
      price: 599,
      originalPrice: "$799",
      image: tableImage,
      category: "living-room",
      description: "Minimalist coffee table with clean lines and storage"
    },
    {
      id: "living-4",
      name: "Luxury Sectional",
      price: 2499,
      originalPrice: "$2,999",
      image: sofaImage,
      category: "living-room",
      description: "Spacious sectional sofa for large living rooms"
    },
    {
      id: "living-5",
      name: "Accent Chair Set",
      price: 499,
      originalPrice: "$699",
      image: chairImage,
      category: "living-room",
      description: "Set of two matching accent chairs in premium fabric"
    },
    {
      id: "living-6",
      name: "Side Table",
      price: 199,
      originalPrice: "$299",
      image: tableImage,
      category: "living-room",
      description: "Compact side table perfect for magazines and drinks"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Living Room Collection</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create a welcoming living space with our carefully curated collection of sofas, chairs, and tables designed for comfort and style.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="product-card group shadow-[var(--product-shadow)] hover:shadow-[var(--elegant-shadow)] transition-all duration-500">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      className="btn-primary rounded-full shadow-lg"
                      onClick={() => handleAddToCart(product)}
                      data-testid={`button-add-cart-${product.id}`}
                    >
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
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
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

export default LivingRoom;