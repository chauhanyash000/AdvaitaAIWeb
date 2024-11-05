import React from 'react';
import { themeColors, typography } from '../../styles/theme';

const variants = {
  primary: {
    backgroundColor: themeColors.primary.orange,
    color: 'white',
    hoverBg: 'hover:opacity-90',
  },
  secondary: {
    backgroundColor: 'white',
    color: themeColors.secondary.darkBlue,
    border: `1px solid ${themeColors.secondary.darkBlue}`,
    hoverBg: 'hover:bg-gray-50',
  },
  outline: {
    backgroundColor: 'transparent',
    color: themeColors.primary.orange,
    border: `1px solid ${themeColors.primary.orange}`,
    hoverBg: 'hover:bg-orange-50',
  },
};

const sizes = {
  sm: {
    fontSize: typography.size.sm,
    padding: 'px-4 py-1.5',
  },
  md: {
    fontSize: typography.size.base,
    padding: 'px-6 py-2',
  },
  lg: {
    fontSize: typography.size.lg,
    padding: 'px-8 py-3',
  },
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  rounded = true,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        backgroundColor: variantStyles.backgroundColor,
        color: variantStyles.color,
        border: variantStyles.border,
        fontSize: sizeStyles.fontSize,
        fontWeight: typography.weight.semibold,
        transition: 'all 150ms ease',
      }}
      className={`
        ${sizeStyles.padding}
        ${rounded ? 'rounded-full' : 'rounded-lg'}
        ${variantStyles.hoverBg}
        disabled:opacity-50 
        disabled:cursor-not-allowed
        transition-all
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent border-white mr-2" />
          Loading...
        </div>
      ) : children}
    </button>
  );
};

export default Button;