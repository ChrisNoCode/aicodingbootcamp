import { faqItems } from "../data/faqItems";
import { FAQItem } from "./FAQItem";

export default function FrequentlyAskedQuestions() {
  return (
    <div className="bg-gray-950 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about the program
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
