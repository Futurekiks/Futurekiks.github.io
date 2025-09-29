import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Phone, Mail, MessageCircle } from "lucide-react";

const HelpCenter = () => {
  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 7-14 business days. Express delivery is available for an additional fee."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all furniture in original condition. Custom pieces are non-returnable."
    },
    {
      question: "Do you offer assembly services?",
      answer: "Yes, we offer professional assembly services for an additional fee. This can be selected during checkout."
    },
    {
      question: "How do I track my order?",
      answer: "You'll receive a tracking number via email once your order ships. You can also check your order status in your account."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers to your questions or get in touch with our support team
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search for help..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Options */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-primary mb-6">Get Support</h2>
              <div className="space-y-4">
                <Card className="elegant-card">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-accent" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-muted-foreground text-sm">Available 9AM-7PM EST</p>
                      <p className="text-primary">(555) 123-4568</p>
                    </div>
                  </div>
                </Card>

                <Card className="elegant-card">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-accent" />
                    <div>
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-muted-foreground text-sm">Response within 24 hours</p>
                      <p className="text-primary">support@panto.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="elegant-card">
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-8 h-8 text-accent" />
                    <div>
                      <h3 className="font-semibold">Live Chat</h3>
                      <p className="text-muted-foreground text-sm">Available during business hours</p>
                      <p className="text-primary">Start Chat</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* FAQs */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-primary mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="elegant-card">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;