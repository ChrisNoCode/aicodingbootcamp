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
} from "lucide-react";
import { AnimatedCircle } from "../components/AnimatedCircle";
import { Grid } from "../components/Grid";
import { FloatingBlurs } from "../components/FloatingBlurs";
import { FeatureCard } from "../components/FeatureCard";
import { BenefitItem } from "../components/BenefitItem";
import { WeekScheduleCollapsible } from "../components/WeekSchedule";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { weeklySchedule } from "../data/weeklySchedule";
import PaymentPlanCard from "../components/PaymentPlanCard";
import { premiumPlan, standardPlan } from "../data/features";
import MoneyBackGuarantee from "../components/MoneyBackGuarantee";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import HeroSection from "../components/HeroSection";
import LogoSection from "../components/LogoSection";
import VideoTestimonials from "../components/VideoTestimonials";

export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <AnimatedCircle />
      <HeroSection />
      <LogoSection />

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

      <VideoTestimonials />

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <PaymentPlanCard
              planType="STANDARD"
              planName="Bootcamp"
              features={standardPlan}
              totalValue={6995}
              actualPrice={1995}
              ctaLink="https://form.fillout.com/t/f4YbDzyQjCus"
              availabilityText="Only 5 Premium spots available per cohort"
              theme="bg-gradient-to-r from-[#9D4EDD] to-[#FF69B4]"
            />

            <PaymentPlanCard
              planType="PREMIUM"
              planName="Bootcamp + Coaching"
              features={premiumPlan}
              totalValue={15995}
              actualPrice={4995}
              ctaLink="https://form.fillout.com/t/f4YbDzyQjCus"
              availabilityText="Only 5 Premium spots available per cohort"
              theme="bg-gradient-to-r from-[#FF69B4] to-[#FF7F50]"
            />
          </div>
        </div>
        <MoneyBackGuarantee />
      </div>

      <FrequentlyAskedQuestions />

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
