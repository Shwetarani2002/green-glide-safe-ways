import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Safety",
      description: "Your safety is our top priority. Every driver is verified, every ride is tracked, and emergency support is always available.",
    },
    {
      icon: Target,
      title: "Sustainability",
      description: "We're committed to reducing carbon emissions with our 100% electric fleet, making every ride a step towards a greener future.",
    },
    {
      icon: Award,
      title: "Service Excellence",
      description: "We strive for excellence in every interaction, ensuring comfort, reliability, and exceptional service quality.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">About EcoRide</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Revolutionizing transportation with safety, sustainability, and service at our core.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground animate-fade-in">
              <p className="text-lg leading-relaxed mb-6">
                EcoRide was born from a simple yet powerful vision: to create a transportation service that prioritizes both people and the planet. Founded in 2025, we recognized the growing need for safer, more sustainable urban mobility solutions, especially for women and environmentally conscious travelers.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as a small fleet of electric vehicles in Lucknow has grown into a trusted transportation partner for thousands. Our commitment to women's safety, environmental responsibility, and exceptional service has made us the preferred choice for modern commuters.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to innovate and expand, always keeping our core values at the forefront of everything we do. Every ride with EcoRide is more than just a journey—it's a statement for a better, safer, and cleaner tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 animate-fade-in">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              To provide safe, reliable, and eco-conscious transportation that empowers communities, protects our environment, and ensures every passenger feels secure and valued throughout their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">Verified Drivers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg">Electric Fleet</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">Availability</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
