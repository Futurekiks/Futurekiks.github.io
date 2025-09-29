import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">Cookie Policy</h1>
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
              <h2 className="text-2xl font-semibold text-primary mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are stored on your computer or mobile device when 
                you visit a website. They help websites remember your preferences and improve your 
                browsing experience.
              </p>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">How We Use Cookies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Keep you logged in to your account</li>
                  <li>Analyze website traffic and performance</li>
                  <li>Personalize content and ads</li>
                  <li>Remember items in your shopping cart</li>
                </ul>
              </div>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable 
                    core functionality such as security, network management, and accessibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Functionality Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies enable the website to provide enhanced functionality and 
                    personalization based on your interactions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies track your browsing habits to deliver advertisements that are 
                    more relevant to you and your interests.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Managing Cookies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You can control cookies through your browser settings:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Most browsers allow you to view, delete, and block cookies</li>
                  <li>You can set your browser to notify you when cookies are sent</li>
                  <li>Blocking cookies may affect website functionality</li>
                  <li>You can opt-out of targeted advertising cookies through industry tools</li>
                </ul>
              </div>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                We may use third-party services that set cookies on your device. These include 
                analytics providers, advertising networks, and social media platforms. Each 
                third party has their own privacy and cookie policies.
              </p>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or applicable laws. We will notify you of any material changes by 
                posting the updated policy on our website.
              </p>
            </Card>

            <Card className="elegant-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our use of cookies, please contact us at 
                privacy@panto.com or call (555) 123-4567.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;