import React, { useState } from 'react';
import { Play, SlidersHorizontal, Plus, Sparkles, Film, ArrowUpRight } from 'lucide-react';
import { PortfolioItem, ProjectCategory } from '../types/portfolio';

interface PortfolioProps {
  items: PortfolioItem[];
  onOpenVideoModal: (item: PortfolioItem) => void;
  onOpenManageModal: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  items,
  onOpenVideoModal,
  onOpenManageModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'YouTube Videos',
    'Instagram Reels',
    'Cinematic Edits',
    'Promotional Videos',
  ];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-[#070709] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3 flex items-center gap-2">
              <Film className="w-4 h-4 text-purple-400" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              My Portfolio
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Manage / Replace Media Button for Rana Fahad */}
            <button
              type="button"
              onClick={onOpenManageModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/50 rounded-lg transition-all cursor-pointer shadow-sm"
              title="Add or replace portfolio videos & images"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-purple-400" />
              <span>Manage / Replace Videos</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isVertical = item.aspectRatio === '9:16';
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-[#0d0e17] border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-950/20"
              >
                {/* Media Thumbnail Container */}
                <div 
                  className={`relative overflow-hidden cursor-pointer bg-slate-950 ${
                    isVertical ? 'aspect-[9/14]' : 'aspect-video'
                  }`}
                  onClick={() => onOpenVideoModal(item)}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e17] via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Duration overlay badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[11px] font-mono font-medium text-slate-200 border border-white/10">
                    {item.duration}
                  </div>

                  {/* Category overlay */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-purple-950/80 backdrop-blur-md text-[10px] font-semibold text-purple-300 border border-purple-500/30 uppercase tracking-wider">
                    {item.category}
                  </div>

                  {/* Play Button Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-xl shadow-purple-600/40 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Details Area */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Unboxed metadata */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2 font-mono">
                      <span>{item.deliverable}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-purple-400">{item.software.join(', ')}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Card bottom click action */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenVideoModal(item)}
                      className="text-xs font-semibold text-purple-400 group-hover:text-purple-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Watch Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <span className="text-[11px] font-mono text-slate-500">
                      {item.aspectRatio}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state fallback */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center rounded-2xl border border-dashed border-slate-800 bg-slate-950/40">
            <Film className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <p className="text-sm text-slate-400">No projects found in this category.</p>
            <button
              onClick={onOpenManageModal}
              className="mt-4 px-4 py-2 text-xs font-semibold text-purple-400 hover:text-purple-300"
            >
              + Add a new project
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
