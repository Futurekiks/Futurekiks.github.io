import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Panto's website and services, you accept and agree to be bound 
                by the terms and provision of this agreement. These terms apply to all visitors, users, 
                and others who access or use the service.
              </p>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Products and Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Panto offers furniture and home decor products through our website. We reserve the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or discontinue products without notice</li>
                  <li>Limit quantities available for purchase</li>
                  <li>Refuse service to anyone for any reason</li>
                  <li>Update pricing at any time</li>
                </ul>
              </div>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Orders and Payment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>When you place an order:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All orders are subject to acceptance and availability</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Payment is required at time of order</li>
                  <li>We reserve the right to cancel orders for any reason</li>
                </ul>
              </div>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Shipping and Delivery</h2>
              <p className="text-muted-foreground">
                Delivery times are estimates only. Panto is not responsible for delays caused by 
                shipping carriers, weather, or other circumstances beyond our control. Risk of loss 
                transfers to you upon delivery.
              </p>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Returns and Refunds</h2>
              <p className="text-muted-foreground">
                Returns are subject to our return policy. Custom orders and special items may not be 
                returnable. Refunds will be processed using the original payment method within 7-10 
                business days of receiving the returned item.
              </p>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Panto's liability is limited to the purchase price of the product. We are not liable 
                for indirect, incidental, or consequential damages arising from the use of our products 
                or services.
              </p>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                Questions about these Terms of Service should be sent to us at legal@panto.com 
                or by calling (555) 123-4567.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;