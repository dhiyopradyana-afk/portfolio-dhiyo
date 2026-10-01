export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  indonesianDesc: string;
  image: string;
  tags: string[];
  features: string[];
  externalUrl?: string;
  interactiveType: 'hospi-ai' | 'gadget-hemat' | 'trading-sim';
}

export interface EducationItem {
  id: string;
  number: string;
  institution: string;
  program: string;
  period: string;
  status: string;
  description: string;
  indonesianDesc: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  indonesianDesc: string;
  image: string;
  websiteUrl: string;
  instagramUrl?: string;
  instagramHandle?: string;
  responsibilities: {
    title: string;
    description: string;
  }[];
  keyMetrics: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: {
    name: string;
    note: string;
  }[];
}
