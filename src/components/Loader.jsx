import { useEffect, useState } from "react";
import gsap from "gsap";
import { Sparkles, Layers } from "lucide-react";

const Loader = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Numeric counter animation
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          if (finishLoading) finishLoading();
        },
      });

      tl.to(".loader-counter", {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in"
      })
      .to(".loader-text", {
        scale: 1.15,
        letterSpacing: "0.25em",
        duration: 0.6,
        ease: "power3.out"
      })
      .to(".loader-bg", {
        y: "-100%",
        duration: 0.9,
        ease: "power4.inOut",
        stagger: 0.1
      });
    }
  }, [counter, finishLoading]);

  return (
    <div className="loader-bg fixed inset-0 w-full h-screen bg-[#08090d] z-[99999] flex flex-col items-center justify-between p-8 sm:p-12 text-white select-none">
      {/* Top Header info */}
      <div className="w-full flex justify-between items-center text-xs tracking-widest uppercase text-gray-500 font-mono">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#00f3ff] animate-spin" style={{ animationDuration: '6s' }} />
          <span>NeonWorks Agency</span>
        </div>
        <span>[ MERN × Creative Engine ]</span>
      </div>

      {/* Center Brand Title */}
      <div className="text-center my-auto">
        <div className="overflow-hidden mb-3">
          <h1 className="loader-text text-5xl sm:text-7xl font-extrabold tracking-tight uppercase font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f3ff] to-[#ccff00]">
            NeonWorks
          </h1>
        </div>
        <p className="text-sm sm:text-base text-gray-400 font-light max-w-md mx-auto flex items-center justify-center gap-2">
          <Layers className="w-4 h-4 text-[#ccff00]" />
          Co-Creating Digital Reality with Global Design Agencies
        </p>
      </div>

      {/* Bottom Counter Ticker */}
      <div className="w-full flex justify-between items-end">
        <div className="loader-counter text-6xl sm:text-8xl font-black font-mono text-[#00f3ff] tracking-tighter">
          {counter < 10 ? `0${counter}` : counter}<span className="text-2xl sm:text-4xl text-[#ccff00]">%</span>
        </div>
        <div className="text-right text-xs uppercase font-mono text-gray-400">
          <p className="text-[#00f3ff]">Loading Assets & Models</p>
          <p>Location: Tokyo / London / NYC</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
