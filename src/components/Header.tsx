import roofingLogo from "@/assets/roofing-logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={roofingLogo} 
              alt="Roofing Company Logo" 
              className="h-12 w-12 mr-4"
            />
          </div>
          <div className="flex-1 max-w-2xl">
            <h1 className="text-xl md:text-2xl font-bold text-roofing-blue mb-1">
              Top-Shelf Roofing Appointments!
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              No shared leads here—every client is primed and ready to buy. 
              Homeowners are seeking quality over mere bargain deals. 
              Fill out the form below pronto to unveil what we bring to the table and how our magic unfolds!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;