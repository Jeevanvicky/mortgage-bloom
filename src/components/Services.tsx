import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Calculator, 
  TrendingUp, 
  Shield, 
  Users, 
  FileText,
  Search,
  DollarSign,
  Clock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Property Sales",
      description: "Expert guidance through buying and selling residential and commercial properties with market expertise.",
      features: ["Market Analysis", "Pricing Strategy", "Negotiation Support"]
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Mortgage Solutions",
      description: "Comprehensive financing options and mortgage consultation to secure the best rates for your investment.",
      features: ["Rate Comparison", "Pre-approval", "Refinancing"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Investment Advisory",
      description: "Strategic investment guidance to maximize your real estate portfolio returns and long-term growth.",
      features: ["Portfolio Analysis", "ROI Calculation", "Market Trends"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Property Management",
      description: "Full-service property management including tenant screening, maintenance, and rental optimization.",
      features: ["Tenant Screening", "Maintenance", "Rent Collection"]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Property Valuation",
      description: "Accurate property appraisals and market value assessments using advanced analytics and local expertise.",
      features: ["Market Valuation", "Comparative Analysis", "Investment Potential"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Legal Support",
      description: "Complete legal assistance for property transactions, contracts, and regulatory compliance.",
      features: ["Contract Review", "Title Search", "Legal Documentation"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique needs and investment goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-muted/50 rounded-3xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our <span className="text-gradient">Process</span></h3>
            <p className="text-lg text-muted-foreground">Simple steps to your dream property</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Search className="h-6 w-6" />, title: "Search", desc: "Browse our curated listings" },
              { icon: <Users className="h-6 w-6" />, title: "Consult", desc: "Meet with our experts" },
              { icon: <DollarSign className="h-6 w-6" />, title: "Finance", desc: "Secure your financing" },
              { icon: <Clock className="h-6 w-6" />, title: "Close", desc: "Complete your purchase" }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;