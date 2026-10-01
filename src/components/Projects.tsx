import React from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ArrowUpRight, Cpu, ShoppingBag, BarChart2, Sparkles, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const getCategoryIcon = (interactiveType: string) => {
    switch (interactiveType) {
      case 'hospi-ai':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'gadget-hemat':
        return <ShoppingBag className="w-4 h-4 text-cyan-400" />;
      case 'trading-sim':
        return <BarChart2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <span>03</span>
              <span aria-hidden="true">/</span>
              <span>DIGITAL VENTURES & CONCEPTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Featured Projects & Digital Blueprints
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Conceptualized, designed, and structured by Dhiyo across AI automation, SEO affiliate commerce, and fintech systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#11141D] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-black/60"
            >
              <div>
                {/* Media Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11141D] via-transparent to-transparent" />

                  {/* Clean unboxed category header */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="font-mono text-amber-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                      PROJECT {project.number}
                    </span>
                    <div className="p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                      {getCategoryIcon(project.interactiveType)}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 line-clamp-3 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Clean tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 group-hover:bg-amber-400 text-white group-hover:text-black text-xs font-semibold border border-white/10 group-hover:border-transparent transition-all duration-200"
                >
                  <span>View Project & Interactive Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
