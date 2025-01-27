import { ElementType } from 'react';

interface PartnerLogoProps {
  icon?: ElementType;
  image?: string;
  name: string;
}

export function PartnerLogo({ icon: Icon, image, name }: PartnerLogoProps) {
  return (
    <div className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all hover:-translate-y-1 duration-300 flex-shrink-0">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD]/20 via-[#FF69B4]/20 to-[#FF7F50]/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
        {Icon && <Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors relative z-10" />}
        {image && <img src={image} alt={name} className="w-8 h-8 object-contain relative z-10" />}
      </div>
      <span className="mt-3 text-gray-500 text-sm font-medium group-hover:text-gray-300 transition-colors whitespace-nowrap">{name}</span>
    </div>
  );
}