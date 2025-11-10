import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroEV from "@/assets/hero-ev-ride.jpg";
import heroWomen from "@/assets/hero-women-safety.jpg";
import heroComfort from "@/assets/hero-comfort.jpg";
import heroCommunity from "@/assets/hero-community.jpg";

const slides = [
  {
    image: heroEV,
    title: "Eco-Friendly Electric Rides",
    description: "Experience sustainable transportation with our fleet of modern electric vehicles. Zero emissions, maximum comfort.",
  },
  {
    image: heroWomen,
    title: "Women's Safety First",
    description: "Travel with confidence. Our verified women drivers ensure a safe and comfortable journey for everyone.",
  },
  {
    image: heroComfort,
    title: "Premium Comfort",
    description: "Enjoy luxurious rides with premium interiors, climate control, and a smooth driving experience.",
  },
  {
    image: heroCommunity,
    title: "Smart Community Rides",
    description: "Share rides, save money, and make new connections while contributing to a greener planet.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className={`max-w-2xl text-white transition-all duration-700 ${
                index === currentSlide ? "animate-slide-in-left" : "opacity-0"
              }`}>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  {slide.description}
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-full transition-transform hover:scale-105"
                >
                  Book Your Ride Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
