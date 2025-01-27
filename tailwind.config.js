/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#030d3f',
        'navy-border': '#2f3962'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #9D4EDD, #FF69B4, #FF7F50)',
      }
    },
  },
  plugins: [],
};
