import { Card, CardContent } from "@/components/ui/card";
import { Shield, MapPinned, AlertCircle, Phone } from "lucide-react";

const Safety = () => {
  const features = [
    {
      icon: Shield,
      title: "Driver Verification",
      description: "Every driver undergoes thorough background checks, license verification, and professional training before joining our platform.",
      details: [
        "Government ID verification",
        "Police background check",
        "Driving license validation",
        "Professional training certification",
      ],
    },
    {
      icon: MapPinned,
      title: "Live Ride Tracking",
      description: "Track your ride in real-time and share your journey with family and friends for added peace of mind.",
      details: [
        "Real-time GPS tracking",
        "Share ride details instantly",
        "Route monitoring",
        "Estimated arrival time",
      ],
    },
    {
      icon: AlertCircle,
      title: "SOS Alert System",
      description: "Quick access side button for emergency situations. Instantly alert our support team and your emergency contacts.",
      details: [
        "One-tap emergency button",
        "Automatic alert to support",
        "Location sharing with authorities",
        "Emergency contact notification",
      ],
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Our dedicated support team is available round the clock to assist you with any concerns or emergencies.",
      details: [
        "24/7 helpline availability",
        "Instant chat support",
        "Emergency response team",
        "Multilingual assistance",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Safety Features</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Your safety is our top priority. Multiple layers of protection ensure a secure journey.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-20">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Women Safety Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 animate-fade-in">Special Focus on Women's Safety</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 hover:shadow-lg transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">👩‍✈️</div>
                  <h3 className="text-xl font-semibold mb-2">Women Drivers</h3>
                  <p className="text-muted-foreground">Request rides with verified women drivers for added comfort</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                  <p className="text-muted-foreground">Your personal information is encrypted and protected</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🚨</div>
                  <h3 className="text-xl font-semibold mb-2">Instant Alerts</h3>
                  <p className="text-muted-foreground">One-touch emergency button connects you to help immediately</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Trusted by Thousands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg">Safety Rating</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg">Safe Rides</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">Verified Drivers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;
