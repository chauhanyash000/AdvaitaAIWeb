/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  
  ],
  theme: {
    extend: {
      colors: {
      backgroundColor: {
        'dark': '#121212',
        'card': '#1a1a1a',
      },
      borderColor: {
        'dark': '#2a2a2a',
      },
        primary: {
          orange: '#FF7F00',
          teal: '#008080',
          gold: '#FFD700',
        },
        secondary: {
          lightBlue: '#E6F7FF',
          darkBlue: '#1A365D',
          green: '#2F855A',
        },
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif'
        ],
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
