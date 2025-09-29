import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Truck, Clock, MapPin, Package } from "lucide-react";

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Shipping Information</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about our delivery options, timeframes, and shipping policies
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Shipping Options */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6">Shipping Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="elegant-card">
                  <Truck className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Standard Delivery</h3>
                  <p className="text-muted-foreground mb-4">7-14 business days</p>
                  <p className="text-2xl font-bold text-primary">FREE</p>
                  <p className="text-sm text-muted-foreground">On orders over $500</p>
                </Card>

                <Card className="elegant-card">
                  <Clock className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Express Delivery</h3>
                  <p className="text-muted-foreground mb-4">3-5 business days</p>
                  <p className="text-2xl font-bold text-primary">$99</p>
                  <p className="text-sm text-muted-foreground">Available for most areas</p>
                </Card>
              </div>
            </div>

            {/* Delivery Areas */}
            <Card className="elegant-card">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Delivery Areas</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Free Standard Delivery:</strong> Continental United States</p>
                    <p><strong>Express Delivery Available:</strong> Major metropolitan areas</p>
                    <p><strong>White Glove Service:</strong> Available in select cities for an additional fee</p>
                    <p><strong>International Shipping:</strong> Contact us for a custom quote</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Packaging */}
            <Card className="elegant-card">
              <div className="flex items-start space-x-4">
                <Package className="w-8 h-8 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Packaging & Protection</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>• All furniture is carefully wrapped and protected during transit</p>
                    <p>• We use eco-friendly packaging materials whenever possible</p>
                    <p>• Large items may require special delivery arrangements</p>
                    <p>• Assembly instructions and hardware included with all applicable items</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Important Notes */}
            <Card className="elegant-card">
              <h3 className="text-xl font-semibold text-primary mb-4">Important Shipping Notes</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>• Delivery times are estimates and may vary during peak seasons</p>
                <p>• Someone must be present to receive large furniture deliveries</p>
                <p>• Delivery to apartment buildings may require additional coordination</p>
                <p>• Custom and made-to-order items have extended delivery times</p>
                <p>• You'll receive tracking information once your order ships</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingInfo;