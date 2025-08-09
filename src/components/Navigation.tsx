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
      window.location.href = "/#testimonials";
    } else {
      const element = document.getElementById("testimonials");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Testimonials", action: scrollToTestimonials },
    { name: "About us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <nav className="relative z-40"> 
      <div className="max-w-7xl mx-auto px-2 py-2">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="p-3 rounded-xl bg-gradient-to-br from-sleek-green to-sleek-green-dark glow-green">
              <img
                src={roofingLogo}
                alt="Hera Digital Media Logo"
                className="h-12 w-12 filter brightness-0 invert"
              />
            </div>
          </Link>

          {/* Nav Buttons with background */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div className="border border-white/20 rounded-xl px-4 py-2 space-x-6 backdrop-blur flex items-center">
              {navItems.map((item) =>
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
              )}
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
                  {navItems.map((item) =>
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
                  )}

                  {/* Social Media Icons in Mobile */}
                  <div className="flex gap-4 mt-8">
                    <a href="https://www.facebook.com/manojkheradigitalmedia/" target="_blank">
                    <Button variant="glass" size="icon" className="h-10 w-10">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    </a>
                    <a href="https://www.instagram.com/hera.digital.media/?hl=en" target="_blank" rel="noopener noreferrer">
                    <Button variant="glass" size="icon" className="h-10 w-10">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    </a>
                    <a href="https://www.linkedin.com/company/hera-digital-media" target="_blank" rel="noopener noreferrer">
                    <Button variant="glass" size="icon" className="h-10 w-10">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    </a>
                    <a href="https://www.youtube.com/@ManojK_HeraDigitalMedia" target="_blank" rel="noopener noreferrer">
                    <Button variant="glass" size="icon" className="h-10 w-10">
                      <Youtube className="h-5 w-5" />
                    </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Social Media Icons */}
          <div className="hidden lg:flex flex-col gap-2 items-end">
            <a href="https://www.facebook.com/profile.php?id=100006780394281" target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              size="icon"
              className="h-8 w-8 bg-sleek-green hover:bg-sleek-green-bright"
            >
              <Facebook className="h-4 w-4" />
            </Button>
            </a>
            <a href="https://www.instagram.com/hera.digital.media/?hl=en" target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              size="icon"
              className="h-8 w-8 bg-sleek-green hover:bg-sleek-green-bright"
            >
              <Instagram className="h-4 w-4" />
            </Button>
            </a>
            <a href="https://www.linkedin.com/company/hera-digital-media" target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              size="icon"
              className="h-8 w-8 bg-sleek-green hover:bg-sleek-green-bright"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            </a>
            <a href="https://www.youtube.com/@ManojK_HeraDigitalMedia" target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              size="icon"
              className="h-8 w-8 bg-sleek-green hover:bg-sleek-green-bright"
            >
              <Youtube className="h-4 w-4" />
            </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
