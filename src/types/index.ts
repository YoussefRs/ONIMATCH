export type UserRole = 'business' | 'influencer';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
}

export interface BusinessProfile extends User {
  role: 'business';
  companyName: string;
  industry: string;
  description: string;
  website?: string;
  targetAudience: string[];
  budget?: number;
  goals: string[];
  previousCollaborations?: CollaborationHistory[];
}

export interface InfluencerProfile extends User {
  role: 'influencer';
  niche: string[];
  bio: string;
  socialMedia: SocialMediaAccount[];
  audienceSize: number;
  audienceDemographics: AudienceDemographic[];
  engagementRate: number;
  previousCollaborations?: CollaborationHistory[];
  pricing?: {
    postRate?: number;
    storyRate?: number;
    videoRate?: number;
  };
}

export interface SocialMediaAccount {
  platform: string;
  handle: string;
  url: string;
  followers: number;
}

export interface AudienceDemographic {
  ageRange: string;
  percentage: number;
  gender?: string;
  location?: string;
}

export interface CollaborationHistory {
  id: string;
  partnerName: string;
  date: Date;
  description: string;
  results?: string;
}

export interface Match {
  id: string;
  businessId: string;
  influencerId: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  compatibilityScore: number;
  createdAt: Date;
  messages?: Message[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Payment {
  id: string;
  matchId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  date: Date;
  commission: number;
  description?: string;
}

export interface AnalyticsData {
  impressions: number;
  clicks: number;
  conversions: number;
  roi: number;
  timeline: TimelinePoint[];
}

export interface TimelinePoint {
  date: Date;
  value: number;
  label: string;
}