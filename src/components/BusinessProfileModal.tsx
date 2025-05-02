import React from 'react';
import { Dialog, DialogContent } from './ui/Dialog';
import { Building2, Calendar, Globe, MapPin, Users } from 'lucide-react';
import { BusinessProfile } from '../types/business';
import { getSocialIcon } from '../utils/socialIcons';
import Avatar from './ui/Avatar';
import Badge from './ui/Badge';

interface BusinessProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  business: BusinessProfile | null;
}

export function BusinessProfileModal({ 
  isOpen, 
  onClose, 
  business 
}: BusinessProfileModalProps) {
  if (!business) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header section */}
        <div className="bg-gradient-to-r from-[#2A0A5E] to-[#3A1A7E] p-8 text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar
              src={business.avatar}
              alt={business.name}
            //   size="xl"
              fallback={business.name}
              className="w-24 h-24 border-4 border-white/20"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">{business.name}</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                {business.industry.map((tag, index) => (
                  <Badge key={index} 
                //   variant="outline"
                   className="bg-white/10 text-white border-white/20">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-white/80 mb-4">{business.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {business.socialMedia.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 hover:bg-white/20 transition-colors"
                  >
                    {getSocialIcon(social.platform)}
                    <span className="text-sm">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Company Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Company Overview */}
            <section className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Building2 className="mr-2 h-5 w-5 text-[#3A1A7E]" />
                Company Overview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-500">Location</p>
                  </div>
                  <p className="font-medium mt-1">{business.location}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-500">Company Size</p>
                  </div>
                  <p className="font-medium mt-1">{business.size}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-500">Founded</p>
                  </div>
                  <p className="font-medium mt-1">{business.founded}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-500">Website</p>
                  </div>
                  <a 
                    href={`https://${business.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium mt-1 text-[#3A1A7E] hover:underline"
                  >
                    {business.website}
                  </a>
                </div>
              </div>
            </section>
            
            {/* Previous Collaborations */}
            <section className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-lg font-semibold mb-4">Previous Collaborations</h3>
              <div className="space-y-4">
                {business.previousCollaborations.map((collab, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{collab.name}</h4>
                        <p className="text-sm text-gray-500">{collab.type}</p>
                      </div>
                      <Badge 
                    //   variant="outline"
                       className="text-xs">
                        {new Date(collab.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <section className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Total Collaborations</p>
                  <p className="text-xl font-bold">{business.previousCollaborations.length}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">Industries</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {business.industry.map((ind, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {ind}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}