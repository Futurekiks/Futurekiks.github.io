import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Furniture Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      description: "Lead our design team in creating innovative furniture pieces that blend form and function."
    },
    {
      title: "Craftsman - Wood Working",
      department: "Manufacturing",
      location: "Workshop, NY",
      type: "Full-time",
      description: "Join our skilled team of artisans in crafting premium furniture with attention to detail."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      description: "Help us tell the Panto story and connect with customers who value quality craftsmanship."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a passionate team dedicated to creating exceptional furniture and meaningful careers
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Company Culture */}
          <div className="mb-16">
            <h2 className="section-title text-center">Why Work at Panto?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="elegant-card text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-muted-foreground">Work with passionate professionals who share your commitment to excellence</p>
              </Card>
              <Card className="elegant-card text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Beautiful Workspace</h3>
                <p className="text-muted-foreground">Our modern workshop and offices are designed for creativity and collaboration</p>
              </Card>
              <Card className="elegant-card text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-muted-foreground">We believe great work comes from happy, well-rested team members</p>
              </Card>
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="section-title text-center">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="elegant-card">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2">{position.title}</h3>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                        <span>⏰ {position.type}</span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Button className="btn-primary">Apply Now</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-semibold text-primary mb-6">Don't See Your Role?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion. 
              Send us your resume and let us know how you'd like to contribute to the Panto story.
            </p>
            <Button className="btn-accent">Send General Application</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;