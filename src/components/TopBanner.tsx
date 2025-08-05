import { AlertCircle } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="bg-gradient-to-r from-sleek-green via-sleek-green-dark to-sleek-charcoal text-white py-3 px-4">
      <div className="w-[80%] mx-auto flex items-center justify-center gap-2 max-w-7xl">
        <AlertCircle className="h-5 w-5 animate-pulse" />
        <span className="font-bold text-sm md:text-base tracking-wide text-white">
          30 Exclusive Roof Replacement Appointments or You Don’t Pay!
        </span>
        <AlertCircle className="h-5 w-5 animate-pulse" />
      </div>
    </div>
  );
};

export default TopBanner;
