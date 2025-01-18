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
      bg-[${themeColors.background.card}] 
      rounded-xl 
      overflow-hidden
      ${border ? `border border-[${themeColors.border.dark}]` : ''}
      ${shadow ? 'shadow-lg shadow-black/20' : ''}
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
      color: themeColors.text.primary,
      fontSize: typography.size.xl,
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

export const CardDescription = React.forwardRef(({ 
  children,
  className = '',
  ...props 
}, ref) => (
  <p
    ref={ref}
    style={{
      color: themeColors.text.secondary,
    }}
    className={`text-sm ${className}`}
    {...props}
  >
    {children}
  </p>
));

CardDescription.displayName = "CardDescription";

export const CardFooter = React.forwardRef(({ 
  children,
  className = '',
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={`flex items-center p-6 pt-0 ${className}`}
    {...props}
  >
    {children}
  </div>
));

CardFooter.displayName = "CardFooter";

export default Card;
