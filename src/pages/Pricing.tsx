import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Daily Rides",
      price: "₹15/km",
      description: "Perfect for occasional trips",
      badge: null,
      features: [
        "Pay per ride",
        "No commitment",
        "100% Electric vehicles",
        "Verified women drivers",
        "GPS tracking",
        "24/7 support",
      ],
    },
    {
      name: "Monthly Plan",
      price: "₹2,999/month",
      description: "Best for regular commuters",
      badge: "Popular",
      features: [
        "Unlimited rides up to 500km",
        "₹12/km after limit",
        "Priority booking",
        "100% Electric vehicles",
        "Verified women drivers",
        "GPS tracking & SOS",
        "24/7 premium support",
        "Ride sharing option",
      ],
    },
    {
      name: "3-Month Plan",
      price: "₹7,999",
      description: "Save ₹1,000 with quarterly plan",
      badge: "Best Value",
      features: [
        "Unlimited rides up to 1,500km",
        "₹10/km after limit",
        "Priority booking",
        "100% Electric vehicles",
        "Verified women drivers",
        "GPS tracking & SOS",
        "24/7 premium support",
        "Family sharing (2 members)",
        "Free outstation trip (once)",
      ],
    },
    {
      name: "6-Month Plan",
      price: "₹14,999",
      description: "Maximum savings for long-term",
      badge: "Premium",
      features: [
        "Unlimited rides up to 3,000km",
        "₹8/km after limit",
        "VIP priority booking",
        "100% Electric vehicles",
        "Verified women drivers",
        "GPS tracking & SOS",
        "24/7 dedicated support",
        "Family sharing (4 members)",
        "Free outstation trips (2 times)",
        "Airport pickups included",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Choose the plan that works best for you. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in ${
                  plan.badge === "Best Value" ? "border-primary shadow-lg" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-8 pt-6">
                  {plan.badge && (
                    <Badge className="mb-4 mx-auto bg-primary text-white">
                      {plan.badge}
                    </Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full hover:scale-105 transition-transform">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">All Plans Include</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Standard features available across all pricing tiers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Women Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  Verified women drivers, SOS button, and live trip sharing
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly Fleet</h3>
                <p className="text-sm text-muted-foreground">
                  100% electric vehicles for zero-emission rides
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Hidden Charges</h3>
                <p className="text-sm text-muted-foreground">
                  Transparent pricing with no surge or extra fees
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-2 animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Can I cancel my subscription?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel anytime. Monthly plans are non-refundable for the current month,
                  while quarterly and semi-annual plans offer prorated refunds.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What happens after I exceed the km limit?</h3>
                <p className="text-muted-foreground">
                  You'll be charged the per-km rate mentioned in your plan. No fixed charges, just
                  the distance traveled.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Are there any extra charges for night rides?</h3>
                <p className="text-muted-foreground">
                  No! All our plans include 24/7 service with no surge pricing or night charges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Can I share my plan with family?</h3>
                <p className="text-muted-foreground">
                  3-month and 6-month plans include family sharing. Additional members can be added
                  for a small fee on other plans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
