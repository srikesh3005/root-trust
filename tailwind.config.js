/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBEDE8',   // Light neutral
          100: '#E2FB6C',  // Bright lime green
          200: '#c5f653',  // Darker lime
          300: '#a8f140',  // Even darker lime
          400: '#8bec2d',  // Lime variant
          500: '#6ee71a',  // Lime variant
          600: '#004838',  // Dark forest green (main)
          700: '#073127',  // Very dark green
          800: '#333F3C',  // Dark gray-green
          900: '#1a1f1d',  // Darkest variant
        },
        accent: {
          50: '#f0f9ff',
          100: '#E2FB6C',  // Bright accent
          200: '#c5f653',
          300: '#a8f140',
          400: '#8bec2d',
          500: '#6ee71a',
          600: '#51e007',
          700: '#3fb300',
          800: '#2d8000',
          900: '#1b4d00',
        },
        neutral: {
          50: '#EBEDE8',   // Light background
          100: '#e0e2dd',
          200: '#d5d7d2',
          300: '#caccc7',
          400: '#bfc1bc',
          500: '#b4b6b1',
          600: '#a9aba6',
          700: '#9ea09b',
          800: '#333F3C',  // Dark text
          900: '#282e2b',
        }
      },
    },
  },
  plugins: [],
};
