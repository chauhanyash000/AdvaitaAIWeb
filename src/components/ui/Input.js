import React from 'react';
import { themeColors, typography } from '../../styles/theme';

const Input = ({ 
  label,
  error,
  className = '',
  fullWidth = true,
  rounded = true,
  ...props 
}) => (
  <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
    {label && (
      <label
        className="block mb-2"
        style={{
          color: themeColors.secondary.darkBlue,
          fontSize: typography.size.sm,
          fontWeight: typography.weight.medium,
        }}
      >
        {label}
      </label>
    )}
    <input
      className={`
        w-full
        px-4 
        py-2 
        border
        ${error ? 'border-red-500' : 'border-neutral-300'} 
        ${rounded ? 'rounded-full' : 'rounded-lg'}
        focus:outline-none 
        focus:border-primary-teal
        focus:ring-1 
        focus:ring-primary-teal
        disabled:bg-neutral-50
        disabled:cursor-not-allowed
        transition-colors
      `}
      style={{
        fontSize: typography.size.base,
        color: themeColors.secondary.darkBlue,
      }}
      {...props}
    />
    {error && (
      <p className="mt-1 text-red-500" style={{ fontSize: typography.size.sm }}>
        {error}
      </p>
    )}
  </div>
);

export default Input;
