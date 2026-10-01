import React from 'react';
import { skillsData } from '../data/portfolioData';
import {
  TrendingUp,
  Search,
  Share2,
  Megaphone,
  Cpu,
  Terminal,
  Layout,
  Palette,
  Briefcase,
  Rocket,
  Compass,
  Building,
  Layers,
} from 'lucide-react';

export const Skills: React.FC = () => {
  // Mapping specific skill icons
  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'Search Engine Optimization (SEO)':
        return <Search className="w-4 h-4 text-amber-400" />;
      case 'Social Media Marketing':
        return <Share2 className="w-4 h-4 text-amber-400" />;
      case 'Digital Advertising':
        return <Megaphone className="w-4 h-4 text-amber-400" />;
      case 'AI Prompting':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'Website Planning':
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'Canva & Graphic Design':
        return <Palette className="w-4 h-4 text-cyan-400" />;
      case 'Entrepreneurship':
        return <Rocket className="w-4 h-4 text-emerald-400" />;
      case 'Business Development':
        return <Compass className="w-4 h-4 text-emerald-400" />;
      case 'Business Management':
        return <Building className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-zinc-400" />;
    }
  };

  const getCategoryHeaderIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <span>05</span>
              <span aria-hidden="true">/</span>
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Applied Skills & Domain Expertise
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Grounded in active venture execution at The Wina Guest House, academic digital commerce, and modern generative AI tools.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#11141D] border border-white/10 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryHeaderIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide font-display">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 line-clamp-1">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills List without arbitrary percentages */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-1 rounded bg-black/40">
                          {getSkillIcon(skill.name)}
                        </div>
                        <h4 className="text-xs font-semibold text-zinc-200">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed pl-7">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>VERIFIED IN PRACTICE</span>
                <span>CANGGU & PIB</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
