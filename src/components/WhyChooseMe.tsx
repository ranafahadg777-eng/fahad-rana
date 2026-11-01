import React from 'react';
import { 
  Sparkles, 
  Video, 
  Clock, 
  Search, 
  Smile,
  ShieldCheck,
  Check
} from 'lucide-react';

export const WhyChooseMe: React.FC = () => {
  const pillars = [
    {
      title: 'Creative and Professional Editing',
      description: 'Translating concepts into compelling visual narratives. Each cut, graphic element, and transition is purposefully selected to match your brand tone and engage viewers.',
      icon: Sparkles,
      color: 'purple',
      badge: 'Artistry & Flow',
    },
    {
      title: 'High-Quality Video Output',
      description: 'Mastered in pristine 4K UHD or high-bitrate vertical formats with correct color spaces (Rec.709/DCI-P3), cinema-grade ProRes rendering, and uncompressed audio fidelity.',
      icon: Video,
      color: 'blue',
      badge: '4K / 6K Standards',
    },
    {
      title: 'On-Time Delivery',
      description: 'Disciplined timeline management with transparent milestones. Whether working on tight daily reel turnarounds or planned commercial deadlines, projects are delivered promptly.',
      icon: Clock,
      color: 'indigo',
      badge: 'Reliable Scheduling',
    },
    {
      title: 'Attention to Detail',
      description: 'Frame-by-frame scrutiny: eliminating micro-audio pops, color-matching adjacent camera angles, ensuring subtitle typography harmony, and fluid speed ramping.',
      icon: Search,
      color: 'pink',
      badge: 'Frame Accuracy',
    },
    {
      title: 'Client Satisfaction',
      description: 'Collaborative revision cycles with open communication. Your vision remains central at every stage until you are 100% satisfied with the final exported master.',
      icon: Smile,
      color: 'emerald',
      badge: 'Dedicated Support',
    },
  ];

  const workflowSteps = [
    { step: '01', name: 'Raw Media Ingest', desc: 'Footage organization, proxy generation, and multi-cam audio sync.' },
    { step: '02', name: 'A-Roll & Hook Assembly', desc: 'Crafting the narrative spine and selecting the highest-retention moments.' },
    { step: '03', name: 'Sound Design & Foley', desc: 'Layering music beds, sound effects, risers, and dialogue restoration.' },
    { step: '04', name: 'Color Science & Motion', desc: 'Shot-matching, LUT grading, film grain, and kinetic titles.' },
    { step: '05', name: 'Review & Master Delivery', desc: 'Revisions, client approval, and pristine high-bitrate export.' },
  ];

  return (
    <section id="why-me" className="py-24 relative bg-[#090a10] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>The Production Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Why Choose Me
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Every project benefits from focused craftsmanship, industry-standard post-production workflows, and an unwavering commitment to your creative vision.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            // 5th item spans across 2 columns on large screens for a balanced layout
            const isWide = idx === 4;
            return (
              <div
                key={pillar.title}
                className={`p-7 rounded-2xl bg-[#0d0e17] border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-purple-300/80">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-purple-200 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Guaranteed quality standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Standard Workflow Section */}
        <div className="rounded-2xl p-8 bg-[#0b0c14] border border-slate-800">
          <div className="mb-6">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              Step-by-Step Execution
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Production Workflow &amp; Quality Control
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((wf) => (
              <div key={wf.step} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <div className="text-xs font-mono font-bold text-purple-400 mb-1">
                  {wf.step}
                </div>
                <div className="text-xs font-semibold text-white mb-1">
                  {wf.name}
                </div>
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  {wf.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
