import { BusinessProfile, InfluencerProfile, Match, Payment, AnalyticsData } from '../types';

// Mock Business Profiles
export const mockBusinessProfiles: BusinessProfile[] = [
  {
    id: 'b1',
    email: 'john@techstartup.com',
    name: 'John Smith',
    role: 'business',
    companyName: 'TechStartup Inc.',
    industry: 'Technology',
    description: 'Innovative AI solutions for businesses of all sizes',
    website: 'https://techstartup.example.com',
    targetAudience: ['Tech enthusiasts', 'Business owners', 'Developers'],
    budget: 5000,
    goals: ['Brand awareness', 'Product launch', 'Lead generation'],
    createdAt: new Date('2024-01-15'),
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'b2',
    email: 'sarah@beautyco.com',
    name: 'Sarah Johnson',
    role: 'business',
    companyName: 'BeautyCo',
    industry: 'Beauty & Cosmetics',
    description: 'Eco-friendly skincare products for the modern woman',
    website: 'https://beautyco.example.com',
    targetAudience: ['Women 18-45', 'Eco-conscious consumers', 'Beauty enthusiasts'],
    budget: 8000,
    goals: ['Product reviews', 'Social media mentions', 'Sales increase'],
    createdAt: new Date('2024-02-10'),
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'b3',
    email: 'alex@fitgear.com',
    name: 'Alex Williams',
    role: 'business',
    companyName: 'FitGear',
    industry: 'Fitness & Health',
    description: 'Premium fitness gear and apparel',
    website: 'https://fitgear.example.com',
    targetAudience: ['Fitness enthusiasts', 'Athletes', 'Health-conscious individuals'],
    budget: 6500,
    goals: ['Brand ambassadors', 'Product demonstrations', 'Community building'],
    createdAt: new Date('2024-03-05'),
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

// Mock Influencer Profiles
export const mockInfluencerProfiles: InfluencerProfile[] = [
  {
    id: 'i1',
    email: 'emma@creator.com',
    name: 'Emma Davis',
    role: 'influencer',
    niche: ['Fitness', 'Wellness', 'Lifestyle'],
    bio: 'Fitness coach and wellness advocate sharing my journey to help others',
    socialMedia: [
      {
        platform: 'Instagram',
        handle: '@emmafitlife',
        url: 'https://instagram.com/emmafitlife',
        followers: 86000,
      },
      {
        platform: 'TikTok',
        handle: '@emmafitlife',
        url: 'https://tiktok.com/@emmafitlife',
        followers: 120000,
      },
    ],
    audienceSize: 206000,
    audienceDemographics: [
      { ageRange: '18-24', percentage: 35, gender: 'Female', location: 'United States' },
      { ageRange: '25-34', percentage: 45, gender: 'Female', location: 'United States' },
      { ageRange: '35-44', percentage: 20, gender: 'Female', location: 'United States' },
    ],
    engagementRate: 4.8,
    pricing: {
      postRate: 750,
      storyRate: 300,
      videoRate: 1200,
    },
    createdAt: new Date('2024-01-20'),
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'i2',
    email: 'marcus@techreviewer.com',
    name: 'Marcus Chen',
    role: 'influencer',
    niche: ['Technology', 'Gadgets', 'Software'],
    bio: 'Tech enthusiast reviewing the latest gadgets and software solutions',
    socialMedia: [
      {
        platform: 'YouTube',
        handle: 'TechWithMarcus',
        url: 'https://youtube.com/techwithmarcus',
        followers: 450000,
      },
      {
        platform: 'Twitter',
        handle: '@marcustech',
        url: 'https://twitter.com/marcustech',
        followers: 125000,
      },
    ],
    audienceSize: 575000,
    audienceDemographics: [
      { ageRange: '18-24', percentage: 30, gender: 'Male', location: 'United States' },
      { ageRange: '25-34', percentage: 50, gender: 'Male', location: 'Global' },
      { ageRange: '35-44', percentage: 20, gender: 'Male', location: 'Global' },
    ],
    engagementRate: 3.5,
    pricing: {
      postRate: 1500,
      storyRate: 500,
      videoRate: 3500,
    },
    createdAt: new Date('2024-02-05'),
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'i3',
    email: 'sophia@beautyguru.com',
    name: 'Sophia Kim',
    role: 'influencer',
    niche: ['Beauty', 'Skincare', 'Makeup'],
    bio: 'Beauty enthusiast sharing honest reviews and tutorials for all skin types',
    socialMedia: [
      {
        platform: 'Instagram',
        handle: '@sophiabeauty',
        url: 'https://instagram.com/sophiabeauty',
        followers: 320000,
      },
      {
        platform: 'TikTok',
        handle: '@sophiabeauty',
        url: 'https://tiktok.com/@sophiabeauty',
        followers: 500000,
      },
    ],
    audienceSize: 820000,
    audienceDemographics: [
      { ageRange: '18-24', percentage: 40, gender: 'Female', location: 'United States' },
      { ageRange: '25-34', percentage: 40, gender: 'Female', location: 'United States' },
      { ageRange: '35-44', percentage: 20, gender: 'Female', location: 'Global' },
    ],
    engagementRate: 5.2,
    pricing: {
      postRate: 2000,
      storyRate: 800,
      videoRate: 4000,
    },
    createdAt: new Date('2024-02-28'),
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

// Mock Matches
export const mockMatches: Match[] = [
  {
    id: 'm1',
    businessId: 'b1',
    influencerId: 'i2',
    status: 'accepted',
    compatibilityScore: 85,
    createdAt: new Date('2024-03-15'),
    messages: [
      {
        id: 'msg1',
        senderId: 'b1',
        receiverId: 'i2',
        content: 'Hi Marcus, I love your tech reviews and think you would be a great fit for our new AI product launch!',
        timestamp: new Date('2024-03-15T10:30:00'),
        read: true,
      },
      {
        id: 'msg2',
        senderId: 'i2',
        receiverId: 'b1',
        content: "Thanks for reaching out! I'm interested in learning more about your product and how we could collaborate.",
        timestamp: new Date('2024-03-15T14:45:00'),
        read: true,
      },
    ],
  },
  {
    id: 'm2',
    businessId: 'b2',
    influencerId: 'i3',
    status: 'pending',
    compatibilityScore: 92,
    createdAt: new Date('2024-04-02'),
    messages: [
      {
        id: 'msg3',
        senderId: 'b2',
        receiverId: 'i3',
        content: 'Hello Sophia, your beauty content aligns perfectly with our eco-friendly skincare line. Would you be interested in a collaboration?',
        timestamp: new Date('2024-04-02T09:15:00'),
        read: true,
      },
    ],
  },
  {
    id: 'm3',
    businessId: 'b3',
    influencerId: 'i1',
    status: 'completed',
    compatibilityScore: 88,
    createdAt: new Date('2024-03-10'),
    messages: [
      {
        id: 'msg4',
        senderId: 'b3',
        receiverId: 'i1',
        content: 'Emma, we loved your fitness content and would love to have you try our new workout gear collection.',
        timestamp: new Date('2024-03-10T11:00:00'),
        read: true,
      },
      {
        id: 'msg5',
        senderId: 'i1',
        receiverId: 'b3',
        content: "I'm always looking for quality fitness gear to share with my audience. Let's discuss the details!",
        timestamp: new Date('2024-03-10T15:30:00'),
        read: true,
      },
    ],
  },
];

// Mock Payments
export const mockPayments: Payment[] = [
  {
    id: 'p1',
    matchId: 'm3',
    amount: 2500,
    status: 'completed',
    date: new Date('2024-03-25'),
    commission: 250,
    description: 'Instagram post and stories featuring FitGear products',
  },
  {
    id: 'p2',
    matchId: 'm1',
    amount: 3500,
    status: 'pending',
    date: new Date('2024-04-10'),
    commission: 350,
    description: 'YouTube video review of TechStartup AI product',
  },
];

// Mock Analytics Data
export const mockAnalyticsData: Record<string, AnalyticsData> = {
  'b1': {
    impressions: 45000,
    clicks: 6200,
    conversions: 320,
    roi: 2.8,
    timeline: [
      { date: new Date('2024-03-20'), value: 5000, label: 'Impressions' },
      { date: new Date('2024-03-21'), value: 8000, label: 'Impressions' },
      { date: new Date('2024-03-22'), value: 7500, label: 'Impressions' },
      { date: new Date('2024-03-23'), value: 9500, label: 'Impressions' },
      { date: new Date('2024-03-24'), value: 15000, label: 'Impressions' },
    ]
  },
  'i2': {
    impressions: 85000,
    clicks: 12000,
    conversions: 520,
    roi: 3.5,
    timeline: [
      { date: new Date('2024-03-20'), value: 15000, label: 'Impressions' },
      { date: new Date('2024-03-21'), value: 18000, label: 'Impressions' },
      { date: new Date('2024-03-22'), value: 16500, label: 'Impressions' },
      { date: new Date('2024-03-23'), value: 17000, label: 'Impressions' },
      { date: new Date('2024-03-24'), value: 18500, label: 'Impressions' },
    ]
  }
};