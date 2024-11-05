import React from 'react';
import { themeColors, typography } from '../../styles/theme';

const variants = {
  primary: {
    backgroundColor: `${themeColors.primary.orange}20`,
    color: themeColors.primary.orange,
  },
  success: {
    backgroundColor: `${themeColors.secondary.green}20`,
    color: themeColors.secondary.green,
  },
  warning: {
    backgroundColor: '#FEF3C7',
    color: '#D97706',
  },
  error: {
    backgroundColor: '#FEE2E2',
    color: '#DC2626',
  },
  info: {
    backgroundColor: `${themeColors.secondary.lightBlue}`,
    color: themeColors.secondary.darkBlue,
  },
};

const Badge = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const variantStyles = variants[variant];

  return (
    <span
      style={{
        backgroundColor: variantStyles.backgroundColor,
        color: variantStyles.color,
        fontSize: typography.size.sm,
        fontWeight: typography.weight.medium,
      }}
      className={`
        inline-flex 
        items-center 
        px-2.5 
        py-0.5 
        rounded-full
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;