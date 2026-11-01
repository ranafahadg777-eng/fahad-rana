import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { MediaManagerModal } from './components/MediaManagerModal';
import { INITIAL_PORTFOLIO, DEFAULT_SOCIAL_LINKS } from './data/defaultPortfolio';
import { PortfolioItem, SocialLinks } from './types/portfolio';

export default function App() {
  // Portfolio state with localStorage persistence
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(() => {
    try {
      const saved = localStorage.getItem('rana_fahad_portfolio');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading portfolio from storage', e);
    }
    return INITIAL_PORTFOLIO;
  });

  // Social and contact links state with persistence
  const [socialLinks, setSocialLinks] = useState<SocialLinks>(() => {
    try {
      const saved = localStorage.getItem('rana_fahad_socials');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading socials from storage', e);
    }
    return DEFAULT_SOCIAL_LINKS;
  });

  // Modal states
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoUrl?: string;
    title: string;
    category: string;
    aspectRatio?: '16:9' | '9:16';
  }>({
    isOpen: false,
    title: '',
    category: '',
  });

  const [isMediaManagerOpen, setIsMediaManagerOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  const handleSavePortfolio = (updated: PortfolioItem[]) => {
    setPortfolioItems(updated);
    try {
      localStorage.setItem('rana_fahad_portfolio', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save portfolio', e);
    }
  };

  const handleResetDefaults = () => {
    setPortfolioItems(INITIAL_PORTFOLIO);
    try {
      localStorage.removeItem('rana_fahad_portfolio');
    } catch (e) {
      console.error('Failed to reset portfolio', e);
    }
  };

  const handleSaveSocials = (updated: SocialLinks) => {
    setSocialLinks(updated);
    try {
      localStorage.setItem('rana_fahad_socials', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save socials', e);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    scrollToSection('contact');
  };

  const handleOpenVideoFromItem = (item: PortfolioItem) => {
    setVideoModal({
      isOpen: true,
      videoUrl: item.videoUrl,
      title: item.title,
      category: item.category,
      aspectRatio: item.aspectRatio,
    });
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Navigation */}
      <Navbar onHireClick={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onViewWorkClick={() => scrollToSection('portfolio')}
          onHireClick={() => scrollToSection('contact')}
          onOpenVideoModal={(videoUrl, title, category) => {
            setVideoModal({
              isOpen: true,
              videoUrl,
              title,
              category,
              aspectRatio: '16:9',
            });
          }}
        />

        {/* 2. About Me */}
        <About onHireClick={() => scrollToSection('contact')} />

        {/* 3. My Services */}
        <Services onSelectServiceForContact={handleServiceSelect} />

        {/* 4. My Portfolio */}
        <Portfolio
          items={portfolioItems}
          onOpenVideoModal={handleOpenVideoFromItem}
          onOpenManageModal={() => setIsMediaManagerOpen(true)}
        />

        {/* 5. Why Choose Me */}
        <WhyChooseMe />

        {/* 6. Contact Section */}
        <Contact
          initialService={selectedServiceForContact}
          socialLinks={socialLinks}
          onUpdateSocialLinks={handleSaveSocials}
        />
      </main>

      {/* 7. Footer */}
      <Footer socialLinks={socialLinks} />

      {/* Video Lightbox Player Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ ...videoModal, isOpen: false })}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
        category={videoModal.category}
        aspectRatio={videoModal.aspectRatio}
      />

      {/* Media Manager & Replace Modal */}
      <MediaManagerModal
        isOpen={isMediaManagerOpen}
        onClose={() => setIsMediaManagerOpen(false)}
        items={portfolioItems}
        onSaveItems={handleSavePortfolio}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
