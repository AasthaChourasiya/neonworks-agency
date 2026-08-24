import { Quote, Star, Sparkles, Building2 } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      id: "rev-1",
      quote: "NeonWorks bridged the gap between our high-concept Tokyo design studio and complex production-grade WebGL/MERN infrastructure. Aura Spatial OS was delivered ahead of schedule and won Site of the Year.",
      author: "Renjiro Takahashi",
      role: "Founder & Creative Director",
      agency: "Velox Motion Lab (Tokyo)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-2",
      quote: "Finding an engineering team that understands subtle micro-motion physics and high-density financial data flows is rare. NeonWorks built VaultX's WebSocket engine flawlessly.",
      author: "Elena Rostova",
      role: "VP of Product",
      agency: "Kinetics UI Studio (London)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-3",
      quote: "Working with NeonWorks feels like having an elite internal engineering squad. They transformed our 3D hypercar configurator into a direct multi-million euro order machine.",
      author: "Marcello Vance",
      role: "Chief Design Officer",
      agency: "Apex Visuals NYC",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#08090d] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#9d4edd] mb-4">
            <Quote className="w-4 h-4 text-[#9d4edd]" />
            <span>AGENCY PARTNER & CLIENT REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            WHAT OUR <span className="purple-text-gradient">PARTNERS SAY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#9d4edd]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#ccff00] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm font-light leading-relaxed italic mb-8">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-12 h-12 rounded-full object-cover border border-[#00f3ff]"
                />
                <div>
                  <h4 className="text-base font-bold text-white">{rev.author}</h4>
                  <p className="text-xs text-[#00f3ff] font-mono">{rev.role}</p>
                  <p className="text-[11px] text-gray-400 font-mono">{rev.agency}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
