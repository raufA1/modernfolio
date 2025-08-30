export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: 'web' | 'mobile' | 'design' | 'other';
}

export interface NavItem {
  title: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}