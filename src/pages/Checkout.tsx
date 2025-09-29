import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutInputSchema, type CheckoutInput } from "@/shared/schema";
import { useCart } from "@/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Checkout = () => {
  const { items, total, itemCount, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInput>({
    resolver: zodResolver(CheckoutInputSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
    },
  });

  // If cart is empty, redirect to cart page
  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-24 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <h1 className="text-4xl font-light text-primary mb-4">No Items to Checkout</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your cart is empty. Please add some items before proceeding to checkout.
              </p>
              <Link to="/cart">
                <Button className="btn-primary mr-4" data-testid="button-view-cart">
                  View Cart
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" data-testid="button-continue-shopping">
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

  const onSubmit = async (data: CheckoutInput) => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate order ID
      const orderId = `PNT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      
      // Store order details for confirmation page
      const orderDetails = {
        orderId,
        items,
        total,
        customerInfo: data,
        orderDate: new Date().toISOString(),
      };
      
      localStorage.setItem('panto-order', JSON.stringify(orderDetails));
      
      // Clear cart
      clearCart();
      
      toast({
        title: "Order Placed Successfully!",
        description: `Your order #${orderId} has been confirmed.`,
      });
      
      // Navigate to confirmation page
      navigate('/order-confirmation');
      
    } catch (error) {
      console.error('Order processing error:', error);
      toast({
        title: "Order Failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Checkout</h1>
            <p className="text-xl text-muted-foreground">
              Complete your order information
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <Card className="elegant-card">
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          {...register("firstName")}
                          className={errors.firstName ? "border-red-500" : ""}
                          data-testid="input-firstName"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1" data-testid="error-firstName">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          {...register("lastName")}
                          className={errors.lastName ? "border-red-500" : ""}
                          data-testid="input-lastName"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1" data-testid="error-lastName">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={errors.email ? "border-red-500" : ""}
                          data-testid="input-email"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1" data-testid="error-email">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          className={errors.phone ? "border-red-500" : ""}
                          data-testid="input-phone"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1" data-testid="error-phone">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          {...register("address")}
                          className={errors.address ? "border-red-500" : ""}
                          data-testid="input-address"
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1" data-testid="error-address">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          {...register("city")}
                          className={errors.city ? "border-red-500" : ""}
                          data-testid="input-city"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1" data-testid="error-city">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input
                          id="zipCode"
                          {...register("zipCode")}
                          className={errors.zipCode ? "border-red-500" : ""}
                          data-testid="input-zipCode"
                        />
                        {errors.zipCode && (
                          <p className="text-red-500 text-sm mt-1" data-testid="error-zipCode">
                            {errors.zipCode.message}
                          </p>
                        )}
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          {...register("country")}
                          className={errors.country ? "border-red-500" : ""}
                          data-testid="input-country"
                        />
                        {errors.country && (
                          <p className="text-red-500 text-sm mt-1" data-testid="error-country">
                            {errors.country.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="elegant-card sticky top-8">
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">Order Summary</h2>
                    
                    <div className="space-y-4 mb-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm" data-testid={`summary-item-${item.id}`}>
                          <span className="text-muted-foreground">
                            {item.name} × {item.quantity}
                          </span>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="font-medium" data-testid="text-checkout-subtotal">${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-muted-foreground">Shipping</span>
                          <span className="font-medium text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-lg font-semibold">Total</span>
                          <span className="text-lg font-bold text-primary" data-testid="text-checkout-total">
                            ${total.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        type="submit" 
                        className="btn-primary w-full" 
                        disabled={isProcessing}
                        data-testid="button-place-order"
                      >
                        {isProcessing ? "Processing..." : "Place Order"}
                      </Button>
                      <Link to="/cart" className="block">
                        <Button variant="outline" className="w-full" data-testid="button-back-to-cart">
                          Back to Cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;