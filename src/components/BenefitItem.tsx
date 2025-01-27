import { ElementType, useEffect, useRef } from 'react';

interface BenefitItemProps {
  icon: ElementType;
  title: string;
  description: string;
  delay?: number;
}

export function BenefitItem({ icon: Icon, title, description, delay = 0 }: BenefitItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Initial fade in
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold: 0.3, rootMargin: '50px 0px -50px 0px' }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={itemRef}
      className="flex flex-col items-center text-center group opacity-0 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] relative"
      style={{ 
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)'
      }}
    >
      <div className="w-20 h-20 rounded-full bg-gray-800/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#9D4EDD]/20 transition-all duration-500 ease-out mb-6 group-hover:scale-110">
        <Icon className="w-8 h-8 text-[#9D4EDD] group-hover:scale-110 transition-transform stroke-[1.25]" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);