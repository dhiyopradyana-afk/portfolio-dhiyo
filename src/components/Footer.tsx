import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Instagram, Linkedin, Mail, MessageSquare, ArrowUp, Hotel } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#090B0E] py-16 text-zinc-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <h3 className="text-xl font-bold text-white font-display">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Personal Portfolio · Digital Business Student & Entrepreneur
            </p>
            <p className="text-xs text-zinc-500 mt-0.5">
              Badung & Canggu, Bali, Indonesia
            </p>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-label="Personal Instagram"
              title="Personal Instagram @dhiyo._aj"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {personalInfo.winaInstagram && (
              <a
                href={personalInfo.winaInstagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-amber-400 hover:text-amber-300 transition-colors"
                aria-label="The Wina Guest House Instagram"
                title="The Wina Guest House Instagram @the_wina_guesthouse"
              >
                <Hotel className="w-4 h-4" />
              </a>
            )}

            <a
              href={`https://wa.me/${personalInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-400 hover:text-emerald-300 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors ml-2"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="text-[11px]">
            Engineered with modern TypeScript, Tailwind CSS & clean aesthetic discipline.
          </p>
        </div>
      </div>
    </footer>
  );
};
