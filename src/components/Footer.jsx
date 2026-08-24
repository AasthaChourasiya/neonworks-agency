import { useEffect, useState } from "react";
import { Sparkles, ArrowUpRight, Globe, Layers } from "lucide-react";

const Footer = ({ scrollToSection }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { timeZone: "UTC", hour12: false }) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#08090d] text-white pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Animated Marquee Ticker */}
      <div className="w-full overflow-hidden border-b border-white/10 pb-12 mb-16">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-mono text-4xl sm:text-6xl font-black uppercase text-white/20 select-none">
          <span>NEONWORKS × TOP DESIGN AGENCIES</span>
          <span className="text-[#00f3ff]">★</span>
          <span>CRAFTING REAL-WORLD DIGITAL REALITY</span>
          <span className="text-[#ccff00]">★</span>
          <span>MERN STACK ENGINEERING</span>
          <span className="text-[#9d4edd]">★</span>
          <span>AWARD-WINNING MOTION</span>
          <span className="text-[#ff007f]">★</span>
          <span>NEONWORKS × TOP DESIGN AGENCIES</span>
          <span className="text-[#00f3ff]">★</span>
          <span>CRAFTING REAL-WORLD DIGITAL REALITY</span>
          <span className="text-[#ccff00]">★</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00f3ff] to-[#ccff00] p-[1px]">
                <div className="w-full h-full bg-[#08090d] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#00f3ff]" />
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight">
                NEON<span className="text-[#00f3ff]">WORKS</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm font-light max-w-sm leading-relaxed">
              An elite MERN engineering collective co-creating high-converting digital applications alongside the world's leading creative design agencies.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-gray-400 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
              <span>Studio Clock: <span className="text-white font-bold">{time}</span></span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f3ff] mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors">
                  Real-World Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("agencies")} className="hover:text-white transition-colors">
                  Partner Agency Roster
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                  Engineering Stack
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("estimator")} className="hover:text-white transition-colors">
                  Scope Estimator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Offices */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ccff00] mb-4">Global Hubs</h4>
            <div className="space-y-2 text-xs font-mono text-gray-400">
              <p>Tokyo: Shibuya City, 150-0002</p>
              <p>London: Shoreditch High St, E1</p>
              <p>New York: SoHo Broadway, NY 10012</p>
            </div>

            <div className="pt-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#9d4edd] mb-3">Connect</h4>
              <div className="flex gap-3 text-xs font-mono text-gray-300">
                <a href="#" className="hover:text-[#00f3ff]">GitHub</a>
                <span>/</span>
                <a href="#" className="hover:text-[#00f3ff]">Awwwards</a>
                <span>/</span>
                <a href="#" className="hover:text-[#00f3ff]">Twitter/X</a>
                <span>/</span>
                <a href="#" className="hover:text-[#00f3ff]">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} NeonWorks Agency Inc. All rights reserved.</p>
          <p>MERN Architecture × Partner Agency Co-Production</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
