import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, MapPinned, AlertCircle, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-women-empowerment.jpg";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Women Drivers",
      description: "Choose from our network of thoroughly verified, professionally trained women drivers for your peace of mind.",
    },
    {
      icon: MapPinned,
      title: "24/7 Tracking",
      description: "Real-time GPS tracking and instant ride sharing with loved ones for complete transparency.",
    },
    {
      icon: AlertCircle,
      title: "Instant SOS Alerts",
      description: "One-tap emergency button connects you instantly to support team and your emergency contacts.",
    },
    {
      icon: Leaf,
      title: "EV Fleet for Eco Safety",
      description: "100% electric vehicles for a cleaner, quieter, and more comfortable ride experience.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Female driver and passenger in electric vehicle" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Women Choose Women Drivers — Because Safety Comes First.
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              EcoRide empowers women with verified female drivers, secure tracking, and 24/7 SOS support.
            </p>
            <Link to="/booking">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full font-semibold hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Book Your Safe Ride
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Empowering Women Through Safe Transportation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
              At EcoRide, we believe every woman deserves to travel without fear. Our platform connects women passengers with verified women drivers, creating a supportive community where safety, comfort, and empowerment come together. With our eco-friendly electric fleet and comprehensive safety features, we're not just providing rides—we're building trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full font-semibold border-2">
                  Learn Our Story
                </Button>
              </Link>
              <Link to="/safety">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold bg-gradient-to-r from-primary to-secondary">
                  Explore Safety Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
            Trusted by Women Across the City
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">5K+</div>
              <div className="text-lg">Women Drivers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-lg">Safe Rides Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg">Safety Rating</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Experience Safe, Empowered Travel?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground animate-fade-in">
            Join thousands of women who have made the switch to safer rides with women drivers.
          </p>
          <Link to="/booking">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full font-semibold hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary animate-fade-in"
            >
              Book Your Ride Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
