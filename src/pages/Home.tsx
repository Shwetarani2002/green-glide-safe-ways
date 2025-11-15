import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { openBookingForm } from "@/lib/googleForm";

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

      {/* Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From quick city rides to long-distance journeys, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "City Rides",
                description: "Quick and convenient rides around the city",
                icon: "🚗",
              },
              {
                title: "Rental Packages",
                description: "Flexible hourly and daily rental options",
                icon: "📅",
              },
              {
                title: "Outstation Trips",
                description: "Comfortable long-distance travel",
                icon: "🗺️",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link to="/services">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Ride?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Quick and easy booking - get started in seconds with our ride booking form.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6"
            onClick={() => openBookingForm()}
          >
            Open Ride Booking Form
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
