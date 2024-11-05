/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Your existing colors
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
        // Bloomberg theme colors
        bloomberg: {
          bg: {
            primary: '#121212',
            secondary: '#1a1a1a',
            tertiary: '#232323',
          },
          text: {
            primary: '#e0e0e0',
            secondary: '#999999',
            muted: '#666666',
          },
          border: {
            light: '#2a2a2a',
            dark: '#333333',
          },
          accent: {
            blue: '#0088FE',
            green: '#00C49F',
            red: '#FF4444',
            yellow: '#FFBB28',
          },
        },
        // shadcn/ui required colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // Your existing font family
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
      // Additional customizations for the dashboard
      maxWidth: {
        "6xl": "72rem",
        "7xl": "80rem",
      },
      spacing: {
        '30': '7.5rem',
        '60': '15rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      // Your existing keyframes
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      gridTemplateColumns: {
        'auto-fill-cards': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    // If you're using shadcn/ui components, uncomment the following line:
    // require("./src/lib/shadcn-plugin")(),
  ],
};
