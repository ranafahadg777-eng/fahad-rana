import React from 'react';
import { ArrowUp, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { SocialLinks } from '../types/portfolio';

interface FooterProps {
  socialLinks: SocialLinks;
}

export const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060a] border-t border-slate-900 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          <div>
            <div className="text-2xl font-black text-white tracking-wider uppercase mb-2">
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                RANA FAHAD
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Professional Video Editor &amp; Creative Storyteller. Turning your vision into stunning visual stories.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${socialLinks.email}`}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              aria-label="Email Rana Fahad"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all"
              aria-label="WhatsApp Rana Fahad"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all"
              aria-label="Instagram Rana Fahad"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
              aria-label="Facebook Rana Fahad"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer ml-3"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row with exact requested strings */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            &copy; 2026 RANA FAHAD. All Rights Reserved.
          </div>
          <div className="text-purple-400/90">
            Designed with Creativity &amp; Passion.
          </div>
        </div>

      </div>
    </footer>
  );
};
