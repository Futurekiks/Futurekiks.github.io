import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import chairImage from "@/assets/chair-product.jpg";
import tableImage from "@/assets/table-product.jpg";
import officeImage1 from "@assets/stock_images/office_furniture_boo_1166b234.jpg";
import officeImage2 from "@assets/stock_images/office_furniture_boo_3d66b5f9.jpg";
import officeImage3 from "@assets/stock_images/office_furniture_boo_ba2ebda0.jpg";
import officeImage4 from "@assets/stock_images/office_furniture_boo_4ab84e55.jpg";

const Office = () => {
  const products = [
    {
      id: 1,
      name: "Executive Desk",
      price: "$1,299",
      originalPrice: "$1,699",
      image: tableImage,
      description: "Spacious executive desk with premium wood finish"
    },
    {
      id: 2,
      name: "Office Chair",
      price: "$499",
      originalPrice: "$699",
      image: chairImage,
      description: "Ergonomic office chair with lumbar support"
    },
    {
      id: 3,
      name: "Bookshelf",
      price: "$599",
      originalPrice: "$799",
      image: officeImage1,
      description: "Tall bookshelf for office storage and display"
    },
    {
      id: 4,
      name: "Conference Table",
      price: "$1,899",
      originalPrice: "$2,399",
      image: officeImage2,
      description: "Large conference table for meetings"
    },
    {
      id: 5,
      name: "Filing Cabinet",
      price: "$399",
      originalPrice: "$549",
      image: officeImage3,
      description: "Secure filing cabinet with lock"
    },
    {
      id: 6,
      name: "Standing Desk",
      price: "$799",
      originalPrice: "$1,099",
      image: officeImage4,
      description: "Adjustable standing desk for health-conscious work"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Office Collection</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create a productive and inspiring workspace with our professional office furniture designed for comfort and efficiency.
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
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-80 flex items-center justify-center bg-muted/30 text-muted-foreground">
                      <span className="text-lg">Product Image</span>
                    </div>
                  )}
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

export default Office;