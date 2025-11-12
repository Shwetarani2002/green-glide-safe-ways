import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, Shield, Clock, Users, MapPin, Navigation, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleQuickBook = () => {
    // Navigate to pricing page with the data
    navigate("/pricing");
  };

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

      {/* Quick Booking Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Ride</h2>
              <p className="text-lg text-muted-foreground">
                Quick and easy booking - get started in seconds
              </p>
            </div>

            <Card className="border-2 shadow-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="pickup" className="text-base font-semibold">
                      Pickup Location
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="pickup"
                        placeholder="Enter pickup location"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dropoff" className="text-base font-semibold">
                      Drop-off Location
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="dropoff"
                        placeholder="Enter drop-off location"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="datetime" className="text-base font-semibold">
                      Date & Time
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="datetime"
                        type="datetime-local"
                        value={datetime}
                        onChange={(e) => setDatetime(e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleQuickBook}
                    size="lg"
                    className="w-full h-12 text-lg font-semibold hover:scale-105 transition-transform"
                  >
                    Book Now
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Need subscription plans?{" "}
                    <Link to="/pricing" className="text-primary hover:underline font-semibold">
                      View pricing options
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Google Form Embed */}
            <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="border-2 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfuANuRlvm7qAhpEBix3bScRZQFlpHj32PbvffEC5ZnNJGVNg/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full"
                  >
                    Loading…
                  </iframe>
                </CardContent>
              </Card>
            </div>
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
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 rounded-full font-semibold hover:scale-105 transition-transform"
              onClick={() => navigate("/pricing")}
            >
              View Pricing Plans
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all"
              onClick={() => navigate("/services")}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
