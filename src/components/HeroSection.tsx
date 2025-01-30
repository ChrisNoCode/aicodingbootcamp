import { Grid } from "./Grid";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gray-950">
      <Grid height="100vh" opacity={0.3} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40">
        <div
          className="text-center max-w-4xl mx-auto relative"
          style={{ zIndex: 2 }}
        >
          <div className="inline-block mb-6">
            <span className="bg-[#9D4EDD]/30 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              Coaching Bootcamp
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
            Build Your App in 30 Days
            <span className="block mt-4 bg-gradient-to-r from-[#9D4EDD] via-[#FF69B4] to-[#FF7F50] text-transparent bg-clip-text leading-tight drop-shadow-lg">
              With AI Coding
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Designed for non technical entrepreneurs and business owners.
          </p>
          <div className="flex flex-col items-center space-y-6 mb-12">
            <a
              href="/#plans"
              rel="noopener noreferrer"
              className="relative bg-white text-black px-12 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 backdrop-blur-sm"
            >
              Apply Now - Limited Spots Available
            </a>
            <p className="text-gray-300 font-medium drop-shadow-md relative backdrop-blur-sm bg-gray-950/10 px-4 py-1 rounded-full">
              Next Cohort: March 3rd - March 28th, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
