export interface Project {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  dateRange: {
    start: string;
    end?: string;
  };
  description: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  details: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  address: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  about: string;
} 