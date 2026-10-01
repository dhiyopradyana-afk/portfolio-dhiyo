import React, { useState, useRef } from 'react';
import { experienceData, personalInfo } from '../data/portfolioData';
import { Building2, MapPin, ExternalLink, Check, Instagram, Camera, RotateCcw, Maximize2, X } from 'lucide-react';

export const Experience: React.FC = () => {
  const [showWebsiteModal, setShowWebsiteModal] = useState(false);
  const [showPhotoLightbox, setShowPhotoLightbox] = useState(false);
  const [websiteUrlInput, setWebsiteUrlInput] = useState(experienceData.websiteUrl);
  const [copied, setCopied] = useState(false);
  const [propertyPhoto, setPropertyPhoto] = useState<string>(() => {
    return localStorage.getItem('wina_user_property_photo') || experienceData.image;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(websiteUrlInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePropertyPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPropertyPhoto(reader.result);
        try {
          localStorage.setItem('wina_user_property_photo', reader.result);
        } catch {
          // ignore storage limit
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPropertyPhoto = () => {
    setPropertyPhoto(experienceData.image);
    try {
      localStorage.removeItem('wina_user_property_photo');
    } catch {}
  };

  return (
    <section id="experience" className="py-24 border-t border-white/5 relative bg-[#0D0F16]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
            <span>02</span>
            <span aria-hidden="true">/</span>
            <span>VENTURE EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Business Ownership & Operational Leadership
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">
            Real-world enterprise management in Bali's hyper-competitive tourism and hospitality capital.
          </p>
        </div>

        {/* The Wina Guest House Card */}
        <div className="relative rounded-2xl bg-[#11141E] border border-white/10 overflow-hidden shadow-2xl">
          {/* Top Banner with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Media Showcase */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[460px] overflow-hidden bg-zinc-950 group">
              <button
                type="button"
                onClick={() => setShowPhotoLightbox(true)}
                className="w-full h-full text-left relative focus:outline-none"
                aria-label="View full photo of The Wina Guest House"
              >
                <img
                  src={propertyPhoto}
                  alt="The Wina Guest House Canggu Bali"
                  className="w-full h-full object-cover object-center filter transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11141E] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#11141E]/90" />
                
                {/* Expand overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Full Photo</span>
                  </span>
                </div>
              </button>

              {/* Canggu Location Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Canggu, Bali, Indonesia</span>
              </div>

              {/* Photo Customizer Actions for Property */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePropertyPhotoUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload / Change with your camera photo of The Wina Guest House"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-medium transition-all shadow-md"
                >
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  <span>Custom Photo</span>
                </button>
                {propertyPhoto !== experienceData.image && (
                  <button
                    type="button"
                    onClick={handleResetPropertyPhoto}
                    title="Reset to default photo"
                    className="p-1.5 rounded-lg bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-zinc-300 hover:text-white text-xs transition-all shadow-md"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-200 p-2.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Active Operations
                </span>
                <span className="text-zinc-400 font-mono">Est. 2023</span>
              </div>
            </div>

            {/* Content & Responsibilities */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs uppercase font-mono text-amber-400 font-medium">
                      Primary Venture
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                      {experienceData.company}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-sm font-semibold text-white block">
                      {experienceData.position}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {experienceData.period}
                    </span>
                  </div>
                </div>

                {/* Indonesian brief description as requested */}
                <div className="my-5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-sm text-zinc-300 leading-relaxed italic">
                    "{experienceData.indonesianDesc}"
                  </p>
                </div>

                {/* Responsibilities List */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    Core Leadership Responsibilities:
                  </h4>
                  <ul className="space-y-2.5">
                    {experienceData.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <div className="w-5 h-5 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/20">
                          <Check className="w-3 h-3" />
                        </div>
                        <div>
                          <strong className="text-white font-medium">{resp.title}: </strong>
                          <span className="text-zinc-400">{resp.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action and Links */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Official Instagram of The Wina Guest House */}
                {experienceData.instagramUrl && (
                  <a
                    href={experienceData.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Instagram {experienceData.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                )}

                <button
                  onClick={() => setShowWebsiteModal(true)}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition-colors shadow-md shadow-amber-400/10"
                >
                  <span>Visit Website / Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Website Modal */}
      {showWebsiteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#12151E] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-white">The Wina Guest House — Website Portal</h3>
              </div>
              <button
                onClick={() => setShowWebsiteModal(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <p className="text-sm text-zinc-300 leading-relaxed">
                The online portal for The Wina Guest House in Canggu is currently hosted or can be linked to your customized domain:
              </p>

              <div className="p-3 bg-zinc-900 rounded-xl border border-white/10 flex items-center justify-between gap-2">
                <input
                  type="text"
                  value={websiteUrlInput}
                  onChange={(e) => setWebsiteUrlInput(e.target.value)}
                  className="bg-transparent text-xs text-amber-400 font-mono w-full focus:outline-none"
                  placeholder="https://thewinaguesthouse.com"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-xs text-white rounded font-medium shrink-0 transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-400 space-y-2">
                <div className="flex items-center justify-between text-zinc-300 font-medium">
                  <span>Guest House Location</span>
                  <span>Canggu, Badung, Bali</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300 font-medium">
                  <span>Direct Reservations</span>
                  <span>WhatsApp & Booking Channels</span>
                </div>
                {experienceData.instagramUrl && (
                  <div className="flex items-center justify-between text-zinc-300 font-medium pt-1 border-t border-white/5">
                    <span>Official Instagram</span>
                    <a
                      href={experienceData.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-pink-400 hover:underline flex items-center gap-1"
                    >
                      <span>{experienceData.instagramHandle}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowWebsiteModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white"
              >
                Close
              </button>
              <a
                href={`https://wa.me/${personalInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello Dhiyo, I would like to inquire regarding staying at The Wina Guest House in Canggu, Bali.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs rounded-lg transition-colors"
              >
                <span>Direct Inquiry via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Full Photo Lightbox Modal */}
      {showPhotoLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#11141C] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0E1017]">
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base font-display">
                  The Wina Guest House — Canggu, Bali
                </h3>
                <p className="text-xs text-zinc-400">
                  Natural architectural view · Owner: I Nyoman Dhiyo Pradyana Putra
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                >
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  <span>Upload / Ganti Foto</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowPhotoLightbox(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Uncropped Full Image Area */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/50 min-h-[350px]">
              <img
                src={propertyPhoto}
                alt="The Wina Guest House Canggu Bali (Full View)"
                className="max-h-[68vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-3.5 border-t border-white/10 bg-[#0E1017] text-xs">
              <span className="text-zinc-400">
                Lokasi: Canggu, Badung, Bali · Instagram:{' '}
                <a
                  href={experienceData.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-400 hover:underline"
                >
                  {experienceData.instagramHandle}
                </a>
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${personalInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    'Halo Dhiyo, saya ingin reservasi kamar di The Wina Guest House Canggu Bali.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition-colors"
                >
                  <span>Chat WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

