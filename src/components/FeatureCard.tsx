import { ElementType, useEffect, useRef } from 'react';

interface FeatureCardProps {
  icon: ElementType;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a staggered delay based on the card's index
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, 150 * index);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border border-gray-700">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-gray-950 p-4 rounded-xl shadow-lg group-hover:-translate-y-1 transition-transform relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] via-[#FF69B4] to-[#FF7F50] rounded-xl opacity-20" />
          <Icon className="w-8 h-8 stroke-[1.5] stroke-[#9D4EDD] text-transparent" />
        </div>
      </div>
      <div className="pt-8">
        <h3 className="text-2xl font-bold mb-4 text-white text-center">{title}</h3>
        <p className="text-gray-400 text-center leading-relaxed">{description}</p>
      </div>
    </div>
  );
}