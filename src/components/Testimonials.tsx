import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "First-time Homebuyer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b130?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Morgaiste made my dream of homeownership come true. Their team was incredibly professional and guided me through every step of the process. I couldn't be happier with my new home!",
      property: "Modern Townhouse in Austin"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Real Estate Investor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As an investor, I need accurate market data and quick responses. Morgaiste delivers on both fronts. They've helped me build a profitable portfolio with their expert insights.",
      property: "Investment Portfolio - 5 Properties"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Property Seller",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Selling our family home was emotional, but the Morgaiste team handled everything with care and professionalism. They got us above asking price in just two weeks!",
      property: "Family Home in Beverly Hills"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Commercial Buyer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The commercial real estate expertise at Morgaiste is unmatched. They helped us find the perfect location for our business and negotiated excellent terms.",
      property: "Commercial Office Space"
    },
    {
      id: 5,
      name: "Lisa Parker",
      role: "Luxury Home Buyer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Looking for a luxury property requires attention to detail that Morgaiste provides. They understood our vision and found us the perfect waterfront estate.",
      property: "Luxury Waterfront Estate"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-accent fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Morgaiste.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-card bg-gradient-card overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              <Quote className="h-12 w-12 text-accent mx-auto mb-6 opacity-50" />
              
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 font-medium">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Avatar className="h-16 w-16 border-4 border-accent">
                  <AvatarImage 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                  />
                  <AvatarFallback className="bg-primary text-white text-lg">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-left">
                  <h4 className="font-bold text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonials[currentIndex].property}
                  </p>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-primary scale-125" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <Quote className="h-8 w-8 text-accent mb-4 opacity-50" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;