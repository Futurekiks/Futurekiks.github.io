import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, total, updateQuantity, removeItem, itemCount } = useCart();

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-24 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-8" />
              <h1 className="text-4xl font-light text-primary mb-4">Your Cart is Empty</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Looks like you haven't added any items to your cart yet. Browse our collection to find the perfect furniture for your home.
              </p>
              <Link to="/">
                <Button className="btn-primary" data-testid="button-continue-shopping">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Shopping Cart</h1>
            <p className="text-xl text-muted-foreground">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item) => (
                  <Card key={item.id} className="elegant-card" data-testid={`cart-item-${item.id}`}>
                    <div className="flex flex-col sm:flex-row gap-6 p-6">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full sm:w-32 h-32 object-cover rounded-lg"
                          data-testid={`img-cart-${item.id}`}
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-product-name-${item.id}`}>
                          {item.name}
                        </h3>
                        <p className="text-2xl font-bold text-primary mb-4" data-testid={`text-price-${item.id}`}>
                          ${item.price}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              data-testid={`button-decrease-${item.id}`}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-lg font-medium w-8 text-center" data-testid={`text-quantity-${item.id}`}>
                              {item.quantity}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              data-testid={`button-increase-${item.id}`}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeItem(item.id)}
                            data-testid={`button-remove-${item.id}`}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="elegant-card sticky top-8">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Items ({itemCount})</span>
                      <span className="font-medium" data-testid="text-subtotal">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-lg font-bold text-primary" data-testid="text-total">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/checkout" className="block">
                      <Button className="btn-primary w-full" data-testid="button-checkout">
                        Proceed to Checkout
                      </Button>
                    </Link>
                    <Link to="/" className="block">
                      <Button variant="outline" className="w-full" data-testid="button-continue-shopping-summary">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;