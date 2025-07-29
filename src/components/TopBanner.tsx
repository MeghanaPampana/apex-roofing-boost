import { AlertCircle } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="bg-warning text-warning-foreground py-2 px-4 text-center">
      <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
        <AlertCircle className="h-4 w-4" />
        <span className="font-semibold text-sm md:text-base">
          30 EXCLUSIVE Roofing Appointments or It's Free!
        </span>
      </div>
    </div>
  );
};

export default TopBanner;