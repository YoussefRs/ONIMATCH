import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fallback?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  className = '',
  fallback,
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
  };

  const [imageError, setImageError] = React.useState(false);

  const handleError = () => {
    setImageError(true);
  };

  const getFallbackInitials = () => {
    if (fallback) return fallback.substring(0, 2).toUpperCase();
    if (alt) return alt.substring(0, 2).toUpperCase();
    return 'UK';
  };

  return (
    <div
      className={`relative rounded-full overflow-hidden bg-gradient-to-r from-[#2A0A5E] to-[#00F5FF] flex items-center justify-center text-white font-semibold ${
        sizeStyles[size]
      } ${className}`}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={handleError}
        />
      ) : (
        <span>{getFallbackInitials()}</span>
      )}
    </div>
  );
};

export default Avatar;