import React from 'react';
import { Layers, Film, Sliders, Volume2, ArrowRight } from 'lucide-react';
import { ASSETS, EDITING_STACK } from '../data/defaultPortfolio';

interface AboutProps {
  onHireClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onHireClick }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070709] border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3 flex items-center gap-2">
            <span>Behind The Edit Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editor Portrait / Studio Visual */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
              <img
                src={ASSETS.aboutStudio}
                alt="Rana Fahad Video Editor Studio"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80">
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  Rana Fahad
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Lead Editor &amp; Post-Production Specialist
                </div>
              </div>
            </div>

            {/* Subtle glow edge */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 -z-10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* User Requested Exact Description */}
            <blockquote className="text-xl sm:text-2xl font-medium text-slate-100 leading-relaxed mb-6">
              &ldquo;I am Rana Fahad, a passionate video editor dedicated to transforming ordinary footage into extraordinary visual experiences. I create engaging, creative, and professional videos for brands, businesses, and content creators.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              Every cut is deliberate, every transition serves the narrative, and every sound cue is calculated to evoke genuine emotion. Whether crafting rapid-fire vertical reels for algorithmic dominance or color grading long-form cinema with nuanced tonal rolls, my workflow blends technical precision with creative intuition.
            </p>

            {/* Creative Competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 text-purple-400 font-semibold text-sm mb-1.5">
                  <Film className="w-4 h-4" />
                  <span>Story &amp; Pacing</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Rhythm-focused cutting that hooks the audience in the opening seconds and keeps watch-time sustained.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 text-blue-400 font-semibold text-sm mb-1.5">
                  <Sliders className="w-4 h-4" />
                  <span>Color Science</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Professional DaVinci Resolve color balancing, film emulation, skin-tone isolation, and HDR grade.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 text-indigo-400 font-semibold text-sm mb-1.5">
                  <Volume2 className="w-4 h-4" />
                  <span>Sound Architecture</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Multi-channel audio sweetening, surgical noise reduction, atmospheric Foley, and dynamic risers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 text-pink-400 font-semibold text-sm mb-1.5">
                  <Layers className="w-4 h-4" />
                  <span>Motion &amp; VFX</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Kinetic typography, custom tracking, speed ramps, and seamless composite overlays in After Effects.
                </p>
              </div>
            </div>

            {/* Software Stack */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-mono">
                  Primary Software Suite
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  {EDITING_STACK.map((item, idx) => (
                    <span key={item.name} className="flex items-center">
                      <span className="text-slate-300 hover:text-white transition-colors">{item.name}</span>
                      {idx < EDITING_STACK.length - 1 && (
                        <span className="text-slate-600 mx-2" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={onHireClick}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/50 rounded-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer w-fit"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
