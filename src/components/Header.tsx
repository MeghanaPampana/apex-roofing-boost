import roofingLogo from "@/assets/roofing-logo.png";

const Header = () => {
  return (
    <header className="glass-card border-b border-sleek-charcoal-lighter">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 rounded-xl bg-gradient-to-br from-sleek-green to-sleek-green-dark glow-green">
              <img 
                src={roofingLogo} 
                alt="Roofing Company Logo" 
                className="h-12 w-12 filter brightness-0 invert"
              />
            </div>
          </div>
          <div className="flex-1 max-w-2xl ml-6">
            <h1 className="text-xl md:text-2xl font-bold text-sleek-green mb-2 tracking-tight">
              High Quality, EXCLUSIVE Roofing Appointments
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              No shared leads. Ready to buy. Homeowners looking for the best, not the cheapest.
              <br />
              Fill out the form below right now to learn exactly what we do and how it works!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;