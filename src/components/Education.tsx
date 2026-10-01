import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, BookOpen, Code2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-white/5 relative bg-[#0D0F16]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
            <span>04</span>
            <span aria-hidden="true">/</span>
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Education & Technical Grounding
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">
            Bridging foundational software and game programming logic with high-level digital business strategy.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {educationData.map((edu, idx) => (
            <div key={edu.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#11141D] border-2 border-amber-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
              </div>

              {/* Content Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#11141D] border border-white/10 hover:border-amber-400/30 transition-all duration-300 shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-amber-400 block mb-0.5">
                      EDUCATION {edu.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {edu.institution}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 font-mono border border-amber-400/20 inline-block">
                      {edu.status}
                    </span>
                    <span className="text-xs text-zinc-400 block mt-1">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-sm font-semibold text-zinc-200 block">
                    {edu.program}
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs text-zinc-400 block mb-0.5 font-medium">Catatan Kurikulum (Indonesia):</span>
                  <p className="text-xs text-zinc-300 italic">
                    "{edu.indonesianDesc}"
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                    Key Competencies Acquired:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
