import React, { useState } from 'react';
import { X, Plus, Trash2, Edit3, RotateCcw, Check, Video, Image as ImageIcon } from 'lucide-react';
import { PortfolioItem } from '../types/portfolio';

interface MediaManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: PortfolioItem[];
  onSaveItems: (updated: PortfolioItem[]) => void;
  onResetDefaults: () => void;
}

export const MediaManagerModal: React.FC<MediaManagerModalProps> = ({
  isOpen,
  onClose,
  items,
  onSaveItems,
  onResetDefaults,
}) => {
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [activeTab, setActiveTab] = useState<'list' | 'edit'>('list');
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleStartEdit = (item: PortfolioItem) => {
    setEditingItem({ ...item });
    setActiveTab('edit');
  };

  const handleStartNew = () => {
    const newItem: PortfolioItem = {
      id: `custom-${Date.now()}`,
      title: 'New Video Project',
      category: 'YouTube Videos',
      description: 'Custom video edited by Rana Fahad. Fast cuts, sound design, and color grading.',
      thumbnail: '/src/assets/images/portfolio_cinematic_film_1793534193103.jpg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      aspectRatio: '16:9',
      duration: '02:45',
      deliverable: '4K UHD Master',
      software: ['Premiere Pro', 'DaVinci Resolve'],
      featured: false,
    };
    setEditingItem(newItem);
    setActiveTab('edit');
  };

  const handleSaveCurrentEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    const exists = items.some((i) => i.id === editingItem.id);
    let updated: PortfolioItem[];
    if (exists) {
      updated = items.map((i) => (i.id === editingItem.id ? editingItem : i));
    } else {
      updated = [editingItem, ...items];
    }

    onSaveItems(updated);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
    setActiveTab('list');
    setEditingItem(null);
  };

  const handleDeleteItem = (id: string) => {
    if (confirm('Are you sure you want to remove this project?')) {
      const updated = items.filter((i) => i.id !== id);
      onSaveItems(updated);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-hidden rounded-2xl bg-[#0d0e17] border border-slate-800 shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#111320] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-900/60 border border-purple-700/50 flex items-center justify-center text-purple-300">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Portfolio Media Manager</h3>
              <p className="text-xs text-slate-400">Replace sample videos and thumbnails with your real projects</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Saved Toast notice */}
        {savedNotice && (
          <div className="px-6 py-2 bg-emerald-950/80 border-b border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Changes successfully saved to your portfolio!</span>
          </div>
        )}

        {/* Mode Selector Tabs */}
        <div className="px-6 pt-4 pb-2 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('list')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'list'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Project List ({items.length})
            </button>
            <button
              type="button"
              onClick={handleStartNew}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-purple-300 flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Video</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              if (confirm('Reset portfolio back to default sample videos?')) {
                onResetDefaults();
                setActiveTab('list');
                setEditingItem(null);
              }
            }}
            className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Defaults</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-grow">
          {activeTab === 'list' ? (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-4 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-14 h-10 object-cover rounded-lg bg-slate-800 shrink-0 border border-slate-700/50"
                    />
                    <div className="overflow-hidden">
                      <div className="text-xs font-semibold text-white truncate max-w-[260px] sm:max-w-xs">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2">
                        <span className="text-purple-400">{item.category}</span>
                        <span>·</span>
                        <span className="font-mono">{item.duration}</span>
                        <span>·</span>
                        <span>{item.aspectRatio}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleStartEdit(item)}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-purple-950/80 hover:text-purple-300 text-slate-300 text-xs flex items-center gap-1 transition-colors"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteItem(item.id)}
                      className="p-1.5 rounded-lg hover:bg-red-950/50 hover:text-red-400 text-slate-500 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : editingItem ? (
            <form onSubmit={handleSaveCurrentEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="YouTube Videos">YouTube Videos</option>
                    <option value="Instagram Reels">Instagram Reels</option>
                    <option value="Cinematic Edits">Cinematic Edits</option>
                    <option value="Promotional Videos">Promotional Videos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Aspect Ratio
                  </label>
                  <select
                    value={editingItem.aspectRatio}
                    onChange={(e) => setEditingItem({ ...editingItem, aspectRatio: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="16:9">16:9 Widescreen (Landscape)</option>
                    <option value="9:16">9:16 Mobile Vertical (Reels/Shorts)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Video URL (YouTube, Vimeo, or Direct MP4 link)
                </label>
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=... or direct .mp4 URL"
                  value={editingItem.videoUrl || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, videoUrl: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Supports YouTube watch links, short URLs, Vimeo, or direct MP4/WebM storage links.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Thumbnail Image URL or Path
                </label>
                <input
                  type="text"
                  required
                  value={editingItem.thumbnail}
                  onChange={(e) => setEditingItem({ ...editingItem, thumbnail: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Duration (e.g. 03:45 or 0:45)
                  </label>
                  <input
                    type="text"
                    value={editingItem.duration}
                    onChange={(e) => setEditingItem({ ...editingItem, duration: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Deliverable Spec
                  </label>
                  <input
                    type="text"
                    value={editingItem.deliverable}
                    onChange={(e) => setEditingItem({ ...editingItem, deliverable: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Description
                </label>
                <textarea
                  rows={2}
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('list');
                    setEditingItem(null);
                  }}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-md transition-all"
                >
                  Save Project
                </button>
              </div>
            </form>
          ) : null}
        </div>

      </div>
    </div>
  );
};
