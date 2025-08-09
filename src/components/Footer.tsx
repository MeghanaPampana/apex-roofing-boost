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
    { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/manojkheradigitalmedia/"},
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/hera.digital.media/?hl=en" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/hera-digital-media"},
    { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@ManojK_HeraDigitalMedia" }
  ];

  return (
    <footer className="relative border-t border-sleek-charcoal-lighter">
      {/* <div className="absolute inset-0 bg-gradient-radial from-sleek-green/20 via-sleek-charcoal/80 to-sleek-charcoal"></div> */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #062b00, #128000, #062b00)",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
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
              <span className="ml-3 text-lg font-bold text-white">
                Hera Digital Media
              </span>
            </div>
            {/* <p className="text-muted-foreground text-sm leading-relaxed">
              Helping contractors grow their businesses with qualified leads and booked appointments.
            </p> */}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-6">Socials</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-white transition-colors text-sm"
                >
                  <social.icon className="h-4 w-4 mr-3" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Write to Us</h4>
            <div className="space-y-4">
              <div className="flex items-center text-white text-sm">
                <Mail className="h-4 w-4 mr-3" />
                  <a 
                    href="mailto:contact@heradigitalmedia.com" 
                    className="hover:underline"
                  >
                  contact@heradigitalmedia.com
                  </a>
              </div>              
              <Button variant="gradient" size="sm" className="mt-4">
                Schedule a Call with us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sleek-charcoal-lighter pt-8">
          <p className="text-center text-white text-sm">
            © 2025 Hera Digital Media. All Rights Reserved. Designed by Illuminavtion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;