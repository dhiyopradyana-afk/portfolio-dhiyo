import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Globe, Compass, BookOpen, Hotel, TrendingUp, Quote, Check } from 'lucide-react';

export const About: React.FC = () => {
  const [langTab, setLangTab] = useState<'id' | 'en'>('id');

  const icons = [Compass, BookOpen, Sparkles, Hotel, TrendingUp];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <span>01</span>
              <span aria-hidden="true">/</span>
              <span>ABOUT PROFILE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Entrepreneurial Mindset & Digital Ambition
            </h2>
          </div>

          {/* Bilingual Toggle */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900/80 border border-white/10 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => setLangTab('id')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                langTab === 'id'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Bahasa Indonesia
            </button>
            <button
              onClick={() => setLangTab('en')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                langTab === 'en'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              English Translation
            </button>
          </div>
        </div>

        {/* Story & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Statement Quote */}
          <div className="lg:col-span-7 bg-[#11141D] border border-white/10 rounded-2xl p-8 relative shadow-xl">
            <Quote className="w-8 h-8 text-amber-400/30 mb-4" />

            {langTab === 'id' ? (
              <blockquote className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
                "{personalInfo.aboutBio}"
              </blockquote>
            ) : (
              <blockquote className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
                "{personalInfo.aboutBioEnglish}"
              </blockquote>
            )}

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-sm font-semibold text-white block">
                  I Nyoman Dhiyo Pradyana Putra
                </span>
                <span className="text-xs text-zinc-400">
                  Badung, Bali · Founder @ The Wina Guest House
                </span>
              </div>

              {/* Language badges */}
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  ID (Native)
                </span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>EN (Basic Working)</span>
              </div>
            </div>
          </div>

          {/* Core Foundation Highlights */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Core Identity Pillars
            </h3>

            {personalInfo.pillars.map((pillar, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-amber-400/30 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-amber-400 shrink-0 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {pillar.label}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
