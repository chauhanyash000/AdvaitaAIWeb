import React from 'react';
import { AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';
import { themeColors, typography } from '../../styles/theme';

const variants = {
  success: {
    icon: CheckCircle,
    backgroundColor: `${themeColors.secondary.green}10`,
    borderColor: themeColors.secondary.green,
    textColor: themeColors.secondary.green,
  },
  error: {
    icon: XCircle,
    backgroundColor: '#FEE2E2',
    borderColor: '#DC2626',
    textColor: '#DC2626',
  },
  warning: {
    icon: AlertCircle,
    backgroundColor: '#FEF3C7',
    borderColor: '#D97706',
    textColor: '#D97706',
  },
  info: {
    icon: Info,
    backgroundColor: `${themeColors.secondary.lightBlue}`,
    borderColor: themeColors.secondary.darkBlue,
    textColor: themeColors.secondary.darkBlue,
  },
};

const Alert = ({ 
  title,
  children,
  variant = 'info',
  className = '',
  onClose,
  ...props 
}) => {
  const variantStyles = variants[variant];
  const Icon = variantStyles.icon;

  return (
    <div
      style={{
        backgroundColor: variantStyles.backgroundColor,
        borderColor: variantStyles.borderColor,
        color: variantStyles.textColor,
      }}
      className={`
        relative 
        rounded-lg 
        p-4 
        border-l-4
        ${className}
      `}
      {...props}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="ml-3">
          {title && (
            <h3 style={{
              fontSize: typography.size.base,
              fontWeight: typography.weight.medium,
            }} className="mb-1">
              {title}
            </h3>
          )}
          <div style={{
            fontSize: typography.size.sm,
          }}>
            {children}
          </div>
        </div>
        {onClose && (
          <button
            type="button"
            className="absolute top-4 right-4 hover:opacity-70"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <XCircle className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;