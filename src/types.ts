export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website' | 'researchgate' | 'kaggle';
  url: string;
  label: string;
}

export interface HighlightStat {
  label: string;
  value: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level?: 'Proficient' | 'Advanced' | 'Familiar';
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  category: 'Full Stack' | 'Frontend' | 'Machine Learning & AI' | 'Web Apps';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  impactMetric?: string;
  highlights: string[];
  image: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
  description?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logoText?: string;
  logoBgColor?: string;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  secondaryBio: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  availableForWork: boolean;
  statusMessage: string;
  avatarUrl: string;
  socials: SocialLink[];
  stats: HighlightStat[];
}

export interface PortfolioData {
  profile: PortfolioProfile;
  skills: SkillGroup[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
}

