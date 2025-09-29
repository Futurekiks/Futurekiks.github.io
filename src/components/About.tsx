import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Leaf, Clock } from "lucide-react";

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
    <section id="about" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="section-title">Crafting Excellence Since 1985</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
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
            <Button className="btn-primary">
              Learn More About Us
            </Button>
          </div>

          {/* Features Grid */}
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

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default About;