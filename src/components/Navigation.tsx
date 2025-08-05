import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, Instagram, Linkedin, Youtube, Menu } from "lucide-react";
import roofingLogo from "@/assets/roofing-logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const scrollToTestimonials = () => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = "/#testimonials";
    } else {
      // If on home page, scroll to testimonials
      const element = document.getElementById("testimonials");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Testimonials", action: scrollToTestimonials },
    // { name: "Disclaimer", path: "/disclaimer" },
    { name: "About us", path: "/about" },
    { name: "Our Services", path: "/services" },
    // { name: "Ready to Book Appointment", path: "/book-appointment" },
    { name: "FAQs", path: "/faqs" }
  ];

  return (
    <nav className="floating-nav border border-white/20 relative z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo moved next to nav items */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <div className="p-3 rounded-xl bg-gradient-to-br from-sleek-green to-sleek-green-dark glow-green">
                <img 
                  src={roofingLogo} 
                  alt="Hera Digital Media Logo" 
                  className="h-12 w-12 filter brightness-0 invert"
                />
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                    isActive(item.path)
                      ? "text-sleek-green"
                      : "text-foreground hover:text-sleek-green"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="text-sm font-medium transition-colors duration-300 text-foreground hover:text-sleek-green whitespace-nowrap"
                >
                  {item.name}
                </button>
              )
            ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="glass" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    item.path ? (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`text-lg font-medium transition-colors duration-300 ${
                          isActive(item.path)
                            ? "text-sleek-green"
                            : "text-foreground hover:text-sleek-green"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        key={item.name}
                        onClick={item.action}
                        className="text-lg font-medium transition-colors duration-300 text-foreground hover:text-sleek-green text-left"
                      >
                        {item.name}
                      </button>
                    )
                  ))}
                  
                  {/* Social Media Icons in Mobile */}
                  <div className="flex gap-4 mt-8">
                    <Button variant="glass" size="icon" className="h-10 w-10">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="glass" size="icon" className="h-10 w-10">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button variant="glass" size="icon" className="h-10 w-10">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="glass" size="icon" className="h-10 w-10">
                      <Youtube className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Social Media Icons */}
          <div className="hidden lg:flex flex-col gap-2">
            <Button variant="default" size="icon" className="h-8 w-8 bg-sleek-green hover:bg-sleek-green-bright">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="default" size="icon" className="h-8 w-8 bg-sleek-green hover:bg-sleek-green-bright">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="default" size="icon" className="h-8 w-8 bg-sleek-green hover:bg-sleek-green-bright">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="default" size="icon" className="h-8 w-8 bg-sleek-green hover:bg-sleek-green-bright">
              <Youtube className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
