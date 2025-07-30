import roofingLogo from "@/assets/roofing-logo.png";

const Header = () => {
  return (
    <header className="glass-card border-b border-sleek-charcoal-lighter">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-center">
          <div className="max-w-3xl text-center">
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