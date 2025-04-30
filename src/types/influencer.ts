export interface SocialMedia {
  platform: string;
  handle: string;
  followers: number;
  url: string;
}

export interface Pricing {
  postRate?: number;
  storyRate?: number;
  videoRate?: number;
  campaignRate?: number;
}

export interface InfluencerProfile {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  niche: string[];
  location?: string;
  audienceSize: number;
  engagementRate: number;
  socialMedia: SocialMedia[];
  pricing?: Pricing;
}