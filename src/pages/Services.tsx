import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "City Rides",
      description: "Quick and affordable rides within the city. Perfect for daily commutes, shopping trips, or meeting friends.",
      features: [
        "Instant booking",
        "Real-time tracking",
        "Affordable pricing",
        "Available 24/7",
      ],
      color: "from-primary to-primary/80",
    },
    {
      icon: Calendar,
      title: "Rental Packages",
      description: "Flexible hourly or full-day rental plans for your convenience. Great for errands, events, or sightseeing.",
      features: [
        "Hourly bookings",
        "Full-day packages",
        "Dedicated driver",
        "Customizable routes",
      ],
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Navigation,
      title: "Outstation Trips",
      description: "Comfortable long-distance rides with verified drivers. Travel safely to nearby cities and destinations.",
      features: [
        "Long-distance comfort",
        "Verified drivers",
        "Rest stop planning",
        "Competitive pricing",
      ],
      color: "from-primary to-secondary",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Flexible transportation solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl group animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <CardHeader>
                  <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/booking">
                    <Button className="w-full group-hover:scale-105 transition-transform">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book Your Ride", desc: "Choose your service and enter your details" },
              { step: "2", title: "Get Matched", desc: "We assign a verified driver instantly" },
              { step: "3", title: "Track in Real-Time", desc: "Monitor your ride on the map" },
              { step: "4", title: "Enjoy Your Journey", desc: "Relax and travel safely" },
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
