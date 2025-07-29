import { AlertCircle } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="bg-gradient-to-r from-sleek-green via-sleek-green-dark to-sleek-charcoal text-white py-3 px-4">
      <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
        <AlertCircle className="h-5 w-5 animate-pulse" />
        <span className="font-bold text-sm md:text-base tracking-wide">
          30 EXCLUSIVE Roofing Appointments or It's Free!
        </span>
        <AlertCircle className="h-5 w-5 animate-pulse" />
      </div>
    </div>
  );
};

export default TopBanner;