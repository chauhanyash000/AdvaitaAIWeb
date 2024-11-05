import React from 'react';
import { themeColors } from '../../styles/theme';

const Loading = ({ 
  size = 'md', 
  color = 'primary',
  fullScreen = false,
  className = ''
}) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const colors = {
    primary: themeColors.primary.orange,
    secondary: themeColors.secondary.darkBlue,
    white: 'white',
  };

  const Spinner = () => (
    <div
      className={`
        inline-block 
        animate-spin 
        rounded-full 
        border-2 
        border-solid 
        border-current 
        border-r-transparent 
        ${sizes[size]}
        ${className}
      `}
      style={{ 
        color: colors[color],
      }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <Spinner />
      </div>
    );
  }

  return <Spinner />;
};

export default Loading;