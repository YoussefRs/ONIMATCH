import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Card, { CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import { mockInfluencerProfiles, mockMatches, mockAnalyticsData } from '../../data/mockData';
import { Search, MessageSquare, Users, Target, TrendingUp, Bell, ChevronRight } from 'lucide-react';
import { BusinessProfile } from '../../types';
import { InfluencerProfile } from '../../types/influencer';

const BusinessDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const business = currentUser as BusinessProfile;
  
  // Filter matches for this business
  const businessMatches = mockMatches.filter(match => match.businessId === business.id);
  
  // Get matched influencer profiles
  const matchedInfluencers = businessMatches.map(match => {
    const influencer = mockInfluencerProfiles.find(inf => inf.id === match.influencerId);
    return {
      ...influencer,
      matchStatus: match.status,
      matchId: match.id,
    };
  });
  
  // Get analytics data for this business
  const analyticsData = mockAnalyticsData[business.id];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {business.name}!</h1>
        <p className="text-gray-600">Here's what's happening with your influencer marketing.</p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Active Matches</p>
                <h3 className="text-xl font-semibold">{businessMatches.filter(m => m.status === 'accepted').length}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Impressions</p>
                <h3 className="text-xl font-semibold">{analyticsData ? analyticsData.impressions.toLocaleString() : 0}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <Target size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Conversions</p>
                <h3 className="text-xl font-semibold">{analyticsData ? analyticsData.conversions.toLocaleString() : 0}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">ROI</p>
                <h3 className="text-xl font-semibold">{analyticsData ? `${analyticsData.roi.toFixed(1)}x` : '0x'}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Active Campaigns */}
          <Card>
            <CardHeader>
              <CardTitle>Your Active Matches</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {matchedInfluencers.length > 0 ? (
                <div className="space-y-6">
                  {matchedInfluencers.map((influencer) => influencer && (
                    <div key={influencer.id} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center">
                        <Avatar src={influencer.avatar} alt={influencer.name} size="md" fallback={influencer.name} />
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-900">{influencer.name}</h4>
                          <div className="flex items-center mt-1">
                            <Badge variant="secondary" size="sm" className="mr-2">
                              {influencer.niche[0]}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {influencer.audienceSize.toLocaleString()} followers
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge 
                          variant={
                            influencer.matchStatus === 'accepted' ? 'success' : 
                            influencer.matchStatus === 'pending' ? 'warning' : 
                            influencer.matchStatus === 'completed' ? 'info' : 'danger'
                          }
                          className="mr-4"
                        >
                          {influencer.matchStatus.charAt(0).toUpperCase() + influencer.matchStatus.slice(1)}
                        </Badge>
                        <Link to={`/matches/${influencer.matchId}`}>
                          <Button variant="outline" size="sm">
                            <MessageSquare size={16} className="mr-2" />
                            Message
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                  <div className="text-center mt-4">
                    <Link to="/matches">
                      <Button variant="ghost">
                        View All Matches
                        <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500 mb-4">You don't have any active matches yet.</p>
                  <Link to="/find-influencers">
                    <Button variant="primary">
                      Find Influencers
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Performance</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {analyticsData ? (
                <>
                  <div className="h-64 flex items-end space-x-2">
                    {analyticsData.timeline.map((point, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-[#2A0A5E]/20 hover:bg-[#2A0A5E]/30 transition-colors rounded-t"
                          style={{ 
                            height: `${(point.value / 20000) * 100}%`,
                            maxHeight: '100%'
                          }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-1">
                          {new Date(point.date).toLocaleDateString(undefined, { weekday: 'short' })}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-4">
                    <Link to="/analytics">
                      <Button variant="ghost">
                        View Detailed Analytics
                        <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-gray-500">No performance data available yet.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Link to="/find-influencers">
                  <Button variant="primary" fullWidth className="justify-start">
                    <Search size={18} className="mr-2" />
                    Find New Influencers
                  </Button>
                </Link>
                <Link to="/matches">
                  <Button variant="outline" fullWidth className="justify-start">
                    <MessageSquare size={18} className="mr-2" />
                    Manage Conversations
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button variant="outline" fullWidth className="justify-start">
                    <TrendingUp size={18} className="mr-2" />
                    View Analytics
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Bell size={18} className="text-[#2A0A5E] mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">Marcus Chen</span> accepted your collaboration request
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Bell size={18} className="text-[#2A0A5E] mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-900">
                      Your campaign with <span className="font-medium">Emma Davis</span> has been completed
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Bell size={18} className="text-[#2A0A5E] mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-900">
                      New message from <span className="font-medium">Sophia Kim</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <Button variant="ghost" size="sm">
                  View All Notifications
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Recommended Influencers */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended for You</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {mockInfluencerProfiles.slice(0, 2).map((influencer: InfluencerProfile) => (
                  <div key={influencer.id} className="flex items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <Avatar src={influencer.avatar} alt={influencer.name} size="md" fallback={influencer.name} />
                    <div className="ml-3 flex-1">
                      <h4 className="font-medium text-gray-900">{influencer.name}</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {influencer.niche.slice(0, 2).map((niche, index) => (
                          <Badge key={index} variant="secondary" size="sm">
                            {niche}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="ml-4 text-center">
                      <div className="text-sm font-semibold text-[#2A0A5E]">
                        {influencer.audienceSize >= 1000000 
                          ? `${(influencer.audienceSize / 1000000).toFixed(1)}M` 
                          : `${(influencer.audienceSize / 1000).toFixed(0)}K`}
                      </div>
                      <div className="text-xs text-gray-500">Followers</div>
                    </div>
                  </div>
                ))}
                <div className="text-center mt-4">
                  <Link to="/find-influencers">
                    <Button variant="ghost">
                      View More
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;