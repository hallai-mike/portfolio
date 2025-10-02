export interface Project {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'on-hold';
  dateRange: {
    start: string;
    end?: string;
  };
  description: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  details: {
    role: string;
    painPoint: string;
    curiosity: string;
    idea: string;
    challenges: string;
    learnings: string;
    impact: string;
  };
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
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