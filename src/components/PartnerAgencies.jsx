import { useState } from "react";
import { Building2, Globe, Award, Sparkles, Plus, ArrowUpRight, CheckCircle, Send, X } from "lucide-react";

const PartnerAgencies = ({ partners = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agencyForm, setAgencyForm] = useState({
    agencyName: "",
    contactEmail: "",
    website: "",
    specialization: "3D Animation & WebGL",
    portfolioUrl: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setAgencyForm({ agencyName: "", contactEmail: "", website: "", specialization: "3D Animation & WebGL", portfolioUrl: "", message: "" });
    }, 2000);
  };

  return (
    <section id="agencies" className="py-24 px-6 bg-[#08090d] relative overflow-hidden border-t border-white/10">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9d4edd]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ccff00] mb-4">
              <Building2 className="w-4 h-4" />
              <span>CREATIVE NETWORK × DESIGN ALLIANCES</span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight uppercase">
              OUR PARTNER <span className="purple-text-gradient">DESIGN AGENCIES</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl font-light mt-3">
              We partner with global design agencies to engineer real-world applications. They craft iconic brand identities and UI designs; we build robust MERN stack backends & high-performance frontend animations.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#9d4edd] to-[#ff007f] text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_25px_rgba(157,78,221,0.3)] flex items-center justify-center gap-2 self-start md:self-auto"
            data-cursor
            data-cursor-text="Join Network"
          >
            <Plus className="w-4 h-4" />
            <span>Apply as Partner Agency</span>
          </button>
        </div>

        {/* Agencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((agency) => (
            <div
              key={agency.id || agency.name}
              className="group p-6 rounded-3xl glass-panel border border-white/10 hover:border-[#9d4edd]/60 transition-all duration-300 flex flex-col justify-between"
              data-cursor
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/15 bg-black/60 p-1">
                    <img
                      src={agency.logo}
                      alt={agency.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-[11px] font-mono text-[#ccff00]">
                    {agency.status || "Active Partner"}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white group-hover:text-[#9d4edd] transition-colors mb-1">
                  {agency.name}
                </h3>
                <p className="text-xs font-mono text-gray-400 mb-4">{agency.location}</p>

                <p className="text-sm text-gray-300 font-light mb-6 leading-relaxed">
                  "{agency.tagline}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Collaborations:</span>
                  <span className="text-[#00f3ff] font-bold">{agency.collaborationsCount} Projects</span>
                </div>
                <div className="text-[11px] font-mono text-gray-400 line-clamp-1">
                  Focus: <span className="text-gray-300">{agency.specialization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Philosophy Banner */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow border border-white/15 bg-gradient-to-r from-[#08090d] via-[#12141d] to-[#08090d] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Are you a Design Agency looking for a MERN Engineering Partner?
            </h3>
            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
              We white-label or co-brand development services. We protect your client relationships, uphold strict design fidelity, and execute seamless API & database backend logic.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 rounded-2xl bg-[#00f3ff] text-[#08090d] font-extrabold text-xs uppercase tracking-wider hover:bg-[#ccff00] transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>Partner With NeonWorks</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Partner Application Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-[#08090d]/90 backdrop-blur-2xl">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel-glow border border-white/20 p-6 sm:p-10 text-white shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-[#ff007f] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-black uppercase text-white flex items-center gap-2">
                <Building2 className="w-6 h-6 text-[#9d4edd]" />
                <span>Partner Agency Application</span>
              </h3>
              <p className="text-xs text-gray-400 font-light mt-1">
                Join NeonWorks' global roster of design agency collaborators.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-[#ccff00] mx-auto animate-bounce" />
                <h4 className="text-2xl font-bold text-white">Application Received!</h4>
                <p className="text-sm text-gray-300">
                  Our agency partnership team will review your portfolio and reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Agency Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Visual Studio"
                      value={agencyForm.agencyName}
                      onChange={(e) => setAgencyForm({ ...agencyForm, agencyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#9d4edd]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Contact Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="partner@agency.com"
                      value={agencyForm.contactEmail}
                      onChange={(e) => setAgencyForm({ ...agencyForm, contactEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#9d4edd]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Website URL *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://agency.design"
                      value={agencyForm.website}
                      onChange={(e) => setAgencyForm({ ...agencyForm, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#9d4edd]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Primary Specialization</label>
                    <select
                      value={agencyForm.specialization}
                      onChange={(e) => setAgencyForm({ ...agencyForm, specialization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#12141d] border border-white/10 text-white text-sm focus:outline-none focus:border-[#9d4edd]"
                    >
                      <option>3D Animation & WebGL</option>
                      <option>Fintech UI & Dashboards</option>
                      <option>Brand Identity & Design Systems</option>
                      <option>Spatial & Mixed Reality UI</option>
                      <option>Luxury E-Commerce</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Collaboration Proposal / Notes *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about the kind of real-world projects you design..."
                    value={agencyForm.message}
                    onChange={(e) => setAgencyForm({ ...agencyForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#9d4edd]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#9d4edd] to-[#ff007f] text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Partnership Application</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PartnerAgencies;
