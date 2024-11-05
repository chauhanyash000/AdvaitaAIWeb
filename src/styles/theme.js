export const themeColors = {
  primary: {
    orange: '#FF7F00', // Lotus color
    teal: '#008080',   // Border elements
    gold: '#FFD700',   // Decorative elements
  },
  secondary: {
    lightBlue: '#E6F7FF', // Background color
    darkBlue: '#1A365D',  // Text and depth
    green: '#2F855A',     // Accent
  },
  accent: {
    sunrise: '#FFA07A',
    purple: '#553C9A',
  },
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  dashboard: {
    frame: '#c1c1c1',
    frameLight: '#e1e1e1',
    frameDark: '#b1b1b1',
  }
};

export const typography = {
  fontFamily: {
    sans: [
      'SF Pro Display',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ].join(', '),
    mono: [
      'SF Mono',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace'
    ].join(', ')
  },
  size: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  weight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  }
};
