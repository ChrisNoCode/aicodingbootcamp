import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{question}</h3>
          <div className="ml-4">
            <div className="w-8 h-8 rounded-full bg-[#9D4EDD]/10 flex items-center justify-center">
              <ChevronDown
                className={`w-5 h-5 text-[#9D4EDD] transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div
          className={`text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="pb-2">{answer}</p>
        </div>
      </button>
    </div>
  );
}
