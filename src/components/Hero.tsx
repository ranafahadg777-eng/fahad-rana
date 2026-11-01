import React from 'react';
import { Play, Sparkles, ArrowRight, Film } from 'lucide-react';
import { ASSETS, SAMPLE_VIDEOS } from '../data/defaultPortfolio';

interface HeroProps {
  onViewWorkClick: () => void;
  onHireClick: () => void;
  onOpenVideoModal: (videoUrl: string, title: string, category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWorkClick,
  onHireClick,
  onOpenVideoModal,
}) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-purple-700/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle grid texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4">
              <Film className="w-4 h-4 text-purple-400" />
              <span>Cinematic Post-Production</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Available For Projects</span>
            </div>

            {/* Large Main Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] mb-6">
              RANA <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                FAHAD
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-medium text-purple-200/90 leading-snug mb-4 max-w-2xl text-balance">
              Turning Your Vision Into Stunning Visual Stories.
            </p>

            {/* Short Description */}
            <p className="text-sm sm:text-base font-normal text-slate-400 leading-relaxed mb-8 max-w-xl">
              Professional Video Editor <span className="text-purple-400 font-bold mx-1">|</span> Creative Storyteller <span className="text-blue-400 font-bold mx-1">|</span> Content Creator.
              Specialized in high-impact YouTube edits, viral reels, commercial advertisements, and atmospheric cinematic narratives.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onViewWorkClick}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-xl hover:from-purple-500 hover:to-blue-500 shadow-xl shadow-purple-900/30 hover:shadow-purple-700/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onHireClick}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Hire Me</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Premiere Pro &amp; DaVinci Resolve Master</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Fast Turnaround Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>4K/6K ProRes Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Reel Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-950/80 shadow-2xl group">
              
              {/* Media image */}
              <div className="relative aspect-video sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden">
                <img
                  src={ASSETS.heroShowreel}
                  alt="Rana Fahad Video Editing Suite & Showreel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Cinematic film scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/40 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => onOpenVideoModal(
                      SAMPLE_VIDEOS.natureCinematic,
                      'RANA FAHAD — 2026 Cinematic Showreel',
                      'Director Showreel'
                    )}
                    className="relative flex items-center justify-center w-20 h-20 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white shadow-2xl shadow-purple-600/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group/btn"
                    aria-label="Play Showreel"
                  >
                    <span className="absolute -inset-2 rounded-full border border-purple-400/40 animate-ping opacity-75" />
                    <Play className="w-8 h-8 fill-white translate-x-0.5" />
                  </button>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    Play 2026 Showreel
                  </span>
                  <span className="text-slate-400">4K Master · 03:15</span>
                </div>
              </div>

              {/* Editing timeline visual strip */}
              <div className="p-4 bg-[#0a0b12] border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-800/50 flex items-center justify-center text-purple-400 text-xs font-bold font-mono">
                    RF
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Timeline / Sequence 01</div>
                    <div className="text-[11px] text-slate-400">Multi-cam · Color Node · 48kHz Audio</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-purple-400 font-medium">REC 709 / DCI-P3</div>
                  <div className="text-[10px] text-slate-500 font-mono">23.976 FPS</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width editorial metrics strip below split (as mandated by portfolio guidelines) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              4K / 6K
            </div>
            <div className="text-xs text-slate-400 mt-1">High-Bitrate ProRes Workflow</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 tracking-tight font-display">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1">Dedicated Project Attention</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight font-display">
              Rec.709
            </div>
            <div className="text-xs text-slate-400 mt-1">Hollywood Standard Color Grading</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight font-display">
              24-48h
            </div>
            <div className="text-xs text-slate-400 mt-1">Express Turnaround Available</div>
          </div>
        </div>

      </div>
    </section>
  );
};
