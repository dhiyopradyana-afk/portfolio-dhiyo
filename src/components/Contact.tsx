import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MessageSquare, Send, CheckCircle2, Instagram, Linkedin, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Direct WhatsApp pre-filled link
  const waMessage = encodeURIComponent(
    `Hello Dhiyo, I came across your portfolio. I would like to connect with you regarding a business collaboration / digital venture.`
  );
  const waUrl = `https://wa.me/${personalInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${waMessage}`;

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative bg-[#0D0F16]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
            <span>06</span>
            <span aria-hidden="true">/</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Let's Build Something Great Together.
          </h2>
          <p className="text-base text-zinc-300 mt-4 leading-relaxed font-normal">
            "Saya terbuka untuk peluang kerja sama, proyek digital, dan kesempatan untuk terus berkembang."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11141D] border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-sm uppercase tracking-wider text-zinc-400 font-semibold font-mono">
                Direct Contact Channels
              </h3>

              {/* Email item */}
              <div className="space-y-1.5">
                <span className="text-xs text-zinc-400 block">Official Email</span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-white/5">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm text-amber-400 hover:underline font-mono truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* WhatsApp item */}
              <div className="space-y-1.5">
                <span className="text-xs text-zinc-400 block">WhatsApp Direct</span>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs sm:text-sm font-medium font-mono">{personalInfo.whatsappDisplay}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs text-zinc-400 block font-medium">Professional & Social Profiles</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/5 text-xs transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">LinkedIn Profile</span>
                  </a>

                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/5 text-xs transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                    <span className="truncate">Instagram {personalInfo.instagramHandle}</span>
                  </a>

                  {personalInfo.winaInstagram && (
                    <a
                      href={personalInfo.winaInstagram}
                      target="_blank"
                      rel="noreferrer"
                      className="sm:col-span-2 flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/5 text-xs transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Instagram className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>The Wina Guest House: <strong className="text-white font-medium">{personalInfo.winaInstagramHandle}</strong></span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                    </a>
                  )}
                </div>
              </div>

              {/* Base Location */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>Based in Badung & Canggu, Bali, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11141D] border border-white/10 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Dhiyo will review your note and respond back to {formData.email} promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-white font-medium transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-sm uppercase tracking-wider text-zinc-400 font-semibold font-mono mb-2">
                    Send a Direct Note
                  </h3>

                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Name / Nama
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Wayan Pratama"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Email / Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Message / Pesan
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your venture idea, hospitality inquiry, or collaboration opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs sm:text-sm transition-colors shadow-lg shadow-amber-400/10"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
