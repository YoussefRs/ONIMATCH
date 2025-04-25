import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Card, { CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import { mockBusinessProfiles, mockMatches, mockPayments, mockAnalyticsData } from '../../data/mockData';
import { DollarSign, MessageSquare, Briefcase, Target, TrendingUp, Bell, ChevronRight } from 'lucide-react';
import { InfluencerProfile, BusinessProfile } from '../../types';

const InfluencerDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const influencer = currentUser as InfluencerProfile;
  
  // Filter matches for this influencer
  const influencerMatches = mockMatches.filter(match => match.influencerId === influencer.id);
  
  // Get matched business profiles
  const matchedBusinesses = influencerMatches.map(match => {
    const business = mockBusinessProfiles.find(bus => bus.id === match.businessId);
    return {
      ...business,
      matchStatus: match.status,
      matchId: match.id,
    };
  });
  
  // Get payments for this influencer
  const influencerPayments = mockPayments.filter(payment => {
    const match = mockMatches.find(m => m.id === payment.matchId);
    return match && match.influencerId === influencer.id;
  });
  
  // Get analytics data for this influencer
  const analyticsData = mockAnalyticsData[influencer.id];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {influencer.name}!</h1>
        <p className="text-gray-600">Here's an overview of your collaborations and performance.</p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Active Partnerships</p>
                <h3 className="text-xl font-semibold">{influencerMatches.filter(m => m.status === 'accepted').length}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <DollarSign size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Earnings</p>
                <h3 className="text-xl font-semibold">
                  ${influencerPayments.reduce((total, payment) => total + payment.amount, 0).toLocaleString()}
                </h3>
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
                <p className="text-sm font-medium text-gray-500">Engagement Rate</p>
                <h3 className="text-xl font-semibold">{influencer.engagementRate}%</h3>
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
                <p className="text-sm font-medium text-gray-500">Profile Growth</p>
                <h3 className="text-xl font-semibold">+3.2%</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Active Partnerships */}
          <Card>
            <CardHeader>
              <CardTitle>Your Active Partnerships</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {matchedBusinesses.length > 0 ? (
                <div className="space-y-6">
                  {matchedBusinesses.map((business) => business && (
                    <div key={business.id} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center">
                        <Avatar src={business.avatar} alt={business.companyName} size="md" fallback={business.companyName} />
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-900">{business.companyName}</h4>
                          <div className="flex items-center mt-1">
                            <Badge variant="secondary" size="sm" className="mr-2">
                              {business.industry}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge 
                          variant={
                            business.matchStatus === 'accepted' ? 'success' : 
                            business.matchStatus === 'pending' ? 'warning' : 
                            business.matchStatus === 'completed' ? 'info' : 'danger'
                          }
                          className="mr-4"
                        >
                          {business.matchStatus.charAt(0).toUpperCase() + business.matchStatus.slice(1)}
                        </Badge>
                        <Link to={`/matches/${business.matchId}`}>
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
                        View All Partnerships
                        <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500 mb-4">You don't have any active partnerships yet.</p>
                  <Link to="/opportunities">
                    <Button variant="primary">
                      Find Opportunities
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Audience Performance</CardTitle>
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
                <Link to="/opportunities">
                  <Button variant="primary" fullWidth className="justify-start">
                    <Briefcase size={18} className="mr-2" />
                    Find New Opportunities
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
          
          {/* Earnings */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Earnings</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {influencerPayments.length > 0 ? (
                  influencerPayments.map(payment => {
                    const match = mockMatches.find(m => m.id === payment.matchId);
                    const business = mockBusinessProfiles.find(b => match && b.id === match.businessId);
                    
                    return business && (
                      <div key={payment.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar 
                            src={business.avatar} 
                            alt={business.companyName} 
                            size="sm" 
                            fallback={business.companyName} 
                          />
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-gray-900">{business.companyName}</h4>
                            <p className="text-xs text-gray-500">{new Date(payment.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">${payment.amount.toLocaleString()}</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-gray-500">No earnings recorded yet.</p>
                )}
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
                      <span className="font-medium">TechStartup Inc.</span> has sent you a collaboration request
                    </p>
                    <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Bell size={18} className="text-[#2A0A5E] mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-900">
                      Your campaign with <span className="font-medium">FitGear</span> has been completed
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Bell size={18} className="text-[#2A0A5E] mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-900">
                      New message from <span className="font-medium">BeautyCo</span>
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
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;