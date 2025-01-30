import { Shield } from "lucide-react";

export default function MoneyBackGuarantee() {
  return (
    <div className="w-full mt-16 text-center">
      <div className="inline-flex items-center gap-2 bg-emerald-900/50 backdrop-blur-sm text-emerald-200 px-6 py-3 rounded-full">
        <Shield className="w-5 h-5" />
        <span className="font-medium">
          14-Day Money-Back Guarantee on All Plans
        </span>
      </div>
    </div>
  );
}
