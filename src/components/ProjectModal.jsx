import { X, ExternalLink, Award, CheckCircle, Sparkles, Building2, Layers } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#08090d]/90 backdrop-blur-2xl">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-glow border border-white/20 p-6 sm:p-10 shadow-2xl text-white my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-[#00f3ff] hover:text-[#08090d] transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-[#00f3ff]/15 border border-[#00f3ff]/40 text-xs font-mono text-[#00f3ff] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-gray-400">Launched in {project.year}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-lg text-gray-300 font-light">{project.subtitle}</p>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-xl">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#08090d]/80 backdrop-blur-md border border-white/15 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase">Client Partner</span>
              <p className="text-base font-bold text-white">{project.clientName}</p>
            </div>

            {project.agencyPartner && (
              <div className="flex items-center gap-3">
                <img
                  src={project.agencyPartner.avatar}
                  alt={project.agencyPartner.name}
                  className="w-8 h-8 rounded-full border border-[#00f3ff] object-cover"
                />
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase">Co-Created With</span>
                  <p className="text-sm font-bold text-[#00f3ff]">{project.agencyPartner.name}</p>
                  <p className="text-[11px] text-gray-300 font-mono">{project.agencyPartner.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Metric Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-xs font-mono text-[#ccff00] uppercase">Conversion Impact</span>
            <p className="text-2xl font-extrabold font-mono text-white mt-1">{project.metrics?.conversionBoost || '+140%'}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-xs font-mono text-[#00f3ff] uppercase">Award / Recognition</span>
            <p className="text-sm font-bold text-white mt-1 line-clamp-1">{project.metrics?.award || 'Awwwards SOTD'}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-xs font-mono text-[#ff007f] uppercase">User Scale</span>
            <p className="text-2xl font-extrabold font-mono text-white mt-1">{project.metrics?.activeUsers || '2.4M+'}</p>
          </div>
        </div>

        {/* Narrative & Case Study Breakdown */}
        <div className="space-y-6 mb-8 text-gray-300 font-light leading-relaxed">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#00f3ff]" />
            <span>Case Study Overview</span>
          </h3>
          <p className="text-base">{project.description}</p>
        </div>

        {/* Deliverables & Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#ccff00]" />
              <span>Key Deliverables</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {project.deliverables?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#9d4edd]" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-gray-400">
            Internal ID: <span className="text-[#00f3ff]">{project.id}</span>
          </span>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#00f3ff] to-[#ccff00] text-[#08090d] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <span>Visit Live Experience</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
