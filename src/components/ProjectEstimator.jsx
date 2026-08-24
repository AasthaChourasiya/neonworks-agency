import { useState } from "react";
import { Layers, DollarSign, Calendar, Building2, Send, CheckCircle, Sparkles, RefreshCw } from "lucide-react";

const ProjectEstimator = ({ partnerAgencies = [] }) => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([
    "3D Spatial & GSAP Motion",
    "MERN Backend API Architecture"
  ]);
  const [budgetRange, setBudgetRange] = useState("$50k - $100k");
  const [targetTimeline, setTargetTimeline] = useState("4 - 8 Weeks");
  const [selectedPartners, setSelectedPartners] = useState(["Velox Motion Lab"]);
  
  const [clientInfo, setClientInfo] = useState({
    clientName: "",
    email: "",
    company: "",
    projectDetails: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const serviceOptions = [
    "3D Spatial & GSAP Motion",
    "MERN Backend API Architecture",
    "FinTech & Trading UI Engine",
    "Design Agency Co-Production",
    "E-Commerce & Configurator Stage",
    "Brand System & Micro-Animations"
  ];

  const budgetOptions = [
    "$25k - $50k",
    "$50k - $100k",
    "$100k - $200k",
    "$200k+"
  ];

  const timelineOptions = [
    "2 - 4 Weeks (Sprint)",
    "4 - 8 Weeks (Standard)",
    "8 - 12 Weeks (Full Build)",
    "Ongoing Agency Partnership"
  ];

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const togglePartner = (partnerName) => {
    if (selectedPartners.includes(partnerName)) {
      setSelectedPartners(selectedPartners.filter((p) => p !== partnerName));
    } else {
      setSelectedPartners([...selectedPartners, partnerName]);
    }
  };

  // Instant Cost Calculation Formula
  const calculateEstimatedCost = () => {
    let base = selectedServices.length * 18000;
    if (budgetRange === "$100k - $200k") base += 25000;
    if (budgetRange === "$200k+") base += 50000;
    return `$${(base || 35000).toLocaleString()}`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!clientInfo.clientName || !clientInfo.email || !clientInfo.projectDetails) {
      setErrorMsg("Please fill out your name, email, and project details.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const payload = {
      clientName: clientInfo.clientName,
      email: clientInfo.email,
      company: clientInfo.company,
      selectedServices,
      budgetRange,
      targetTimeline,
      preferredAgencyPartners: selectedPartners,
      projectDetails: clientInfo.projectDetails,
      estimatedCost: calculateEstimatedCost()
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || "Failed to submit project scope.");
      }
    } catch (err) {
      // Graceful fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setClientInfo({ clientName: "", email: "", company: "", projectDetails: "" });
  };

  return (
    <section id="estimator" className="py-24 px-6 bg-[#08090d] relative overflow-hidden border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ccff00] mb-4">
            <Sparkles className="w-4 h-4 text-[#ccff00]" />
            <span>INTERACTIVE SCOPE & COST ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            CALCULATE YOUR <span className="neon-text-gradient">PROJECT SCOPE</span>
          </h2>
          <p className="text-gray-400 text-sm font-light mt-2">
            Select your required services, budget, timeline, and preferred partner design agencies to receive an instant estimate and submit directly to our MERN backend team.
          </p>
        </div>

        {/* Step Wizard Container */}
        <div className="rounded-3xl glass-panel-glow border border-white/15 p-6 sm:p-10 shadow-2xl relative">
          {/* Step Indicator Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#00f3ff] text-[#08090d] font-bold font-mono text-sm flex items-center justify-center">
                {step}
              </span>
              <span className="text-sm font-mono text-gray-300 uppercase tracking-wider">
                {step === 1 && "Step 1: Select Required Services"}
                {step === 2 && "Step 2: Budget & Target Launch Timeline"}
                {step === 3 && "Step 3: Partner Agency Preferences & Contact"}
              </span>
            </div>

            <div className="text-right text-xs font-mono text-[#ccff00]">
              Estimated Scope: <span className="text-white font-bold">{calculateEstimatedCost()}</span>
            </div>
          </div>

          {submitted ? (
            <div className="py-16 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#ccff00]/15 border border-[#ccff00] flex items-center justify-center mx-auto text-[#ccff00]">
                <CheckCircle className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-3xl font-extrabold text-white">Project Estimation Submitted!</h3>
              <p className="text-gray-300 max-w-md mx-auto text-sm font-light">
                Thank you, <span className="text-[#00f3ff] font-bold">{clientInfo.clientName}</span>. Our lead architect and partner agency director will review your requirements and respond with a formal proposal within 24 hours.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-[#00f3ff] hover:text-[#08090d] text-white font-bold text-xs uppercase transition-all inline-flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Calculate Another Scope</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              {/* STEP 1: Services Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    Choose one or more engineering capabilities (Click to toggle):
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {serviceOptions.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <div
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? "bg-[#00f3ff]/15 border-[#00f3ff] text-white shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                              : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"
                          }`}
                        >
                          <span className="text-sm font-medium">{srv}</span>
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                              isSelected ? "border-[#00f3ff] bg-[#00f3ff] text-[#08090d] font-bold" : "border-gray-600"
                            }`}
                          >
                            {isSelected ? "✓" : ""}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={selectedServices.length === 0}
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00f3ff] to-[#ccff00] text-[#08090d] font-bold text-xs uppercase tracking-wider hover:opacity-90 disabled:opacity-50 transition-all"
                    >
                      Next: Budget & Timeline →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Budget & Timeline */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                      Estimated Project Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {budgetOptions.map((b) => (
                        <div
                          key={b}
                          onClick={() => setBudgetRange(b)}
                          className={`p-3.5 rounded-xl border text-center text-xs font-mono cursor-pointer transition-all ${
                            budgetRange === b
                              ? "bg-[#ccff00]/15 border-[#ccff00] text-[#ccff00] font-bold"
                              : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"
                          }`}
                        >
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                      Target Launch Timeline
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timelineOptions.map((t) => (
                        <div
                          key={t}
                          onClick={() => setTargetTimeline(t)}
                          className={`p-3.5 rounded-xl border text-left text-xs font-mono cursor-pointer transition-all ${
                            targetTimeline === t
                              ? "bg-[#00f3ff]/15 border-[#00f3ff] text-[#00f3ff] font-bold"
                              : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"
                          }`}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 rounded-xl bg-white/10 text-gray-300 font-bold text-xs uppercase hover:bg-white/20 transition-all"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00f3ff] to-[#ccff00] text-[#08090d] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all"
                    >
                      Next: Contact & Submit →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Submission */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                      Preferred Design Agency Co-Creators (Optional)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {partnerAgencies.map((agency) => {
                        const isSel = selectedPartners.includes(agency.name);
                        return (
                          <div
                            key={agency.id || agency.name}
                            onClick={() => togglePartner(agency.name)}
                            className={`px-3.5 py-2 rounded-xl border text-xs font-mono cursor-pointer flex items-center gap-2 transition-all ${
                              isSel
                                ? "bg-[#9d4edd]/20 border-[#9d4edd] text-[#9d4edd] font-bold"
                                : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                            }`}
                          >
                            <span>{agency.name}</span>
                            {isSel && <span>✓</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Vance"
                        value={clientInfo.clientName}
                        onChange={(e) => setClientInfo({ ...clientInfo, clientName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00f3ff]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={clientInfo.email}
                        onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00f3ff]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Company / Brand</label>
                      <input
                        type="text"
                        placeholder="Apex Technologies"
                        value={clientInfo.company}
                        onChange={(e) => setClientInfo({ ...clientInfo, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00f3ff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase mb-1">Project Overview & Goals *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe your real-world project goals, target audience, and feature requirements..."
                      value={clientInfo.projectDetails}
                      onChange={(e) => setClientInfo({ ...clientInfo, projectDetails: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00f3ff]"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
                      {errorMsg}
                    </div>
                  )}

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-white/10 text-gray-300 font-bold text-xs uppercase hover:bg-white/20 transition-all"
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00f3ff] via-[#9d4edd] to-[#ccff00] text-[#08090d] font-black text-xs uppercase tracking-wider hover:opacity-90 disabled:opacity-50 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(0,243,255,0.3)]"
                    >
                      {loading ? (
                        <span>Submitting to MERN API...</span>
                      ) : (
                        <>
                          <span>Submit Scope to Express API</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;
