import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Award, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "We build trust through thorough driver verification, transparent operations, and unwavering commitment to women's safety.",
    },
    {
      icon: Heart,
      title: "Safety",
      description: "Safety is non-negotiable. Every driver is verified, every ride is tracked, and emergency support is always just a tap away.",
    },
    {
      icon: Award,
      title: "Empowerment",
      description: "We empower women—both as passengers and drivers—creating opportunities for independence, growth, and community.",
    },
    {
      icon: Target,
      title: "Sustainability",
      description: "Our 100% electric fleet ensures every ride contributes to a cleaner, greener future for our planet.",
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
                EcoRide was born from a powerful conversation between two women who shared their experiences of feeling unsafe during late-night commutes. They envisioned a world where women could travel without fear, where choosing a ride meant choosing peace of mind. In 2023, that vision became reality.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We started with a bold commitment: connecting women passengers with verified women drivers. What began as a small initiative in Lucknow has blossomed into a movement, empowering thousands of women—both as passengers and drivers. Our platform creates opportunities for women to earn independently while providing safe, comfortable rides for others.
              </p>
              <p className="text-lg leading-relaxed">
                Today, EcoRide stands as a testament to what's possible when safety, empowerment, and sustainability unite. Every ride with us is more than transportation—it's a statement that women deserve safe, empowered travel, and a cleaner future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-center mb-8 animate-fade-in">
              To revolutionize urban transportation by empowering women through safe, women-led mobility. We're building a platform where verified women drivers provide secure rides in eco-friendly vehicles, creating opportunities for independence while ensuring every journey is met with trust, respect, and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="text-lg">Women Empowered</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold mb-2">5K+</div>
              <div className="text-lg">Women Drivers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-lg">Safe Rides</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg">Safety Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
