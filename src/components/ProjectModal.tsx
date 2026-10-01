import React, { useState, useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, CheckCircle2, Send, ArrowUpRight, ArrowDownRight, RefreshCw, Cpu, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive'>('overview');

  // Interactive state for Hospi AI
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; department?: string; time: string }>>([
    {
      sender: 'ai',
      text: 'Good afternoon, welcome to The Wina Guest House. I am HOSPI AI, your 24/7 concierge. How may I assist your stay in Canggu today?',
      department: 'Concierge AI',
      time: '14:02',
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Interactive state for Trading Simulator
  const [virtualBalance, setVirtualBalance] = useState(10000.0);
  const [currentPrice, setCurrentPrice] = useState(3420.5);
  const [activePosition, setActivePosition] = useState<{ type: 'LONG' | 'SHORT'; entry: number; size: number } | null>(null);
  const [pnl, setPnl] = useState(0);
  const [tradeHistory, setTradeHistory] = useState<Array<{ type: string; price: number; pnl: number; time: string }>>([]);

  // Interactive state for Gadget Hemat
  const [selectedBudget, setSelectedBudget] = useState<'budget' | 'mid' | 'pro'>('budget');
  const [gadgetSearch, setGadgetSearch] = useState('');

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Trading simulation tick
  useEffect(() => {
    if (!project || project.interactiveType !== 'trading-sim') return;

    const interval = setInterval(() => {
      setCurrentPrice((prev) => {
        const delta = (Math.random() - 0.49) * 8.5;
        const newPrice = Math.max(100, +(prev + delta).toFixed(2));

        if (activePosition) {
          const diff = activePosition.type === 'LONG' ? newPrice - activePosition.entry : activePosition.entry - newPrice;
          const currentPnl = +(diff * activePosition.size).toFixed(2);
          setPnl(currentPnl);
        }

        return newPrice;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [project, activePosition]);

  if (!project) return null;

  // Handle Hospi AI send message
  const handleSendHospiMessage = (textToSend?: string) => {
    const query = textToSend || chatInput;
    if (!query.trim()) return;

    const newMsg = {
      sender: 'user' as const,
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = 'Your request has been logged. Our guest service team will attend to you shortly.';
      let dept = 'Front Desk';

      const lower = query.toLowerCase();
      if (lower.includes('towel') || lower.includes('clean') || lower.includes('housekeep') || lower.includes('room')) {
        reply = 'Housekeeping ticket dispatched! Fresh clean towels will be delivered to your room in ~8 minutes.';
        dept = 'Housekeeping Dept';
      } else if (lower.includes('wifi') || lower.includes('internet') || lower.includes('password')) {
        reply = 'The guest network is "WINA_GUEST_5G" and the passkey is "CangguSunset2026". Enjoy uninterrupted high-speed browsing!';
        dept = 'IT & Connectivity';
      } else if (lower.includes('sunset') || lower.includes('food') || lower.includes('cafe') || lower.includes('recommend')) {
        reply = 'For sunset, we recommend Echo Beach or Batu Bolong Beach (3 mins away). For dining, try nearby organic cafes on Pantai Batu Mejan.';
        dept = 'Local Concierge';
      } else if (lower.includes('breakfast') || lower.includes('scooter') || lower.includes('bike')) {
        reply = 'Scooter rentals are available at the front desk for IDR 80,000/day with helmets included. Would you like us to reserve one?';
        dept = 'Transportation';
      }

      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: reply,
          department: dept,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  // Trading simulation actions
  const handleOpenPosition = (type: 'LONG' | 'SHORT') => {
    if (activePosition) return;
    setActivePosition({
      type,
      entry: currentPrice,
      size: 1.5,
    });
    setPnl(0);
  };

  const handleClosePosition = () => {
    if (!activePosition) return;
    const finalPnl = pnl;
    setVirtualBalance((prev) => +(prev + finalPnl).toFixed(2));
    setTradeHistory((prev) => [
      {
        type: `${activePosition.type} @ $${activePosition.entry}`,
        price: currentPrice,
        pnl: finalPnl,
        time: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 4),
    ]);
    setActivePosition(null);
    setPnl(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#11141C] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0E1017]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
              PROJECT {project.number}
            </span>
            <span className="text-zinc-500 text-xs hidden sm:inline">·</span>
            <span className="text-xs text-zinc-400 hidden sm:inline">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Banner inside modal */}
        <div className="relative h-48 md:h-64 w-full overflow-hidden bg-zinc-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11141C] via-[#11141C]/60 to-transparent" />

          <div className="absolute bottom-5 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display">
                {project.title}
              </h2>
              <p className="text-xs md:text-sm text-zinc-300 mt-1 max-w-xl">
                {project.shortDesc}
              </p>
            </div>

            {/* Segmented Tab Controls */}
            <div className="flex items-center gap-1 p-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 shrink-0 self-start md:self-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-amber-400 text-black shadow-sm font-semibold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                Project Brief
              </button>
              <button
                onClick={() => setActiveTab('interactive')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'interactive'
                    ? 'bg-amber-400 text-black shadow-sm font-semibold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Interactive Preview</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' ? (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
                  Project Vision & Strategic Architecture
                </h4>
                <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                  {project.fullDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-xs text-zinc-400 block mb-1">Catatan Konsep (Bahasa Indonesia):</span>
                <p className="text-xs md:text-sm text-zinc-300 italic">
                  "{project.indonesianDesc}"
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                  Key Specifications & Value Props
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/60 border border-white/5 text-xs md:text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Applied Competencies & Tools
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Sandbox Preview */
            <div>
              {project.interactiveType === 'hospi-ai' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/10 pb-2">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      HOSPI AI Concierge Simulation (The Wina Guest House Instance)
                    </span>
                    <span className="text-amber-400/90 font-mono">24/7 Department Bridge</span>
                  </div>

                  {/* Chat Box */}
                  <div className="h-64 overflow-y-auto space-y-3 p-4 bg-zinc-950/80 rounded-xl border border-white/5">
                    {chatMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex flex-col ${
                          msg.sender === 'user' ? 'items-end' : 'items-start'
                        }`}
                      >
                        {msg.department && (
                          <span className="text-[10px] text-amber-400/80 font-mono mb-0.5">
                            {msg.department}
                          </span>
                        )}
                        <div
                          className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-xs md:text-sm ${
                            msg.sender === 'user'
                              ? 'bg-amber-400 text-black font-medium'
                              : 'bg-zinc-800 text-zinc-200 border border-white/10'
                          }`}
                        >
                          {msg.text}
                        </div>
                        <span className="text-[10px] text-zinc-500 mt-1">{msg.time}</span>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="text-xs text-zinc-500 italic flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" />
                        <span>HOSPI AI is coordinating department response...</span>
                      </div>
                    )}
                  </div>

                  {/* Quick Prompts */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      onClick={() => handleSendHospiMessage('Can I request fresh towels to Room 3?')}
                      className="text-xs px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-white/5 transition-colors"
                    >
                      "Need fresh towels"
                    </button>
                    <button
                      onClick={() => handleSendHospiMessage('What is the guest Wi-Fi password?')}
                      className="text-xs px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-white/5 transition-colors"
                    >
                      "Guest Wi-Fi"
                    </button>
                    <button
                      onClick={() => handleSendHospiMessage('Recommend sunset spots in Canggu')}
                      className="text-xs px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-white/5 transition-colors"
                    >
                      "Canggu sunset recommendations"
                    </button>
                  </div>

                  {/* Input form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendHospiMessage();
                    }}
                    className="flex items-center gap-2 pt-1"
                  >
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask the hotel concierge (e.g. airport taxi, pool towels, dining)..."
                      className="flex-1 bg-zinc-900 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="p-2.5 bg-amber-400 text-black rounded-lg hover:bg-amber-300 transition-colors"
                      aria-label="Send query"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}

              {project.interactiveType === 'gadget-hemat' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <span className="text-xs text-amber-400 font-semibold block">
                        Gadget Hemat SEO Intent Simulator
                      </span>
                      <span className="text-xs text-zinc-400">
                        Keyword clustering & affiliate product conversion engine
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-white/5">
                      <button
                        onClick={() => setSelectedBudget('budget')}
                        className={`px-2.5 py-1 text-xs rounded ${
                          selectedBudget === 'budget'
                            ? 'bg-amber-400 text-black font-semibold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        Under IDR 3M
                      </button>
                      <button
                        onClick={() => setSelectedBudget('mid')}
                        className={`px-2.5 py-1 text-xs rounded ${
                          selectedBudget === 'mid'
                            ? 'bg-amber-400 text-black font-semibold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        IDR 3M – 7M
                      </button>
                      <button
                        onClick={() => setSelectedBudget('pro')}
                        className={`px-2.5 py-1 text-xs rounded ${
                          selectedBudget === 'pro'
                            ? 'bg-amber-400 text-black font-semibold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        Student Pro Gear
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    value={gadgetSearch}
                    onChange={(e) => setGadgetSearch(e.target.value)}
                    placeholder="Search gadget catalog (e.g. tablet, noise-canceling, ultrabook)..."
                    className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  />

                  {/* Sample gadget items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">Redmi Note Series (Curated)</span>
                          <span className="text-xs text-emerald-400 font-mono">Top Value Pick</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1">
                          High refresh rate AMOLED, 5000mAh battery. Ranked #1 for high-volume organic search queries.
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/5">
                        <span className="text-xs font-mono text-zinc-300">Est. IDR 2,499,000</span>
                        <span className="text-[10px] text-amber-400">Affiliate Link Ready</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">Anker Space ANC Earbuds</span>
                          <span className="text-xs text-cyan-400 font-mono">Best Audio Value</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1">
                          Hybrid active noise cancellation, custom EQ for remote work and studying in cafes.
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/5">
                        <span className="text-xs font-mono text-zinc-300">Est. IDR 899,000</span>
                        <span className="text-[10px] text-amber-400">Affiliate Link Ready</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-950 border border-white/5 text-[11px] text-zinc-400">
                    <span className="text-amber-400 font-semibold">SEO Blueprint Insight: </span>
                    Dhiyo planned targeted long-tail keywords like "rekomendasi gadget mahasiswa murah" and "earbuds anc terbaik harga pelajar" to capture high-conversion transactional traffic with organic zero-spend authority.
                  </div>
                </div>
              )}

              {project.interactiveType === 'trading-sim' && (
                <div className="space-y-4">
                  {/* Top terminal stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-zinc-950 rounded-xl border border-white/10 font-mono text-xs">
                    <div>
                      <span className="text-zinc-500 block text-[10px]">VIRTUAL BALANCE</span>
                      <span className="text-white font-semibold tabular-nums">
                        ${virtualBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block text-[10px]">MARKET PRICE</span>
                      <span className="text-amber-400 font-semibold tabular-nums">
                        ${currentPrice.toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block text-[10px]">ACTIVE POSITION</span>
                      <span className="text-zinc-300">
                        {activePosition ? `${activePosition.type} (${activePosition.size} Lots)` : 'None'}
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block text-[10px]">UNREALIZED P&L</span>
                      <span
                        className={`font-semibold tabular-nums ${
                          pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {pnl >= 0 ? `+$${pnl.toFixed(2)}` : `-$${Math.abs(pnl).toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  {/* Simulated Trading Controls */}
                  <div className="p-4 bg-zinc-900/60 rounded-xl border border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span>Interactive Order Execution (Zero Risk Educational Engine)</span>
                      <span className="text-[11px] text-zinc-500">Asset: BTC / USD Simulated</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleOpenPosition('LONG')}
                        disabled={!!activePosition}
                        className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                          activePosition
                            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        <span>Execute Buy / Long</span>
                      </button>

                      <button
                        onClick={() => handleOpenPosition('SHORT')}
                        disabled={!!activePosition}
                        className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                          activePosition
                            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                            : 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-950'
                        }`}
                      >
                        <ArrowDownRight className="w-4 h-4" />
                        <span>Execute Sell / Short</span>
                      </button>
                    </div>

                    {activePosition && (
                      <button
                        onClick={handleClosePosition}
                        className="w-full py-2 bg-amber-400 text-black font-semibold text-xs rounded-lg hover:bg-amber-300 transition-colors"
                      >
                        Close Current Position (Realize {pnl >= 0 ? `+$${pnl.toFixed(2)}` : `-$${Math.abs(pnl).toFixed(2)}`})
                      </button>
                    )}
                  </div>

                  {/* Trade history */}
                  {tradeHistory.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] text-zinc-500 font-mono uppercase">
                        Recent Practice Trades:
                      </span>
                      {tradeHistory.map((th, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-xs font-mono bg-zinc-950 px-3 py-1.5 rounded border border-white/5"
                        >
                          <span className="text-zinc-400">{th.type}</span>
                          <span
                            className={th.pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}
                          >
                            {th.pnl >= 0 ? `+$${th.pnl.toFixed(2)}` : `-$${Math.abs(th.pnl).toFixed(2)}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#0E1017]">
          <span className="text-xs text-zinc-400">
            Concept & Architecture by I Nyoman Dhiyo Pradyana Putra
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-black font-semibold text-xs rounded-lg hover:bg-zinc-200 transition-colors"
            >
              <span>Discuss Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
