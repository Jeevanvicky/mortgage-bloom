import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      price: "$2,450,000",
      location: "Beverly Hills, CA",
      image: property1,
      beds: 5,
      baths: 4,
      sqft: 4500,
      type: "Villa",
      status: "For Sale" as const,
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      price: "$1,850,000",
      location: "Manhattan, NY",
      image: property2,
      beds: 3,
      baths: 3,
      sqft: 2800,
      type: "Penthouse",
      status: "For Sale" as const,
    },
    {
      id: 3,
      title: "Seaside Apartment",
      price: "$5,500/month",
      location: "Miami Beach, FL",
      image: property3,
      beds: 2,
      baths: 2,
      sqft: 1800,
      type: "Apartment",
      status: "For Rent" as const,
    },
    {
      id: 4,
      title: "Suburban Family Home",
      price: "$850,000",
      location: "Austin, TX",
      image: property1,
      beds: 4,
      baths: 3,
      sqft: 3200,
      type: "House",
      status: "For Sale" as const,
    },
    {
      id: 5,
      title: "Urban Loft",
      price: "$3,200/month",
      location: "Seattle, WA",
      image: property2,
      beds: 1,
      baths: 1,
      sqft: 1200,
      type: "Loft",
      status: "For Rent" as const,
    },
    {
      id: 6,
      title: "Luxury Condo",
      price: "$1,200,000",
      location: "San Francisco, CA",
      image: property3,
      beds: 2,
      baths: 2,
      sqft: 1600,
      type: "Condo",
      status: "Sold" as const,
    },
  ];

  const featuredProperties = properties.slice(0, 3);
  const forSaleProperties = properties.filter(p => p.status === "For Sale");
  const forRentProperties = properties.filter(p => p.status === "For Rent");

  return (
    <section id="properties" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties that represent the finest in luxury living and investment opportunities.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="featured" className="text-sm">Featured</TabsTrigger>
            <TabsTrigger value="sale" className="text-sm">For Sale</TabsTrigger>
            <TabsTrigger value="rent" className="text-sm">For Rent</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProperties.map((property, index) => (
                <div 
                  key={property.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sale" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {forSaleProperties.map((property, index) => (
                <div 
                  key={property.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rent" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {forRentProperties.map((property, index) => (
                <div 
                  key={property.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center animate-scale-in">
          <Button className="btn-primary px-8 py-3 text-lg font-semibold">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;