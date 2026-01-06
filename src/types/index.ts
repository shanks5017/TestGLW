export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  status: 'saved' | 'applied' | 'interview' | 'offer' | 'rejected';
  dateAdded: string;
  deadline?: string;
  matchScore?: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}