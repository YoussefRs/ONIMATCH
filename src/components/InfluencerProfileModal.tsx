import React from 'react';
import { BarChart3, Calendar, Check, Clock, ExternalLink, Globe, Instagram, Linkedin, Mail, MapPin, MessageCircle, BookText as TikTok, Twitter, Users, Youtube } from 'lucide-react';
import { InfluencerProfile } from '../types/influencer';
import Badge from './ui/Badge';
import Avatar from './ui/Avatar';
import Button from './ui/Button';
import { Dialog, DialogContent } from './ui/Dialog';
import { getSocialIcon } from '../utils/socialIcons';

interface InfluencerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  influencer: InfluencerProfile | null;
}

export function InfluencerProfileModal({ 
  isOpen, 
  onClose, 
  influencer 
}: InfluencerProfileModalProps) {
  if (!influencer) return null;

  const topPlatform = influencer.socialMedia.sort((a, b) => b.followers - a.followers)[0];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header section with gradient background */}
        <div className="bg-gradient-to-r from-[#2A0A5E] to-[#3A1A7E] p-8 text-white relative">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar
              src={influencer.avatar}
              alt={influencer.name}
              // size="xl"
              fallback={influencer.name}
              className="w-24 h-24 border-4 border-white/20"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">{influencer.name}</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                {influencer.niche.map((tag, index) => (
                  <Badge key={index}
                  //  variant="outline" 
                   className="bg-white/10 text-white border-white/20">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-white/80 mb-4 max-w-xl">{influencer.bio}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {influencer.socialMedia.map((social, index) => (
                  <div key={index} className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1">
                    {getSocialIcon(social.platform)}
                    <span className="text-sm">
                      {social.followers >= 1000000
                        ? `${(social.followers / 1000000).toFixed(1)}M`
                        : `${(social.followers / 1000).toFixed(0)}K`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="md:col-span-2 space-y-6">
            {/* Analytics section */}
            <section className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-[#3A1A7E]" />
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Engagement Rate</p>
                  <div className="flex items-baseline">
                    <p className="text-xl font-bold">{influencer.engagementRate}%</p>
                    <span className="ml-1 text-xs text-green-500">+2.1%</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#2A0A5E] to-[#00F5FF]" 
                      style={{ width: `${Math.min(influencer.engagementRate * 5, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Total Audience</p>
                  <p className="text-xl font-bold">
                    {influencer.audienceSize >= 1000000
                      ? `${(influencer.audienceSize / 1000000).toFixed(1)}M`
                      : `${(influencer.audienceSize / 1000).toFixed(0)}K`}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Avg. Post Rate</p>
                  <p className="text-xl font-bold">${influencer.pricing?.postRate?.toLocaleString() || 'N/A'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Content Quality</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`w-4 h-4 ${star <= 4 ? 'text-[#00F5FF] fill-[#00F5FF]' : 'text-gray-300'}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Avg. Response</p>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-[#3A1A7E]" />
                    <p className="font-medium">24 hours</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Top Platform</p>
                  <div className="flex items-center mt-1">
                    {getSocialIcon(topPlatform.platform)}
                    <p className="ml-1 font-medium">{topPlatform.platform}</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Content showcase */}
            <section className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-lg font-semibold mb-4">Recent Content</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="group relative overflow-hidden rounded-md aspect-square bg-gray-100">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ 
                        backgroundImage: `url(https://source.unsplash.com/random/300x300?lifestyle&sig=${influencer.id + item})` 
                      }}
                    ></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                      <div className="flex justify-between text-white">
                        <div className="flex items-center text-xs">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span>{Math.floor(Math.random() * 50) + 10}K</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 15c0 1.1-.9 2-2 2H7l-4 4V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10z" />
                          </svg>
                          <span>{Math.floor(Math.random() * 500) + 50}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" className="text-[#3A1A7E]">
                  View All Content <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </section>
          </div>
          
          {/* Right column - details and contact */}
          <div className="space-y-6">
            {/* Details panel */}
            <section className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-lg font-semibold mb-4">Details</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-gray-500">{influencer.location || 'Los Angeles, CA'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Audience Demographics</p>
                    <p className="text-sm text-gray-500">18-34 years (72%), Female (65%)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Languages</p>
                    <p className="text-sm text-gray-500">English, Spanish</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Availability</p>
                    <p className="text-sm text-gray-500">Available for campaigns starting July 2025</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Pricing */}
            <section className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-lg font-semibold mb-4">Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm">Single Post</span>
                  <span className="font-medium">${influencer.pricing?.postRate?.toLocaleString() || '1,500'}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm">Story</span>
                  <span className="font-medium">${influencer.pricing?.storyRate?.toLocaleString() || '800'}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm">Video Content</span>
                  <span className="font-medium">${influencer.pricing?.videoRate?.toLocaleString() || '2,500'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Full Campaign</span>
                  <span className="font-medium">Custom</span>
                </div>
              </div>
            </section>
            
            {/* Contact section */}
            <section className="bg-gradient-to-br from-[#2A0A5E] to-[#3A1A7E] rounded-lg shadow-sm p-5 text-white">
              <h3 className="text-lg font-semibold mb-4">Contact {influencer.name.split(' ')[0]}</h3>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full bg-white hover:bg-gray-100 text-[#3A1A7E]">
                  <Mail className="mr-2 h-4 w-4" /> 
                  Send Message
                </Button>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-4 w-4" /> 
                  Schedule Call
                </Button>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-white/80 mb-2">Preferred contact method</p>
                <div className="flex items-center bg-white/10 rounded-md p-2">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">Email</span>
                  <Check className="h-4 w-4 ml-auto text-[#00F5FF]" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}