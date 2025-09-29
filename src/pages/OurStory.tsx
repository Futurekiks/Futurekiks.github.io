import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              A journey of passion, craftsmanship, and timeless design
            </p>
          </div>

          <div className="space-y-16">
            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">The Beginning (1985)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Panto began as a small family workshop in the heart of the furniture district. 
                Our founder, Michael Chen, started with a simple vision: to create furniture 
                that would last generations while maintaining exceptional beauty and comfort.
              </p>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Growth & Innovation (1990s)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Throughout the 1990s, we expanded our workshop and began incorporating 
                sustainable practices long before it became an industry standard. 
                We invested in skilled artisans and developed our signature finishing techniques 
                that give Panto furniture its distinctive character.
              </p>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Modern Era (2000s-Present)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Today, Panto represents the perfect balance of traditional craftsmanship 
                and contemporary design. We've embraced modern technology to enhance our 
                precision while maintaining the human touch that makes each piece special. 
                Our commitment to sustainability and quality continues to drive everything we do.
              </p>
            </Card>

            <div className="text-center pt-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Looking Forward
              </h3>
              <p className="text-lg text-muted-foreground">
                As we continue to grow, our mission remains unchanged: creating beautiful, 
                sustainable furniture that brings families together and makes houses feel like home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;