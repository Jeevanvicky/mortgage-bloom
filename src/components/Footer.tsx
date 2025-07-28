import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Contact", href: "#contact" }
    ],
    services: [
      { label: "Buy Property", href: "#buy" },
      { label: "Sell Property", href: "#sell" },
      { label: "Rent Property", href: "#rent" },
      { label: "Property Management", href: "#management" },
      { label: "Investment Advisory", href: "#investment" }
    ],
    resources: [
      { label: "Market Reports", href: "#reports" },
      { label: "Property Guides", href: "#guides" },
      { label: "Mortgage Calculator", href: "#calculator" },
      { label: "Blog", href: "#blog" },
      { label: "FAQ", href: "#faq" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Disclaimer", href: "#disclaimer" }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-navy text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent text-navy rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-navy font-bold text-2xl">M</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Morgaiste</h3>
                  <p className="text-sm text-gray-300">Real Estate Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner in premium real estate. We help you find, buy, sell, and invest in properties that match your dreams and goals.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>info@morgaiste.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>123 Business District, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-accent">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-gray-300 hover:text-accent transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-accent">Services</h4>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-gray-300 hover:text-accent transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-accent">Resources</h4>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-gray-300 hover:text-accent transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-accent">Newsletter</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Subscribe to get the latest property updates and market insights.
                  </p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Button className="w-full btn-accent">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-300">
              © 2024 Morgaiste Real Estate Solutions. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-navy transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;