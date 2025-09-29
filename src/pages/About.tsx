import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Leaf, Clock } from "lucide-react";
import heroImage from "@/assets/hero-furniture.jpg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Each piece is crafted with the finest materials and attention to detail"
    },
    {
      icon: Users,
      title: "Expert Craftsmanship",
      description: "Our skilled artisans bring decades of experience to every creation"
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "We use responsibly sourced wood and eco-friendly manufacturing processes"
    },
    {
      icon: Clock,
      title: "Timeless Design",
      description: "Classic aesthetics that remain beautiful for generations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-secondary/50 relative">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Panto furniture craftsmanship"
            className="w-full h-full object-cover opacity-10"
            data-testid="img-about-hero"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">About Panto</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting exceptional furniture that transforms houses into homes since 1985
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="section-title">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Panto, we believe that furniture is more than just functional pieces – 
                they're the foundation of memorable moments and comfortable living. 
                Our commitment to excellence drives us to create furniture that combines 
                traditional craftsmanship with contemporary design.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every piece in our collection is carefully designed and meticulously crafted 
                using sustainable materials, ensuring that your investment will be cherished 
                for years to come.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="elegant-card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: "10K+", label: "Happy Customers" },
              { number: "500+", label: "Products Sold" },
              { number: "50+", label: "Design Awards" },
              { number: "25+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-light text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Transform Your Space?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our collection and discover furniture that perfectly matches your style and needs.
            </p>
            <Button className="btn-primary">Explore Products</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;