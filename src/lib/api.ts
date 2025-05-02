import { BusinessProfile } from "../types/business";

// Types
type MatchStatus = 'pending' | 'accepted' | 'rejected';

interface Match {
  id: string;
  businessId: string;
  influencerId: string;
  status: MatchStatus;
  createdAt: string;
  updatedAt: string;
}

// Mock business ID (in a real app, this would come from auth)
const MOCK_BUSINESS_ID = 'business123';

// Mock business data
const MOCK_BUSINESS: BusinessProfile = {
  id: MOCK_BUSINESS_ID,
  name: "EcoStyle Fashion",
  avatar: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=300",
  description: "We're a sustainable fashion brand committed to creating eco-friendly, stylish clothing. Our mission is to prove that fashion can be both beautiful and environmentally conscious.",
  industry: ["Fashion", "Sustainability", "Retail"],
  website: "www.ecostyle.com",
  location: "San Francisco, CA",
  size: "50-100 employees",
  founded: 2018,
  socialMedia: [
    { platform: "Instagram", url: "https://instagram.com/ecostyle" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/ecostyle" }
  ],
  previousCollaborations: [
    {
      name: "Green Living Festival",
      date: "2024-01",
      type: "Event Sponsorship"
    },
    {
      name: "EarthDay Campaign",
      date: "2023-04",
      type: "Social Media Campaign"
    }
  ]
};

// Helper to get matches from localStorage
function getStoredMatches(): Match[] {
  const matches = localStorage.getItem('matches');
  return matches ? JSON.parse(matches) : [];
}

// Helper to save matches to localStorage
function saveMatches(matches: Match[]) {
  localStorage.setItem('matches', JSON.stringify(matches));
}

export async function createMatch(influencerId: string): Promise<Match> {
  const matches = getStoredMatches();
  
  // Check if match already exists
  const existingMatch = matches.find(
    m => m.businessId === MOCK_BUSINESS_ID && m.influencerId === influencerId
  );
  
  if (existingMatch) {
    throw new Error('Match already exists');
  }

  const newMatch: Match = {
    id: crypto.randomUUID(),
    businessId: MOCK_BUSINESS_ID,
    influencerId,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  matches.push(newMatch);
  saveMatches(matches);
  
  return newMatch;
}

export async function getMatches(): Promise<Match[]> {
  return getStoredMatches();
}

export async function updateMatchStatus(
  matchId: string, 
  status: 'accepted' | 'rejected'
): Promise<Match> {
  const matches = getStoredMatches();
  const match = matches.find(m => m.id === matchId);
  
  if (!match) {
    throw new Error('Match not found');
  }

  match.status = status;
  match.updatedAt = new Date().toISOString();
  
  saveMatches(matches);
  return match;
}

export async function getBusinessProfile(businessId: string): Promise<BusinessProfile> {
  // In a real app, this would fetch from an API
  return MOCK_BUSINESS;
}