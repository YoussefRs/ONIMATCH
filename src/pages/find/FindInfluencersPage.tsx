import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Avatar from "../../components/ui/Avatar";
import Badge from "../../components/ui/Badge";
import { mockInfluencerProfiles } from "../../data/mockData";
import {
  Search,
  Filter,
  Instagram,
  Twitter,
  Youtube,
  BookText as TikTok,
  Star,
  ChevronDown,
} from "lucide-react";
import { InfluencerProfile } from "../../types/influencer";
import { InfluencerProfileModal } from "../../components/InfluencerProfileModal";

// Sample data for the example
const sampleInfluencers: InfluencerProfile[] = [
  {
    id: "inf1",
    name: "Sophia Martinez",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Lifestyle and beauty content creator passionate about sustainable living and ethical fashion. Helping brands connect with conscious consumers.",
    niche: ["Lifestyle", "Beauty", "Sustainability"],
    location: "Los Angeles, CA",
    audienceSize: 245000,
    engagementRate: 4.8,
    socialMedia: [
      { platform: "Instagram", handle: "@sophia.style", followers: 180000, url: "#" },
      { platform: "TikTok", handle: "@sophiastyle", followers: 65000, url: "#" },
      { platform: "Youtube", handle: "Sophia's World", followers: 42000, url: "#" }
    ],
    pricing: {
      postRate: 1200,
      storyRate: 800,
      videoRate: 2500
    }
  }
];

const FindInfluencersPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);
  const [audienceMinSize, setAudienceMinSize] = useState<number | "">("");
  const [audienceMaxSize, setAudienceMaxSize] = useState<number | "">("");
  const [minEngagementRate, setMinEngagementRate] = useState<number | "">("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract all unique niches from influencer profiles
  const allNiches = Array.from(
    new Set(mockInfluencerProfiles.flatMap((influencer) => influencer.niche))
  ).sort();

  // Filter influencers based on search and filters
  const filteredInfluencers = mockInfluencerProfiles.filter((influencer) => {
    // Filter by search term
    const matchesSearch =
      searchTerm === "" ||
      influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.niche.some((n:any) =>
        n.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Filter by niche
    const matchesNiche =
      selectedNiches.length === 0 ||
      selectedNiches.some((niche) => influencer.niche.includes(niche));

    // Filter by audience size
    const matchesAudienceMin =
      audienceMinSize === "" || influencer.audienceSize >= audienceMinSize;
    const matchesAudienceMax =
      audienceMaxSize === "" || influencer.audienceSize <= audienceMaxSize;

    // Filter by engagement rate
    const matchesEngagementRate =
      minEngagementRate === "" ||
      influencer.engagementRate >= minEngagementRate;

    return (
      matchesSearch &&
      matchesNiche &&
      matchesAudienceMin &&
      matchesAudienceMax &&
      matchesEngagementRate
    );
  });

  const toggleNiche = (niche: string) => {
    if (selectedNiches.includes(niche)) {
      setSelectedNiches(selectedNiches.filter((n) => n !== niche));
    } else {
      setSelectedNiches([...selectedNiches, niche]);
    }
  };

  const clearFilters = () => {
    setSelectedNiches([]);
    setAudienceMinSize("");
    setAudienceMaxSize("");
    setMinEngagementRate("");
  };

  

  const [selectedInfluencer, setSelectedInfluencer] = useState<InfluencerProfile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProfile = (id: string) => {
    const influencer = sampleInfluencers.find(inf => inf.id === id);
    setSelectedInfluencer(influencer || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram size={16} />;
      case "twitter":
        return <Twitter size={16} />;
      case "youtube":
        return <Youtube size={16} />;
      case "tiktok":
        return <TikTok size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Find Influencers</h1>
        <p className="text-gray-600">
          Discover influencers who match your brand and audience.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Filters</span>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#2A0A5E] hover:text-[#3A1A7E] font-medium"
                >
                  Clear All
                </button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Niche Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Niche
                  </h3>
                  <div className="space-y-2">
                    {allNiches.map((niche) => (
                      <div key={niche} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`niche-${niche}`}
                          checked={selectedNiches.includes(niche)}
                          onChange={() => toggleNiche(niche)}
                          className="h-4 w-4 text-[#2A0A5E] focus:ring-[#2A0A5E] border-gray-300 rounded"
                        />
                        <label
                          htmlFor={`niche-${niche}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {niche}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audience Size Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Audience Size
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={audienceMinSize}
                      onChange={(e) =>
                        setAudienceMinSize(
                          e.target.value ? parseInt(e.target.value) : ""
                        )
                      }
                      className="w-full"
                    />
                    <span className="text-gray-500">-</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={audienceMaxSize}
                      onChange={(e) =>
                        setAudienceMaxSize(
                          e.target.value ? parseInt(e.target.value) : ""
                        )
                      }
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Engagement Rate Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Engagement Rate
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      placeholder="Min %"
                      value={minEngagementRate}
                      onChange={(e) =>
                        setMinEngagementRate(
                          e.target.value ? parseFloat(e.target.value) : ""
                        )
                      }
                      className="w-full"
                    />
                    <span className="text-gray-500">% +</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          {/* Search & Filter Bar */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search by name, niche, or keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    fullWidth
                  />
                </div>

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden">
                  <Button
                    variant="outline"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="w-full md:w-auto justify-center"
                  >
                    <Filter size={18} className="mr-2" />
                    Filters
                    <ChevronDown
                      size={16}
                      className={`ml-2 transition-transform ${
                        isFilterOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </div>
              </div>

              {/* Mobile Filters */}
              {isFilterOpen && (
                <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
                  <div className="space-y-6">
                    {/* Niche Filter */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">
                        Niche
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {allNiches.map((niche) => (
                          <button
                            key={niche}
                            onClick={() => toggleNiche(niche)}
                            className={`px-3 py-1 rounded-full text-sm ${
                              selectedNiches.includes(niche)
                                ? "bg-[#2A0A5E] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {niche}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Audience Size Filter */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">
                        Audience Size
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          placeholder="Min"
                          value={audienceMinSize}
                          onChange={(e) =>
                            setAudienceMinSize(
                              e.target.value ? parseInt(e.target.value) : ""
                            )
                          }
                          className="w-full"
                        />
                        <span className="text-gray-500">-</span>
                        <Input
                          type="number"
                          placeholder="Max"
                          value={audienceMaxSize}
                          onChange={(e) =>
                            setAudienceMaxSize(
                              e.target.value ? parseInt(e.target.value) : ""
                            )
                          }
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Engagement Rate Filter */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">
                        Engagement Rate
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          placeholder="Min %"
                          value={minEngagementRate}
                          onChange={(e) =>
                            setMinEngagementRate(
                              e.target.value ? parseFloat(e.target.value) : ""
                            )
                          }
                          className="w-full"
                        />
                        <span className="text-gray-500">% +</span>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="ghost" onClick={clearFilters}>
                        Clear All Filters
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => setIsFilterOpen(false)}
                      >
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {filteredInfluencers.length > 0 ? (
              filteredInfluencers.map((influencer: InfluencerProfile) => (
                <>
                  <Card key={influencer.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 bg-gradient-to-br from-[#2A0A5E] to-[#3A1A7E] p-6 flex flex-col items-center justify-center text-white">
                        <Avatar
                          src={influencer.avatar}
                          alt={influencer.name}
                          size="lg"
                          fallback={influencer.name}
                          className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-1">
                          {influencer.name}
                        </h3>
                        <div className="flex space-x-2 mb-4">
                          {influencer.socialMedia
                            .slice(0, 2)
                            .map((social, index) => (
                              <div key={index} className="flex items-center">
                                {getSocialIcon(social.platform)}
                                <span className="ml-1 text-sm">
                                  {social.followers >= 1000000
                                    ? `${(social.followers / 1000000).toFixed(
                                        1
                                      )}M`
                                    : `${(social.followers / 1000).toFixed(
                                        0
                                      )}K`}
                                </span>
                              </div>
                            ))}
                        </div>
                        <div className="flex items-center">
                          <Star
                            size={16}
                            className="text-[#00F5FF] fill-[#00F5FF]"
                          />
                          <span className="ml-1 text-sm">
                            {influencer.engagementRate}% Engagement
                          </span>
                        </div>
                      </div>
                      <div className="md:w-3/4 p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {influencer.niche.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-gray-700 mb-6 line-clamp-3">
                          {influencer.bio}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-3 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-500">Audience</p>
                            <p className="font-semibold">
                              {influencer.audienceSize >= 1000000
                                ? `${(
                                    influencer.audienceSize / 1000000
                                  ).toFixed(1)}M`
                                : `${(influencer.audienceSize / 1000).toFixed(
                                    0
                                  )}K`}
                            </p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-500">
                              Avg. Post Rate
                            </p>
                            <p className="font-semibold">
                              $
                              {influencer.pricing?.postRate?.toLocaleString() ||
                                "N/A"}
                            </p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-500">
                              Top Platform
                            </p>
                            <p className="font-semibold">
                              {
                                influencer.socialMedia.sort(
                                  (a, b) => b.followers - a.followers
                                )[0].platform
                              }
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button
                            variant="primary"
                            onClick={() =>
                              handleViewProfile(sampleInfluencers[0].id)
                            }
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Influencer Profile Modal */}
                  <InfluencerProfileModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    influencer={selectedInfluencer}
                  />
                </>
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No influencers found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filters to find more results.
                </p>
                <Button variant="primary" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindInfluencersPage;
