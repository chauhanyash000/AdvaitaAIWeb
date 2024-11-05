import React from 'react';
import { themeColors, typography } from '../../styles/theme';

export const Card = ({ 
  children, 
  className = '', 
  noPadding = false,
  border = true,
  shadow = true,
  ...props 
}) => (
  <div
    className={`
      bg-white 
      rounded-xl 
      overflow-hidden
      ${border ? 'border border-neutral-100' : ''}
      ${shadow ? 'shadow-lg' : ''}
      ${noPadding ? '' : 'p-6'}
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ 
  children, 
  className = '',
  ...props 
}) => (
  <div
    className={`mb-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardTitle = ({ 
  children,
  className = '',
  ...props 
}) => (
  <h3
    style={{
      color: themeColors.secondary.darkBlue,
      fontSize: typography.size['xl'],
      fontWeight: typography.weight.bold,
    }}
    className={className}
    {...props}
  >
    {children}
  </h3>
);

export const CardContent = ({ 
  children,
  className = '',
  ...props 
}) => (
  <div
    className={className}
    {...props}
  >
    {children}
  </div>
);

export default Card;