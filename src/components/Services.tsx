import React, { useState } from 'react';
import { 
  Youtube, 
  Smartphone, 
  Share2, 
  Briefcase, 
  Film, 
  Sliders, 
  Sparkles, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data/defaultPortfolio';
import { ServiceItem } from '../types/portfolio';

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'youtube':
        return <Youtube className="w-5 h-5 text-red-400" />;
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'share2':
        return <Share2 className="w-5 h-5 text-blue-400" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      case 'film':
        return <Film className="w-5 h-5 text-indigo-400" />;
      case 'sliders':
        return <Sliders className="w-5 h-5 text-cyan-400" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      default:
        return <Film className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#090a10] border-t border-slate-900">
      {/* Background gradient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
              Craft &amp; Deliverables
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              My Services
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
            Tailored post-production solutions designed to elevate your visual identity, drive audience retention, and deliver broadcast-grade quality.
          </p>
        </div>

        {/* 7 Services Grid with visual hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0 || index === 4; // YouTube & Cinematic highlighted
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#131525] to-[#0c0d16] border border-purple-500/30 hover:border-purple-500/60 shadow-xl shadow-purple-950/20'
                    : 'bg-[#0d0e17] border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Bar: Editorial Index & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-slate-500 group-hover:text-purple-400 transition-colors">
                      0{index + 1}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-purple-300/80 mb-4 leading-relaxed">
                    {service.tagline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables / Features list */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-slate-800/60">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Key Capabilities:
                    </div>
                    {service.features.slice(0, 3).map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {service.aspectRatio}
                  </span>
                  
                  <button
                    type="button"
                    onClick={() => onSelectServiceForContact(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
