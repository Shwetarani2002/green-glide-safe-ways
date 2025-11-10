import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, MapPin, Clock } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received!",
      description: "We'll confirm your ride shortly. Check your phone for updates.",
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-muted">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Book Your Ride</h1>
          <p className="text-lg animate-fade-in">Quick, easy, and secure booking process</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 shadow-xl animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Ride Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Type */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="city">City Ride</SelectItem>
                        <SelectItem value="rental">Rental Package</SelectItem>
                        <SelectItem value="outstation">Outstation Trip</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Pickup Location */}
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="pickup"
                        placeholder="Enter pickup address"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Drop Location */}
                  <div className="space-y-2">
                    <Label htmlFor="drop">Drop Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="drop"
                        placeholder="Enter drop address"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div className="space-y-2">
                    <Label>Pickup Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Picker */}
                  <div className="space-y-2">
                    <Label htmlFor="time">Pickup Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="time"
                        type="time"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-lg py-6 font-semibold hover:scale-105 transition-transform"
                  >
                    Confirm Booking
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="mt-8 border-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Google Maps integration</p>
                    <p className="text-sm">Live location tracking available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
