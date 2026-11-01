import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Settings, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { SocialLinks } from '../types/portfolio';

interface ContactProps {
  initialService?: string;
  socialLinks: SocialLinks;
  onUpdateSocialLinks: (links: SocialLinks) => void;
}

export const Contact: React.FC<ContactProps> = ({
  initialService = '',
  socialLinks,
  onUpdateSocialLinks,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(initialService || 'YouTube Video Editing');
  const [projectDetails, setProjectDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isEditingSocials, setIsEditingSocials] = useState(false);
  const [tempSocials, setTempSocials] = useState<SocialLinks>({ ...socialLinks });

  // Update projectType if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setProjectType(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} - from ${fullName}`);
    const body = encodeURIComponent(
      `Hello Rana Fahad,\n\nMy Name: ${fullName}\nMy Email: ${email}\nProject Type: ${projectType}\n\nProject Details:\n${projectDetails}\n\nLooking forward to hearing from you!`
    );
    return `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppDirectLink = () => {
    const message = encodeURIComponent(
      `Hi Rana Fahad, my name is ${fullName || 'Client'}. I'm reaching out regarding ${projectType}. Details: ${projectDetails || 'I need video editing services.'}`
    );
    const phoneClean = socialLinks.whatsappPhone.replace(/[^0-9]/g, '');
    return `https://wa.me/${phoneClean || '923000000000'}?text=${message}`;
  };

  const handleCopyInquiry = () => {
    const text = `Inquiry for Rana Fahad:\nName: ${fullName}\nEmail: ${email}\nType: ${projectType}\nDetails: ${projectDetails}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveSocials = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSocialLinks(tempSocials);
    setIsEditingSocials(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070709] border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-blue-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Start Your Next Project</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Have a project in mind, need ongoing content editing, or want to discuss a custom production? Reach out directly or fill out the project details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Direct Channels
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Prefer direct messaging? Connect instantly on WhatsApp or send an email directly to my professional inbox.
              </p>

              {/* Contact Links Cards */}
              <div className="space-y-3">
                
                {/* Email */}
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-4 rounded-xl bg-[#0d0e17] border border-slate-800 hover:border-purple-500/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-purple-950/70 border border-purple-800/40 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Email Directly</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {socialLinks.email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* WhatsApp */}
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#0d0e17] border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/70 border border-emerald-800/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">WhatsApp Chat</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        {socialLinks.whatsappPhone || 'Connect on WhatsApp'}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#0d0e17] border border-slate-800 hover:border-pink-500/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-pink-950/70 border border-pink-800/40 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Instagram Portfolio</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                        @ranafahad_editor
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* Facebook */}
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#0d0e17] border border-slate-800 hover:border-blue-500/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Facebook Page</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        Rana Fahad Video Editing
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

              </div>
            </div>

            {/* Quick edit social handles button for Rana Fahad */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setTempSocials({ ...socialLinks });
                  setIsEditingSocials(!isEditingSocials);
                }}
                className="text-xs text-slate-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>{isEditingSocials ? 'Close Social Settings' : 'Edit Contact Links & Social Handles'}</span>
              </button>

              {/* Editable Socials Drawer */}
              {isEditingSocials && (
                <form onSubmit={handleSaveSocials} className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="text-xs font-semibold text-white">Update Contact Details</div>
                  <div>
                    <label className="block text-[11px] text-slate-400">Email Address</label>
                    <input
                      type="email"
                      value={tempSocials.email}
                      onChange={(e) => setTempSocials({ ...tempSocials, email: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400">WhatsApp Number or Link</label>
                    <input
                      type="text"
                      value={tempSocials.whatsappPhone}
                      onChange={(e) => setTempSocials({ ...tempSocials, whatsappPhone: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400">Instagram Profile Link</label>
                    <input
                      type="url"
                      value={tempSocials.instagram}
                      onChange={(e) => setTempSocials({ ...tempSocials, instagram: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400">Facebook Profile Link</label>
                    <input
                      type="url"
                      value={tempSocials.facebook}
                      onChange={(e) => setTempSocials({ ...tempSocials, facebook: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-1.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded"
                  >
                    Save Contact Links
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0d0e17] border border-slate-800 shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3.5 text-sm rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 text-sm rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  {/* Project Service Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Service Category
                    </label>
                    <select
                      id="projectType"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3.5 text-sm rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    >
                      <option value="YouTube Video Editing">YouTube Video Editing</option>
                      <option value="Reels & Shorts Editing">Reels &amp; Shorts Editing</option>
                      <option value="Social Media Video Editing">Social Media Video Editing</option>
                      <option value="Promotional & Business Videos">Promotional &amp; Business Videos</option>
                      <option value="Cinematic Video Editing">Cinematic Video Editing</option>
                      <option value="Color Grading & Sound Design">Color Grading &amp; Sound Design</option>
                      <option value="Intro & Outro Animation">Intro &amp; Outro Animation</option>
                      <option value="Custom Project / Long-Term Retainer">Custom Project / Retainer</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Project Details <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      required
                      rows={4}
                      placeholder="Tell me about your video, raw footage format, target duration, deadline, or references..."
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      className="w-full px-4 py-3.5 text-sm rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl shadow-xl shadow-purple-900/30 hover:shadow-purple-700/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Project Details</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              ) : (
                /* Post Submission Confirmation & Action Options */
                <div className="py-6 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Inquiry Prepared!
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-purple-300 font-semibold">{fullName}</span>! Choose how you would like to send your inquiry to Rana Fahad:
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left text-xs font-mono space-y-1.5 text-slate-300">
                    <div><span className="text-slate-500">Service:</span> {projectType}</div>
                    <div><span className="text-slate-500">Client:</span> {fullName} ({email})</div>
                    <div className="line-clamp-2"><span className="text-slate-500">Details:</span> {projectDetails}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 justify-center pt-2">
                    <a
                      href={getMailtoLink()}
                      className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </a>

                    <a
                      href={getWhatsAppDirectLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      className="w-full sm:w-auto px-4 py-3 text-xs uppercase tracking-wider font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setProjectDetails('');
                    }}
                    className="text-xs text-slate-400 hover:text-white underline pt-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
