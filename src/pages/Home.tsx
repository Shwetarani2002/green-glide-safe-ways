import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Electric Fleet",
      description: "Contribute to a cleaner environment with every ride in our eco-friendly electric vehicles.",
    },
    {
      icon: Shield,
      title: "Verified Drivers",
      description: "All our drivers are thoroughly verified and trained to ensure your safety and comfort.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Book a ride anytime, anywhere. We're always here when you need us.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Share rides, reduce costs, and connect with your community while saving the planet.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose EcoRide?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of transportation with safety, sustainability, and comfort at the forefront.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Experience the Future of Transportation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Join thousands of satisfied customers who have made the switch to safer, greener rides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full font-semibold hover:scale-105 transition-transform">
                Book a Ride Now
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
