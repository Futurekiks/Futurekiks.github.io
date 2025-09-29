import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Ruler, Home, Sofa, Bed } from "lucide-react";

const SizeGuide = () => {
  const roomSizes = [
    {
      room: "Small Living Room",
      size: "< 150 sq ft",
      sofa: "Loveseat (58-72\")",
      table: "Round 36\" or 30x48\" rectangular",
      chairs: "2 accent chairs maximum"
    },
    {
      room: "Medium Living Room", 
      size: "150-300 sq ft",
      sofa: "Standard sofa (72-84\")",
      table: "48x28\" or round 42\"",
      chairs: "2-4 chairs comfortably"
    },
    {
      room: "Large Living Room",
      size: "> 300 sq ft", 
      sofa: "Sectional or sofa + loveseat",
      table: "54x30\" or larger",
      chairs: "Multiple seating areas possible"
    }
  ];

  const furnitureDimensions = [
    {
      category: "Sofas",
      items: [
        { name: "Loveseat", width: "58-72\"", depth: "32-40\"", height: "30-36\"" },
        { name: "Standard Sofa", width: "72-84\"", depth: "32-40\"", height: "30-36\"" },
        { name: "Sectional", width: "100-140\"", depth: "32-40\"", height: "30-36\"" }
      ]
    },
    {
      category: "Dining Tables",
      items: [
        { name: "2-Person Table", width: "30x30\"", depth: "-", height: "28-30\"" },
        { name: "4-Person Table", width: "36x48\"", depth: "-", height: "28-30\"" },
        { name: "6-Person Table", width: "36x72\"", depth: "-", height: "28-30\"" }
      ]
    },
    {
      category: "Beds",
      items: [
        { name: "Twin", width: "38\"", depth: "75\"", height: "Variable" },
        { name: "Full", width: "54\"", depth: "75\"", height: "Variable" },
        { name: "Queen", width: "60\"", depth: "80\"", height: "Variable" },
        { name: "King", width: "76\"", depth: "80\"", height: "Variable" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Size Guide</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect furniture dimensions for your space with our comprehensive size guide
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Measuring Tips */}
            <div>
              <h2 className="section-title text-center">Before You Shop</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="elegant-card text-center">
                  <Ruler className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Measure Your Space</h3>
                  <p className="text-muted-foreground text-sm">Include length, width, and height of your room</p>
                </Card>
                <Card className="elegant-card text-center">
                  <Home className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Note Doorways</h3>
                  <p className="text-muted-foreground text-sm">Measure doors, stairs, and hallways for delivery</p>
                </Card>
                <Card className="elegant-card text-center">
                  <Sofa className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Plan Traffic Flow</h3>
                  <p className="text-muted-foreground text-sm">Leave 30-36\" for walkways around furniture</p>
                </Card>
                <Card className="elegant-card text-center">
                  <Bed className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Consider Scale</h3>
                  <p className="text-muted-foreground text-sm">Furniture should be proportional to room size</p>
                </Card>
              </div>
            </div>

            {/* Room Size Recommendations */}
            <div>
              <h2 className="section-title">Room Size Recommendations</h2>
              <div className="space-y-6">
                {roomSizes.map((room, index) => (
                  <Card key={index} className="elegant-card">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{room.room}</h3>
                        <p className="text-muted-foreground">{room.size}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Recommended Sofa</h4>
                        <p className="text-muted-foreground text-sm">{room.sofa}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Coffee Table</h4>
                        <p className="text-muted-foreground text-sm">{room.table}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Additional Seating</h4>
                        <p className="text-muted-foreground text-sm">{room.chairs}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Furniture Dimensions */}
            <div>
              <h2 className="section-title">Standard Furniture Dimensions</h2>
              <div className="space-y-8">
                {furnitureDimensions.map((category, index) => (
                  <Card key={index} className="elegant-card">
                    <h3 className="text-xl font-semibold text-primary mb-6">{category.category}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 font-medium">Item</th>
                            <th className="text-left py-3 font-medium">Width</th>
                            <th className="text-left py-3 font-medium">Depth</th>
                            <th className="text-left py-3 font-medium">Height</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.items.map((item, itemIndex) => (
                            <tr key={itemIndex} className="border-b border-border/50">
                              <td className="py-3 text-foreground">{item.name}</td>
                              <td className="py-3 text-muted-foreground">{item.width}</td>
                              <td className="py-3 text-muted-foreground">{item.depth}</td>
                              <td className="py-3 text-muted-foreground">{item.height}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tips */}
            <Card className="elegant-card">
              <h3 className="text-xl font-semibold text-primary mb-4">Pro Tips</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>• Leave at least 14-18\" between a coffee table and sofa</p>
                <p>• Dining chairs need 6\" of space to pull out, 30\" to sit comfortably</p>
                <p>• Bedroom furniture should leave 36\" on one side of the bed for easy access</p>
                <p>• Consider ceiling height - standard furniture works best with 8'+ ceilings</p>
                <p>• When in doubt, go smaller - you can always add more pieces later</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SizeGuide;