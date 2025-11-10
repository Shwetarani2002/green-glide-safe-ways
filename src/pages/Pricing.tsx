import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Daily Rides",
      price: "₹15",
      period: "per km",
      description: "Perfect for occasional trips",
      features: [
        "Pay per ride",
        "No commitment",
        "Electric vehicles",
        "Basic support",
        "Real-time tracking",
      ],
      popular: false,
    },
    {
      name: "Monthly Plan",
      price: "₹2,999",
      period: "per month",
      description: "Great for regular commuters",
      features: [
        "Unlimited city rides",
        "15% discount",
        "Priority booking",
        "24/7 support",
        "Free cancellations",
        "Women driver preference",
      ],
      popular: true,
    },
    {
      name: "3-Month Plan",
      price: "₹7,999",
      period: "3 months",
      description: "Best value for frequent travelers",
      features: [
        "Unlimited city rides",
        "25% discount",
        "VIP support",
        "Free outstation trips (2/month)",
        "Airport pickups included",
        "Guaranteed driver preference",
      ],
      popular: false,
    },
    {
      name: "6-Month Plan",
      price: "₹14,999",
      period: "6 months",
      description: "Premium package for power users",
      features: [
        "Unlimited rides (city + outstation)",
        "35% discount",
        "Dedicated support manager",
        "Free rental packages (4/month)",
        "Premium vehicles access",
        "Family sharing (up to 4 members)",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Pricing Plans</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Choose the perfect plan for your travel needs
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in relative ${
                  plan.popular
                    ? "border-primary shadow-xl scale-105 lg:scale-110"
                    : "hover:border-primary"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4 fill-white" />
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/booking">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Choose Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Pricing FAQs</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How is distance calculated?",
                  a: "Distance is calculated using GPS tracking from your pickup to drop location, following the shortest route.",
                },
                {
                  q: "Are there any hidden charges?",
                  a: "No hidden charges. All prices are transparent. Tolls and parking fees may apply for long-distance trips.",
                },
                {
                  q: "Can I cancel my subscription?",
                  a: "Yes, you can cancel anytime. For monthly plans, cancellation is effective from the next billing cycle.",
                },
                {
                  q: "Do prices include taxes?",
                  a: "All prices are inclusive of applicable taxes. No additional charges at checkout.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
