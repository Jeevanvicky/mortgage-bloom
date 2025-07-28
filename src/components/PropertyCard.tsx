import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  status: "For Sale" | "For Rent" | "Sold";
}

const PropertyCard = ({ 
  id, 
  title, 
  price, 
  location, 
  image, 
  beds, 
  baths, 
  sqft, 
  type, 
  status 
}: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    "For Sale": "bg-green-500",
    "For Rent": "bg-blue-500", 
    "Sold": "bg-gray-500"
  };

  return (
    <Card 
      className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Status Badge */}
        <Badge className={`absolute top-4 left-4 ${statusColors[status]} text-white border-0`}>
          {status}
        </Badge>
        
        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <Heart 
            className={`h-5 w-5 transition-colors ${
              isLiked ? 'text-red-500 fill-current' : 'text-gray-600'
            }`} 
          />
        </button>
        
        {/* Type Badge */}
        <Badge variant="secondary" className="absolute bottom-4 left-4 bg-white/90 text-foreground">
          {type}
        </Badge>

        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-navy/80 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button className="btn-primary transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="text-2xl font-bold text-primary">{price}</div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Bed className="h-4 w-4" />
              <span>{beds}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="h-4 w-4" />
              <span>{baths}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Square className="h-4 w-4" />
              <span>{sqft} sqft</span>
            </div>
          </div>
        </div>

        <Button 
          className="w-full mt-4 btn-primary transform transition-all duration-300 hover:scale-105"
          variant="default"
        >
          Contact Agent
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;