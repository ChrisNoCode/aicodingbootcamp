import React from 'react';

export function SupabaseLogo() {
  return (
    <div className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all hover:-translate-y-1 duration-300 flex-shrink-0">
      <div className="relative h-8 md:h-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD]/20 via-[#FF69B4]/20 to-[#FF7F50]/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
        <div className="flex items-center gap-2 relative z-10">
          <svg width="32" height="32" className="md:w-12 md:h-12" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)"/>
            <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fillOpacity="0.2"/>
            <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/>
            <defs>
              <linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                <stop stopColor="#249361"/>
                <stop offset="1" stopColor="#3ECF8E"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                <stop/>
                <stop offset="1" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[#3ECF8E] font-medium text-base md:text-xl">supabase</span>
        </div>
      </div>
    </div>
  );
}