import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/our-story" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ],
    products: [
      { name: "Living Room", href: "/living-room" },
      { name: "Bedroom", href: "/bedroom" },
      { name: "Dining Room", href: "/dining-room" },
      { name: "Office", href: "/office" }
    ],
    support: [
      { name: "Help Center", href: "/help-center" },
      { name: "Shipping Info", href: "/shipping-info" },
      { name: "Returns", href: "/returns" },
      { name: "Size Guide", href: "/size-guide" }
    ]
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-3xl font-serif font-bold">Panto</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Creating beautiful, sustainable furniture that transforms your living space 
                into a sanctuary of comfort and style.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, Mail].map((Icon, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/10"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Products</h3>
              <ul className="space-y-4">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-16 border-t border-primary-foreground/20">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-primary-foreground/80 mb-6">
                Subscribe to our newsletter for the latest furniture trends, exclusive offers, and design inspiration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button className="btn-accent">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Panto Furniture. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;