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

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-400", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
                  
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

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export default Card;
