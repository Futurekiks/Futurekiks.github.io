import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, Shield, RefreshCw, AlertCircle } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Returns & Exchanges</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We want you to love your furniture. Learn about our hassle-free return policy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Return Policy Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="elegant-card text-center">
                <RotateCcw className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">30-Day Returns</h3>
                <p className="text-muted-foreground text-sm">Return most items within 30 days of delivery</p>
              </Card>

              <Card className="elegant-card text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground text-sm">We stand behind the quality of our furniture</p>
              </Card>

              <Card className="elegant-card text-center">
                <RefreshCw className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Easy Process</h3>
                <p className="text-muted-foreground text-sm">Simple return process with free pickup</p>
              </Card>
            </div>

            {/* Return Conditions */}
            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-6">Return Conditions</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p>Items must be in original condition with all original packaging and tags</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p>Returns must be initiated within 30 days of delivery</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p>Items must not show signs of use, damage, or normal wear</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p>Original receipt or proof of purchase required</p>
                </div>
              </div>
            </Card>

            {/* Return Process */}
            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-6">How to Return an Item</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact Us</h3>
                    <p className="text-muted-foreground">Call our support team at (555) 123-4568 or email support@panto.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Schedule Pickup</h3>
                    <p className="text-muted-foreground">We'll arrange a free pickup at your convenience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Get Your Refund</h3>
                    <p className="text-muted-foreground">Receive your refund within 7-10 business days after we receive the item</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Exceptions */}
            <Card className="elegant-card border-destructive/20">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-destructive mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-destructive mb-4">Non-Returnable Items</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• Custom or made-to-order furniture</p>
                    <p>• Items that have been assembled or modified</p>
                    <p>• Clearance or final sale items</p>
                    <p>• Items damaged by misuse or normal wear and tear</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">Need to Return Something?</h3>
              <p className="text-muted-foreground mb-6">
                Our customer service team is here to help make the return process as easy as possible.
              </p>
              <Button className="btn-primary">Start Return Process</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Returns;