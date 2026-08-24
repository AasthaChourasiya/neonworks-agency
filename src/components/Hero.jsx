import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, Globe, Users, Award } from "lucide-react";

const Hero = ({ onExploreClick, onEstimateClick }) => {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const badgeRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: -20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    )
      .fromTo(
        titleRef.current?.children || [],
        { opacity: 0, y: 50, rotateX: -20 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.15 },
        "-=0.4"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        "-=0.5"
      );
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center px-6 overflow-hidden bg-[#08090d]">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00f3ff]/15 via-[#9d4edd]/10 to-[#ccff00]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00f3ff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Tagline Pill */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#00f3ff]/30 text-xs font-mono text-gray-300 mb-8 shadow-[0_0_20px_rgba(0,243,255,0.15)]"
        >
          <Sparkles className="w-4 h-4 text-[#00f3ff]" />
          <span>FULL-STACK MERN ARCHITECTURE × GLOBAL DESIGN AGENCIES</span>
        </div>

        {/* Hero Title */}
        <div ref={titleRef} className="space-y-2 mb-6">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05]">
            WE BUILD <span className="neon-text-gradient">REAL-WORLD</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05] flex items-center justify-center gap-3 flex-wrap">
            PROJECTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#ff007f] font-serif italic font-normal">with</span>
            <span className="px-4 py-1.5 rounded-2xl bg-white/10 border border-white/20 text-[#ccff00] text-3xl sm:text-6xl font-mono">
              TOP AGENCIES
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="text-base sm:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          NeonWorks is an elite creative engineering powerhouse. We unite visionary design agencies with robust MERN stack backend engineering to deliver high-converting, award-winning digital experiences.
        </p>

        {/* CTA Actions */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00f3ff] via-[#9d4edd] to-[#ccff00] text-[#08090d] font-extrabold text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center justify-center gap-2"
            data-cursor
            data-cursor-text="Explore"
          >
            <span>Explore Real-World Projects</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <button
            onClick={onEstimateClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:border-[#00f3ff] hover:text-[#00f3ff] transition-all flex items-center justify-center gap-2"
            data-cursor
            data-cursor-text="Calculate"
          >
            <span>Project Scope Estimator</span>
            <Layers className="w-4 h-4 text-[#ccff00]" />
          </button>
        </div>

        {/* Floating Metrics / Partner Agencies Ticker */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl glass-panel border border-white/10 shadow-2xl">
          <div className="text-left p-3 border-r border-white/10 last:border-r-0">
            <div className="flex items-center gap-2 text-[#00f3ff] mb-1">
              <Globe className="w-4 h-4" />
              <span className="text-xs uppercase font-mono tracking-wider">Real Projects</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">48+</p>
            <p className="text-xs text-gray-400 font-light">Shipped Worldwide</p>
          </div>

          <div className="text-left p-3 border-r border-white/10 last:border-r-0">
            <div className="flex items-center gap-2 text-[#ccff00] mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xs uppercase font-mono tracking-wider">Partner Agencies</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">12+</p>
            <p className="text-xs text-gray-400 font-light">Global Co-Creators</p>
          </div>

          <div className="text-left p-3 border-r border-white/10 last:border-r-0">
            <div className="flex items-center gap-2 text-[#9d4edd] mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs uppercase font-mono tracking-wider">Industry Recognition</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">29</p>
            <p className="text-xs text-gray-400 font-light">Awwwards & FWA Honors</p>
          </div>

          <div className="text-left p-3">
            <div className="flex items-center gap-2 text-[#ff007f] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase font-mono tracking-wider">Client Capital</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">$1.4B+</p>
            <p className="text-xs text-gray-400 font-light">Raised By Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
