import { SupabaseLogo } from "./SupabaseLogo";

export default function LogoSection() {
  return (
    <div className="bg-gray-950/50 backdrop-blur-sm py-8 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl font-semibold tracking-wider uppercase text-white mb-6">
            Master Cutting Edge Tools
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-16 pb-6 px-4 relative mx-auto max-w-5xl">
          <div className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all hover:-translate-y-1 duration-300 flex-shrink-0">
            <div className="relative h-16">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD]/20 via-[#FF69B4]/20 to-[#FF7F50]/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <img
                loading="lazy"
                decoding="async"
                src="https://i.ibb.co/6n5JWjz/Screenshot-2025-01-22-at-11-05-40-AM-1.png"
                alt="Replit"
                className="h-full w-auto object-contain relative z-10 max-w-[160px]"
              />
            </div>
          </div>
          <div className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all hover:-translate-y-1 duration-300 flex-shrink-0">
            <div className="relative h-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD]/20 via-[#FF69B4]/20 to-[#FF7F50]/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <img
                loading="lazy"
                decoding="async"
                src="https://i.ibb.co/rFvZtDn/Bolt-1.png"
                alt="Bolt"
                className="h-full w-auto object-contain relative z-10 max-w-[140px]"
              />
            </div>
          </div>
          <div className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all hover:-translate-y-1 duration-300 flex-shrink-0">
            <div className="relative h-8 w-32">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD]/20 via-[#FF69B4]/20 to-[#FF7F50]/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <img
                loading="lazy"
                decoding="async"
                src="https://lovable.dev/_next/image?url=%2Fimg%2Flovable-logo-text-nav.png&w=256&q=75"
                alt="Lovable"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <SupabaseLogo />
          <div className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all hover:-translate-y-1 duration-300 flex-shrink-0">
            <div className="relative h-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD]/20 via-[#FF69B4]/20 to-[#FF7F50]/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <img
                loading="lazy"
                decoding="async"
                src="https://i.ibb.co/TcwyL8V/header-hu10062559923727225449-1.png"
                alt="Netlify"
                className="h-full w-auto object-contain relative z-10 max-w-[140px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-gray-950 pointer-events-none" />
    </div>
  );
}
