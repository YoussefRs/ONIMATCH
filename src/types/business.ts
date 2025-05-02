export interface BusinessProfile {
    id: string;
    name: string;
    avatar: string;
    description: string;
    industry: string[];
    website: string;
    location: string;
    size: string;
    founded: number;
    socialMedia: {
      platform: string;
      url: string;
    }[];
    previousCollaborations: {
      name: string;
      date: string;
      type: string;
    }[];
  }