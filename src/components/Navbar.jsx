import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles, Building2, Layers } from "lucide-react";
import { gsap } from "gsap";

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Real-World Projects", id: "projects" },
    { name: "Partner Agencies", id: "agencies" },
    { name: "Services", id: "services" },
    { name: "Scope Estimator", id: "estimator" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    if (scrollToSection) scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090d]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="group flex items-center gap-3 text-left focus:outline-none"
          data-cursor
          data-cursor-text="NeonWorks"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f3ff] via-[#9d4edd] to-[#ccff00] p-[1px] shadow-[0_0_15px_rgba(0,243,255,0.4)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#08090d] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#00f3ff] group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#00f3ff] transition-colors">
              NEON<span className="text-[#00f3ff]">WORKS</span>
            </span>
            <span className="block text-[10px] tracking-widest text-gray-400 font-mono uppercase">
              AGENCY × NETWORK
            </span>
          </div>
        </button>

        {/* Live Availability Badge (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
          <span>Accepting Q3/Q4 Real-World Projects</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors relative py-1 hover:text-[#00f3ff] ${
                activeSection === link.id ? "text-[#00f3ff]" : "text-gray-300"
              }`}
              data-cursor
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00f3ff] to-[#ccff00] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick("estimator")}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00f3ff] to-[#ccff00] text-[#08090d] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] flex items-center gap-1.5"
            data-cursor
            data-cursor-text="Estimate"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 text-gray-200 hover:text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#08090d]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl z-50">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-xs font-mono text-[#ccff00]">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
            <span>Available for Real-World Agency Collaborations</span>
          </div>

          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-lg font-medium text-gray-200 hover:text-[#00f3ff] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-gray-500" />
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick("estimator")}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00f3ff] to-[#ccff00] text-[#08090d] font-bold text-sm uppercase tracking-wider text-center"
          >
            Start Project Estimator
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
