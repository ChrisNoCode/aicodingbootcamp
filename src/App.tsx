import {
  Calendar,
  Code2,
  Users,
  Rocket,
  Award,
  Gift,
  Video,
  MessageSquare,
  Laptop,
  Brain,
  Network,
  Check,
  Shield,
} from "lucide-react";
import { AnimatedCircle } from "./components/AnimatedCircle";
import { Grid } from "./components/Grid";
import { FloatingBlurs } from "./components/FloatingBlurs";
import { FeatureCard } from "./components/FeatureCard";
import { VideoTestimonial } from "./components/VideoTestimonial";
import { SupabaseLogo } from "./components/SupabaseLogo";
import { BenefitItem } from "./components/BenefitItem";
import { WeekScheduleCollapsible } from "./components/WeekSchedule";
import { FAQItem } from "./components/FAQItem";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { weeklySchedule } from "./data/weeklySchedule";
import { faqItems } from "./data/faqItems";

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <AnimatedCircle />
      {/* Hero Section */}
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

      {/* Logo Section */}
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

      {/* Benefits Section */}
      <div className="py-12 md:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] relative z-10"
            style={{
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.classList.add("animate-in");
                      // Trigger a reflow to ensure the animation plays
                      void el.offsetWidth;
                    }
                  },
                  {
                    threshold: 0.2,
                    rootMargin: "100px 0px 0px 0px",
                  }
                );
                observer.observe(el);
              }
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Stop Procrastinating. Start Building.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our program to break through the code barrier and launch with
              confidence!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <BenefitItem
              icon={Laptop}
              title="Launch Your App Idea"
              description="Work with your own dedicated coach to strategize, scope and build your product in 30 days flat."
              delay={400}
            />
            <BenefitItem
              icon={Brain}
              title="Learn AI Coding"
              description="Master the latest AI-powered development tools and techniques. Build faster, launch smarter."
              delay={500}
            />
            <BenefitItem
              icon={Network}
              title="Build Your Network"
              description="Create valuable relationships with like-minded entrepreneurs that extend beyond the program."
              delay={600}
            />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-950 py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-2xl overflow-hidden backdrop-blur-[2px] opacity-0 -translate-x-12 transition-all duration-1000 ease-out"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.style.opacity = "1";
                      el.style.transform = "translateX(0)";
                    }
                  },
                  { threshold: 0.2 }
                );
                observer.observe(el);
              }
            }}
          >
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#9D4EDD] via-[#FF69B4] to-[#FF7F50] opacity-70" />
            <div className="relative rounded-2xl bg-gray-950/95 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD]/5 via-[#FF69B4]/5 to-[#FF7F50]/5" />
              <div className="md:grid md:grid-cols-5 md:gap-12 flex flex-col">
                <div className="relative md:col-span-2">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://cdn.prod.website-files.com/633dd21de4e0c4031d70945f/650b3969d49f04331d49671d_914c9bd1-9f44-478c-bee1-5adce7dca637.webp"
                    alt="Founder"
                    className="h-full w-full object-cover md:absolute md:inset-0"
                  />
                </div>
                <div className="relative p-8 md:p-12 md:col-span-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9D4EDD] via-[#FF69B4] to-[#FF7F50] flex items-center justify-center mb-8">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <blockquote>
                    <p className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed">
                      "I built my MVP in 4 weeks with WeAreNoCode and I now have
                      $25K in monthly revenue and just raised $3M from
                      investors. I'm so grateful."
                    </p>
                    <footer>
                      <p className="text-lg font-semibold text-white">
                        Heidi Ojha
                      </p>
                      <p className="text-gray-400">Founder of Aware Health</p>
                    </footer>
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                        alt="Student"
                        className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-gray-900"
                      />
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                        alt="Student"
                        className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-gray-900"
                      />
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                        alt="Student"
                        className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-gray-900"
                      />
                    </div>
                    <p className="text-sm text-gray-400">
                      Join 500+ founders who've launched their apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="features-section bg-gray-950 py-12 md:py-20 relative">
        <FloatingBlurs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Hands-on Support To Go From Idea To Launch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to build and launch your app with confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-8">
            <FeatureCard
              index={0}
              icon={Calendar}
              title="Personalized Strategy Session"
              description="Get a tailored roadmap for your app with expert guidance on architecture and implementation strategy."
            />
            <FeatureCard
              index={1}
              icon={MessageSquare}
              title="1-on-1 Technical Coaching"
              description="Get personalized mentorship to overcome technical challenges and accelerate your progress."
            />
            <FeatureCard
              index={2}
              icon={Video}
              title="Live Learning Sessions"
              description="Master cutting-edge AI coding tools through interactive workshops and real-time guidance."
            />
            <FeatureCard
              index={3}
              icon={Code2}
              title="Live Building Sessions"
              description="Learn by doing with hands-on coding sessions where we build real features together in real-time."
            />
            <FeatureCard
              index={4}
              icon={Users}
              title="Speed Networking Events"
              description="Connect with fellow entrepreneurs and build lasting relationships in the tech ecosystem."
            />
            <FeatureCard
              index={5}
              icon={Gift}
              title="$300K in Software Discounts"
              description="Access exclusive deals on essential tools and services to power your startup."
            />
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="curriculum-section bg-gray-950 py-24 relative">
        <div
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#9D4EDD]/30 via-[#FF69B4]/30 to-[#FF7F50]/30 blur-[120px] pointer-events-none opacity-0 transition-opacity duration-1000"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
          ref={(el) => {
            if (el) {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    el.style.opacity = "1";
                  }
                },
                { threshold: 0.2 }
              );
              observer.observe(el);
            }
          }}
        />
        <Grid opacity={0.4} fadeStart={0.1} fadeEnd={0.2} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Journey to Launch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A structured 4-week program to take you from idea to launched
              application
            </p>
          </div>
          <div className="space-y-6">
            {weeklySchedule.map((schedule, index) => (
              <WeekScheduleCollapsible key={index} schedule={schedule} />
            ))}
          </div>
        </div>
      </div>

      {/* Who This Is For Section */}
      <div className="bg-gray-950 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Who This Is For
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Perfect for ambitious founders who want to bring their ideas to
              life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9D4EDD] to-[#FF69B4] rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-300" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9D4EDD] to-[#FF69B4] rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 group-hover:border-[#9D4EDD]/50 h-full">
                <div className="h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#9D4EDD]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Rocket className="w-8 h-8 text-[#9D4EDD]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Entrepreneurs
                  </h3>
                  <ul className="space-y-4 flex-grow">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">
                        Startup founders looking to launch their MVP quickly
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">
                        Solo founders who want to build without a technical
                        co-founder
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">
                        Non-technical founders ready to take control of their
                        product development
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF69B4] to-[#FF7F50] rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-300" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF69B4] to-[#FF7F50] rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 group-hover:border-[#FF69B4]/50 h-full">
                <div className="h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#FF69B4]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-[#FF69B4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Business Owners
                  </h3>
                  <ul className="space-y-4 flex-grow">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">
                        Small business owners wanting to digitize their
                        operations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">
                        Service providers looking to scale with custom software
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">
                        Business leaders ready to innovate with AI-powered
                        solutions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonials */}
      <div className="bg-gray-950 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Hear From Our Graduates
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Listen to the success stories of founders who've transformed their
              ideas into reality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoTestimonial
              vimeoId="865762097"
              thumbnail={`https://vumbnail.com/865762097.jpg`}
              name="Arteen Zahiri"
              role="Founder"
              company="Vibey"
            />
            <VideoTestimonial
              vimeoId="944464044"
              thumbnail={`https://vumbnail.com/944464044.jpg`}
              name="Paul Bird"
              role="Business Owner"
              company=" "
            />
            <VideoTestimonial
              vimeoId="943825985"
              thumbnail={`https://vumbnail.com/943825985.jpg`}
              name="Nathan Wright"
              role="Founder"
              company="Track Your Talent"
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-950 py-12 md:py-24 relative">
        <div
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#9D4EDD]/30 via-[#FF69B4]/30 to-[#FF7F50]/30 blur-[120px] pointer-events-none opacity-0 transition-opacity duration-1000"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
          ref={(el) => {
            if (el) {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    el.style.opacity = "1";
                  }
                },
                { threshold: 0.2 }
              );
              observer.observe(el);
            }
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[100px] pointer-events-none opacity-0 transition-opacity duration-1000 -z-10"
          style={{
            left: "50%",
            top: "60%",
            transform: "translate(-50%, -50%) rotate(-15deg)",
          }}
          ref={(el) => {
            if (el) {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    el.style.opacity = "1";
                  }
                },
                { threshold: 0.2 }
              );
              observer.observe(el);
            }
          }}
        />
        <div
          className="absolute w-[800px] h-[800px] rounded-full bg-blue-600/30 blur-[120px] pointer-events-none opacity-0 transition-opacity duration-1000 -z-10"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(15deg)",
          }}
          ref={(el) => {
            if (el) {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    el.style.opacity = "1";
                  }
                },
                { threshold: 0.2 }
              );
              observer.observe(el);
            }
          }}
        />
        <div
          id="plans"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Launch Path
            </h2>
            <p className="text-xl text-gray-400">
              Select the plan that best fits your goals and resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Standard Plan */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700 relative flex flex-col h-full">
              <div className="text-center mt-8 space-y-2">
                <span className="bg-[#9D4EDD] px-4 py-1 rounded-full text-sm font-semibold text-white shadow-lg">
                  STANDARD
                </span>
                <p className="text-gray-400 text-sm">Bootcamp</p>
              </div>
              <div className="p-6 lg:p-12 flex flex-col flex-1">
                <div className="space-y-6 flex-1">
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          1 Personalized App Strategy Session
                        </span>
                        <span className="text-gray-400 font-medium">
                          $1,500
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          Live Learning Sessions
                        </span>
                        <span className="text-gray-400 font-medium">
                          $2,000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          Live Building Sessions & Workshops
                        </span>
                        <span className="text-gray-400 font-medium">
                          $3,000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          Private Community Access
                        </span>
                        <span className="text-gray-400 font-medium">$500</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          $300K in Software Credits
                        </span>
                        <span className="text-gray-400 font-medium">
                          $2,000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          Lifetime Access to Course Materials
                        </span>
                        <span className="text-gray-400 font-medium">
                          $1,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-full">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4">
                        <p className="text-lg md:text-xl text-gray-400">
                          Total Value:
                        </p>
                        <p className="text-2xl md:text-3xl text-gray-400 line-through font-semibold">
                          $4,995
                        </p>
                      </div>
                      <p className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-[#9D4EDD] to-[#FF69B4] text-transparent bg-clip-text">
                        $2,995
                      </p>
                      <p className="text-gray-400 mt-2">One-time payment</p>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#9D4EDD] to-[#FF69B4] text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
                    <a
                      href="https://form.fillout.com/t/f4YbDzyQjCus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      Apply Now
                    </a>
                  </button>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    Only 5 Premium spots available per cohort
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Plan (Bootcamp + Coaching) */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700 relative flex flex-col h-full">
              <div className="text-center mt-8 space-y-2">
                <span className="bg-gradient-to-r from-[#FF69B4] to-[#FF7F50] px-4 py-1 rounded-full text-sm font-semibold text-white shadow-lg">
                  PREMIUM
                </span>
                <p className="text-gray-400 text-sm">Bootcamp + Coaching</p>
              </div>
              <div className="p-6 lg:p-12 flex flex-col flex-1">
                <div className="space-y-6 flex-1">
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          Everything in the Bootcamp package
                        </span>
                        <span className="text-gray-400 font-medium">
                          $10,000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          1-on-1 Technical Coaching
                        </span>
                        <span className="text-gray-400 font-medium">
                          $4,500
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          Private Slack Support Channel
                        </span>
                        <span className="text-gray-400 font-medium">
                          $1,500
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          Your MVP Built Guarantee
                        </span>
                        <span className="text-gray-400 font-medium">
                          $3,000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">
                          YouTube Channel Feature (200k Subs)
                        </span>
                        <span className="text-gray-400 font-medium">
                          $2,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-full">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4">
                        <p className="text-lg md:text-xl text-gray-400">
                          Total Value:
                        </p>
                        <p className="text-2xl md:text-3xl text-gray-400 line-through font-semibold">
                          $13,995
                        </p>
                      </div>
                      <p className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-[#FF69B4] to-[#FF7F50] text-transparent bg-clip-text">
                        $4,995
                      </p>
                      <p className="text-gray-400 mt-2">One-time payment</p>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#FF69B4] to-[#FF7F50] text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
                    <a
                      href="https://form.fillout.com/t/f4YbDzyQjCus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      Apply Now
                    </a>
                  </button>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    Only 5 Premium spots available per cohort
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-900/50 backdrop-blur-sm text-emerald-200 px-6 py-3 rounded-full">
            <Shield className="w-5 h-5" />
            <span className="font-medium">
              14-Day Money-Back Guarantee on All Plans
            </span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gray-950 py-12 md:py-24">
        <Grid height="100%" opacity={0.4} fadeStart={0.1} fadeEnd={0.2} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative" style={{ zIndex: 2 }}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Build Your App?
              <span className="block mt-4 bg-gradient-to-r from-[#9D4EDD] via-[#FF69B4] to-[#FF7F50] text-transparent bg-clip-text leading-tight">
                Start Your Journey Today
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Join our next cohort and transform your idea into a reality with
              the power of AI.
            </p>
            <div className="flex flex-col items-center space-y-6">
              <a
                href="#plans"
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
    </div>
  );
}

export default App;
