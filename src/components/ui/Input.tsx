import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  helpText,
  error,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const widthStyles = fullWidth ? 'w-full' : '';
  const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#2A0A5E] focus:ring-[#2A0A5E]';
  
  return (
    <div className={`${widthStyles} mb-4`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        className={`${widthStyles} ${errorStyles} px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 ${className}`}
        {...props}
      />
      {helpText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helpText}</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;