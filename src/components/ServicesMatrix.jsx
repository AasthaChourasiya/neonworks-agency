import { Sparkles, Terminal, Layers, Paintbrush, Cpu, Compass, ArrowUpRight } from "lucide-react";

const ServicesMatrix = ({ onSelectService }) => {
  const services = [
    {
      id: "srv-01",
      title: "MERN Stack Backend & Microservices",
      subtitle: "High-Performance Node/Express Engines & MongoDB Architecture",
      icon: Terminal,
      color: "cyan",
      tag: "CORE BACKEND",
      features: [
        "REST & GraphQL API Endpoints",
        "MongoDB Mongoose Schemas & Aggregation",
        "WebSockets Real-time Data Sync",
        "JWTAUTH & Secure Session Engine"
      ]
    },
    {
      id: "srv-02",
      title: "3D Spatial Web & GSAP Motion",
      subtitle: "Award-Winning Interactive Animations & Canvas Shaders",
      icon: Sparkles,
      color: "lime",
      tag: "FRONTEND MOTION",
      features: [
        "GSAP Timeline & ScrollTrigger Sync",
        "Three.js / WebGL Custom Shaders",
        "Micro-Interactions & Cursor Physics",
        "60 FPS Fluid Animation Guarantee"
      ]
    },
    {
      id: "srv-03",
      title: "FinTech & Data-Dense UI Engineering",
      subtitle: "Trading Dashboards, Analytics & Real-Time Visualization",
      icon: Cpu,
      color: "purple",
      tag: "HIGH DENSITY UI",
      features: [
        "Zero-Latency Canvas Charts",
        "Dark Neon Color Token Systems",
        "Institutional Trading Workflows",
        "Responsive Dynamic Breakpoints"
      ]
    },
    {
      id: "srv-04",
      title: "Design Agency Co-Production",
      subtitle: "White-Label & Joint Venture Development for Creative Studios",
      icon: Layers,
      color: "pink",
      tag: "AGENCY ALLIANCE",
      features: [
        "100% Pixel-Perfect Figma Fidelity",
        "Joint Case Study Co-Branding",
        "Dedicated Engineering Squads",
        "Strict NDA & IP Protection"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#08090d] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00f3ff] mb-4">
            <Compass className="w-4 h-4 text-[#00f3ff]" />
            <span>AGENCY CAPABILITIES & STACK MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight uppercase">
            ENGINEERING <span className="neon-text-gradient">EXCELLENCE</span>
          </h2>
          <p className="text-gray-400 text-base font-light mt-3">
            Combining world-class creative design principles with enterprise-grade MERN stack engineering.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div
                key={srv.id}
                className="group p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 hover:border-[#00f3ff]/50 transition-all duration-500 relative flex flex-col justify-between"
                data-cursor
                data-cursor-text="Service"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00f3ff] group-hover:scale-110 group-hover:bg-[#00f3ff] group-hover:text-[#08090d] transition-all">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#ccff00] tracking-wider uppercase">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#00f3ff] transition-colors mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light mb-8">
                    {srv.subtitle}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>MERN Integrated</span>
                  <span className="text-[#00f3ff] group-hover:underline flex items-center gap-1">
                    Select in Estimator <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesMatrix;
