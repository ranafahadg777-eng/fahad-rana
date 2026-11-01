export type ProjectCategory = 
  | 'All'
  | 'YouTube Videos'
  | 'Instagram Reels'
  | 'Cinematic Edits'
  | 'Promotional Videos';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'YouTube Videos' | 'Instagram Reels' | 'Cinematic Edits' | 'Promotional Videos';
  description: string;
  thumbnail: string;
  videoUrl?: string; // direct video mp4/webm, YouTube embed, or stream
  aspectRatio: '16:9' | '9:16';
  duration: string;
  deliverable: string;
  software: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  features: string[];
  aspectRatio: string;
  iconName: 'youtube' | 'smartphone' | 'share2' | 'briefcase' | 'film' | 'sliders' | 'sparkles';
}

export interface SocialLinks {
  email: string;
  whatsapp: string;
  whatsappPhone: string;
  instagram: string;
  facebook: string;
}
