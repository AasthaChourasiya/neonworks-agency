import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import PartnerAgencies from "../components/PartnerAgencies";
import ServicesMatrix from "../components/ServicesMatrix";
import ProjectEstimator from "../components/ProjectEstimator";
import Testimonials from "../components/Testimonials";
import { Filter, Sparkles, RefreshCw, ArrowUpRight, Layers } from "lucide-react";
import { initialProjects, initialAgencyPartners } from "../../server/data/initialData";

const Home = ({ scrollToSection }) => {
  const [projects, setProjects] = useState([]);
  const [partners, setPartners] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const categories = ["All", "Spatial AI", "FinTech", "AI & Web3", "Luxury E-Commerce"];

  // Fetch Projects from MERN Backend API
  useEffect(() => {
    const fetchProjects = async () => {
      setLoadingProjects(true);
      try {
        const query = selectedCategory !== "All" ? `?category=${encodeURIComponent(selectedCategory)}` : "";
        const res = await fetch(`/api/projects${query}`);
        const data = await res.json();
        if (data.success && data.data) {
          setProjects(data.data);
        } else {
          // Fallback if backend API is offline
          const filtered = selectedCategory === "All"
            ? initialProjects
            : initialProjects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
          setProjects(filtered);
        }
      } catch (err) {
        const filtered = selectedCategory === "All"
          ? initialProjects
          : initialProjects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
        setProjects(filtered);
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchProjects();
  }, [selectedCategory]);

  // Fetch Partner Agencies from MERN Backend API
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch('/api/partners');
        const data = await res.json();
        if (data.success && data.data) {
          setPartners(data.data);
        } else {
          setPartners(initialAgencyPartners);
        }
      } catch (err) {
        setPartners(initialAgencyPartners);
      }
    };

    fetchPartners();
  }, []);

  return (
    <main className="bg-[#08090d] text-white min-h-screen">
      {/* Hero Section */}
      <Hero
        onExploreClick={() => scrollToSection && scrollToSection("projects")}
        onEstimateClick={() => scrollToSection && scrollToSection("estimator")}
      />

      {/* Real-World Projects Gallery Section */}
      <section id="projects" className="py-24 px-6 relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header & Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00f3ff] mb-4">
                <Sparkles className="w-4 h-4 text-[#00f3ff]" />
                <span>FEATURED REAL-WORLD PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight uppercase">
                CO-CREATED <span className="neon-text-gradient">PROJECTS</span>
              </h2>
              <p className="text-gray-400 text-base max-w-xl font-light mt-3">
                Explore flagship applications engineered by NeonWorks in direct partnership with global design studios.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#00f3ff] text-[#08090d] font-extrabold shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                      : "bg-white/5 border border-white/10 text-gray-300 hover:border-white/30"
                  }`}
                  data-cursor
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {loadingProjects ? (
            <div className="py-20 text-center text-gray-400 font-mono text-sm flex items-center justify-center gap-3">
              <RefreshCw className="w-5 h-5 text-[#00f3ff] animate-spin" />
              <span>Fetching Projects from MERN API...</span>
            </div>
          ) : projects.length === 0 ? (
            <div className="py-16 text-center text-gray-400 font-mono text-sm bg-white/5 rounded-3xl border border-white/10">
              No projects found for category "{selectedCategory}".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelectProject={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Partner Design Agencies Section */}
      <PartnerAgencies partners={partners} />

      {/* Engineering & Design Services Matrix */}
      <ServicesMatrix />

      {/* Testimonials */}
      <Testimonials />

      {/* Project Scope & Cost Estimator */}
      <ProjectEstimator partnerAgencies={partners} />

      {/* Detail Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};

export default Home;
