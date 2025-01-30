import { Check } from "lucide-react";

interface Feature {
  name: string;
  price: number;
}

interface PaymentPlanCardProps {
  planType: string; // e.g., "STANDARD"
  planName: string; // e.g., "Bootcamp"
  features: Feature[];
  totalValue: number;
  actualPrice: number;
  ctaLink: string;
  availabilityText: string;
  theme: string;
}

export default function PaymentPlanCard({
  planType,
  planName,
  features,
  totalValue,
  actualPrice,
  ctaLink,
  availabilityText,
  theme,
}: PaymentPlanCardProps) {
  return (
    <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700 relative flex flex-col h-full">
      <div className="text-center mt-8 space-y-2">
        <span
          className={`${theme} px-4 py-1 rounded-full text-sm font-semibold text-white shadow-lg`}
        >
          {planType}
        </span>
        <p className="text-gray-400 text-3xl text-white font-bold">
          {planName}
        </p>
      </div>
      <div className="p-6 lg:p-12 flex flex-col flex-1">
        <div className="space-y-6 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{feature.name}</span>
                  <span className="text-gray-400 font-medium">
                    ${feature.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex items-center justify-between mb-8">
            <div className="w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4">
                <p className="text-lg md:text-xl text-gray-400">Total Value:</p>
                <p className="text-2xl md:text-3xl text-gray-400 line-through font-semibold">
                  ${totalValue.toLocaleString()}
                </p>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-[#9D4EDD] to-[#FF69B4] text-transparent bg-clip-text">
                ${actualPrice.toLocaleString()}
              </p>
              <p className="text-gray-400 mt-2">One-time payment</p>
            </div>
          </div>
          <button
            className={`w-full ${theme} text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl`}
          >
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              Apply Now
            </a>
          </button>
          <p className="text-center text-gray-500 text-sm mt-4">
            {availabilityText}
          </p>
        </div>
      </div>
    </div>
  );
}
