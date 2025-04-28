export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'mobile' | 'design' | 'other';
}

export interface NavItem {
  label: string;
  href: string;
}