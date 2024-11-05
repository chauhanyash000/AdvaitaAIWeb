export const bloomberg = {
  background: {
    primary: '#121212',
    secondary: '#1a1a1a',
    tertiary: '#232323'
  },
  text: {
    primary: '#e0e0e0',
    secondary: '#999999',
    muted: '#666666'
  },
  border: {
    light: '#2a2a2a',
    dark: '#333333'
  },
  accent: {
    blue: '#0088FE',
    green: '#00C49F',
    red: '#FF4444',
    yellow: '#FFBB28'
  },
  chart: {
    grid: '#333333'
  }
} as const;

export type Theme = typeof bloomberg;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const transitions = {
  DEFAULT: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  fast: '100ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;
