import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Package, Truck, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface OrderDetails {
  orderId: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  total: number;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
  };
  orderDate: string;
}

const OrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = localStorage.getItem('panto-order');
    if (savedOrder) {
      try {
        const order = JSON.parse(savedOrder);
        setOrderDetails(order);
      } catch (error) {
        console.error('Error loading order details:', error);
        navigate('/');
      }
    } else {
      // No order found, redirect to home
      navigate('/');
    }
  }, [navigate]);

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-24 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <h1 className="text-4xl font-light text-primary mb-4">Loading...</h1>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  const { orderId, items, total, customerInfo, orderDate } = orderDetails;
  const orderDateFormatted = new Date(orderDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-6" />
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-4">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Thank you for your purchase, {customerInfo.firstName}!
            </p>
            <p className="text-lg text-muted-foreground">
              Order #{orderId} • Placed on {orderDateFormatted}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Order Status */}
          <Card className="elegant-card mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Order Status</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span className="font-medium">Confirmed</span>
                  </div>
                  <div className="w-16 h-0.5 bg-muted"></div>
                  <div className="flex items-center text-muted-foreground">
                    <Package className="h-6 w-6 mr-2" />
                    <span>Processing</span>
                  </div>
                  <div className="w-16 h-0.5 bg-muted"></div>
                  <div className="flex items-center text-muted-foreground">
                    <Truck className="h-6 w-6 mr-2" />
                    <span>Shipped</span>
                  </div>
                  <div className="w-16 h-0.5 bg-muted"></div>
                  <div className="flex items-center text-muted-foreground">
                    <Home className="h-6 w-6 mr-2" />
                    <span>Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2">
              <Card className="elegant-card">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Order Details</h2>
                  
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-6 border-b last:border-b-0" data-testid={`order-item-${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                          data-testid={`img-order-${item.id}`}
                        />
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold text-foreground" data-testid={`text-order-name-${item.id}`}>
                            {item.name}
                          </h3>
                          <p className="text-muted-foreground">Quantity: {item.quantity}</p>
                          <p className="text-lg font-bold text-primary" data-testid={`text-order-price-${item.id}`}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Order Summary & Shipping Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Summary */}
              <Card className="elegant-card">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium" data-testid="text-order-subtotal">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-lg font-bold text-primary" data-testid="text-order-total">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Shipping Information */}
              <Card className="elegant-card">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Shipping Address</h2>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground" data-testid="text-customer-name">
                      {customerInfo.firstName} {customerInfo.lastName}
                    </p>
                    <p data-testid="text-customer-address">{customerInfo.address}</p>
                    <p>{customerInfo.city}, {customerInfo.zipCode}</p>
                    <p>{customerInfo.country}</p>
                    <p className="pt-2 border-t">
                      <span className="font-medium">Email:</span> {customerInfo.email}
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span> {customerInfo.phone}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-12 space-y-4">
            <div className="space-x-4">
              <Link to="/">
                <Button className="btn-primary" data-testid="button-continue-shopping-confirmation">
                  Continue Shopping
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.print()}
                data-testid="button-print-order"
              >
                Print Order
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              You will receive an email confirmation shortly with your order details and tracking information.
              If you have any questions, please contact our customer service team.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;