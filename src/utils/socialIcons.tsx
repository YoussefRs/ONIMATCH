import React from 'react';
import { Instagram, Twitter, Youtube, BookText as TikTok, Linkedin, Globe } from 'lucide-react';

export function getSocialIcon(platform: string) {
  const iconProps = { 
    size: 16,
    className: "text-current" 
  };

  switch (platform.toLowerCase()) {
    case 'instagram':
      return <Instagram {...iconProps} />;
    case 'twitter':
    case 'x':
      return <Twitter {...iconProps} />;
    case 'youtube':
      return <Youtube {...iconProps} />;
    case 'tiktok':
      return <TikTok {...iconProps} />;
    case 'linkedin':
      return <Linkedin {...iconProps} />;
    default:
      return <Globe {...iconProps} />;
  }
}