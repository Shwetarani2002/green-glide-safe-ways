import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Corporate Professional",
      rating: 5,
      text: "Finally, a ride service where I feel completely safe! Having women drivers makes such a difference. I can travel late from work without worrying. The tracking feature also keeps my family at ease. EcoRide truly understands women's safety needs.",
      avatar: "PS",
    },
    {
      name: "Anjali Verma",
      role: "College Student",
      rating: 5,
      text: "As a student traveling to late evening classes, my parents were always worried. With EcoRide's women drivers and SOS button, they're finally at peace. I love that I can share my ride details instantly. Plus, the electric cars are so smooth!",
      avatar: "AV",
    },
    {
      name: "Nisha Gupta",
      role: "Healthcare Professional",
      rating: 5,
      text: "Working night shifts at the hospital meant unsafe commutes—until I found EcoRide. The women drivers are professional, caring, and understand our concerns. The real-time tracking and emergency features give me confidence every single ride.",
      avatar: "NG",
    },
    {
      name: "Meera Patel",
      role: "Marketing Manager",
      rating: 5,
      text: "I've recommended EcoRide to all my female colleagues. The ability to choose women drivers is a game-changer! The drivers are skilled, friendly, and professional. Finally, a service that prioritizes our comfort and safety.",
      avatar: "MP",
    },
    {
      name: "Divya Singh",
      role: "Entrepreneur",
      rating: 5,
      text: "As someone who travels frequently for business meetings, EcoRide has been a blessing. The monthly plan is cost-effective, and the women driver preference means I always feel secure. The eco-friendly aspect is just the cherry on top!",
      avatar: "DS",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">What Our Customers Say</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Real experiences from real people who love EcoRide
          </p>
        </div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-2xl animate-fade-in">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <Avatar className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary">
                    <AvatarFallback className="text-2xl text-white font-bold">
                      {testimonials[currentIndex].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-2xl text-center mb-8 text-foreground leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="text-center">
                  <div className="font-semibold text-xl">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 hover:scale-110 transition-transform"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 hover:scale-110 transition-transform"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">More Happy Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-secondary">
                      <AvatarFallback className="text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.text}</p>
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
              <div className="text-5xl font-bold mb-2">4.9★</div>
              <div className="text-lg">Average Rating</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-lg">Rides Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold mb-2">99%</div>
              <div className="text-lg">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
