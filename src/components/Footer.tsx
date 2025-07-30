import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import roofingLogo from "@/assets/roofing-logo.png";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "FAQs", path: "/faqs" }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Youtube, label: "YouTube" }
  ];

  return (
    <footer className="bg-sleek-charcoal border-t border-sleek-charcoal-lighter">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company */}
          <div>
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-sleek-green to-sleek-green-dark glow-green">
                <img 
                  src={roofingLogo} 
                  alt="Hera Digital Media Logo" 
                  className="h-8 w-8 filter brightness-0 invert"
                />
              </div>
              <span className="ml-3 text-lg font-bold text-sleek-green">
                Hera Digital Media
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Helping contractors grow their businesses with qualified leads and booked appointments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sleek-green font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-sleek-green transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sleek-green font-semibold mb-6">Follow Us</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href="#"
                  className="flex items-center text-muted-foreground hover:text-sleek-green transition-colors text-sm"
                >
                  <social.icon className="h-4 w-4 mr-3" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sleek-green font-semibold mb-6">Write to Us</h4>
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="h-4 w-4 mr-3" />
                support@heradigital.com
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mr-3" />
                24/7 Seamless Support
              </div>
              <p className="text-muted-foreground text-sm">Secure and Safe</p>
              <Button variant="gradient" size="sm" className="mt-4">
                Schedule a Call with Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sleek-charcoal-lighter pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Hera Digital Media. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;