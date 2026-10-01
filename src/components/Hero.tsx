import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, Camera, Clock } from 'lucide-react';

interface HeroProps {
  photo: string;
  onOpenPhotoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ photo, onOpenPhotoModal }) => {
  // Live Bali Time (WITA - UTC+8)
  const [baliTime, setBaliTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Asia/Makassar (WITA)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Makassar',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setBaliTime(new Intl.DateTimeFormat([], options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[400px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            {/* Meta kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-medium">
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Active Entrepreneur & Student
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                Badung, Bali, Indonesia
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="flex items-center gap-1 font-mono text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                {baliTime ? `${baliTime} WITA` : 'Bali Time'}
              </span>
            </div>

            {/* Name Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display leading-[1.08] text-balance">
                I Nyoman Dhiyo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  Pradyana Putra
                </span>
              </h1>

              <p className="text-sm sm:text-base font-medium text-amber-400/90 tracking-wide uppercase font-mono">
                {personalInfo.role}
              </p>
            </div>

            {/* Narrative description */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              A forward-thinking Digital Business student at <span className="text-white font-medium">Politeknik Internasional Bali</span> who pairs academic digital strategy with hands-on venture management as the owner of <span className="text-white font-medium">The Wina Guest House</span> in Canggu, Bali.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-400/10 hover:shadow-amber-400/20 hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm transition-all duration-200 border border-white/10 hover:border-white/20 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Quick Proof Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">Owner</span>
                <span className="text-xs text-zinc-400">The Wina Guest House</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">Canggu</span>
                <span className="text-xs text-zinc-400">Tourism & Tech Hub</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">PIB</span>
                <span className="text-xs text-zinc-400">Digital Business</span>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Portrait Frame with Custom Upload */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              {/* Subtle decorative border outline */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-amber-400/30 via-white/5 to-transparent blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-[#12151D] border border-white/15 shadow-2xl">
                {/* Photo viewport */}
                <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-900 relative">
                  <img
                    src={photo}
                    alt="I Nyoman Dhiyo Pradyana Putra"
                    className="w-full h-full object-cover object-top filter brightness-[0.97] contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-transparent to-transparent opacity-80" />

                  {/* Upload button overlay */}
                  <button
                    onClick={onOpenPhotoModal}
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-medium transition-all shadow-md"
                    title="Upload or change with your own portrait photo"
                  >
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>Upload Photo</span>
                  </button>

                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          I Nyoman Dhiyo Pradyana Putra
                        </span>
                        <span className="text-[11px] text-zinc-300">
                          Badung, Bali · Digital Entrepreneur
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" title="Active in Canggu, Bali" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal caption below */}
              <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 px-1">
                <span>Personal Portfolio & Brand</span>
                <button
                  onClick={onOpenPhotoModal}
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Replace Photo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
