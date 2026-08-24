import { ArrowUpRight, Sparkles, Layers, Award } from "lucide-react";

const ProjectCard = ({ project, onSelectProject }) => {
  return (
    <div
      onClick={() => onSelectProject(project)}
      className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#00f3ff]/50 transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between"
      data-cursor
      data-cursor-text="View Case"
    >
      {/* Background Image Container with Zoom Effect */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black/50">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-[#08090d]/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#00f3ff] uppercase tracking-wider">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#ccff00]/10 backdrop-blur-md border border-[#ccff00]/30 text-[11px] font-mono text-[#ccff00]">
            {project.year}
          </span>
        </div>

        {/* Partner Agency Ribbon */}
        {project.agencyPartner && (
          <div className="absolute bottom-4 left-4 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#08090d]/90 backdrop-blur-md border border-white/20">
            <img
              src={project.agencyPartner.avatar}
              alt={project.agencyPartner.name}
              className="w-5 h-5 rounded-full object-cover border border-[#00f3ff]"
            />
            <span className="text-xs text-gray-300 font-medium">
              Co-Created with <span className="text-[#00f3ff] font-bold">{project.agencyPartner.name}</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content Footer */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow bg-[#08090d]/90">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-2xl font-extrabold text-white group-hover:text-[#00f3ff] transition-colors">
              {project.title}
            </h3>
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00f3ff] group-hover:text-[#08090d] transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          <p className="text-sm text-gray-400 font-light mb-6 line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Deliverables & Metric */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
          <div className="flex items-center gap-1.5 text-[#ccff00]">
            <Award className="w-4 h-4" />
            <span>{project.metrics?.conversionBoost || "+140% Impact"}</span>
          </div>
          <span className="text-gray-500">{project.clientName}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
