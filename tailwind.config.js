/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { 'object-position': 'top' },
          '100%': { 'object-position': 'bottom' },
        },
        border: {
          '10%': { 'border-radius': '50% 50% 20% 80% / 25% 80% 20% 75%' },
          '20%': { 'border-radius': '67% 33% 47% 53% / 37% 20% 80% 63%' },
          '30%': { 'border-radius': '39% 61% 47% 53% / 37% 40% 60% 63%' },
          '40%': { 'border-radius': '39% 61% 82% 18% / 74% 40% 60% 26%' },
          '50%': { 'border-radius': '100%' },
          '60%': { 'border-radius': '50% 50% 53% 47% / 72% 69% 31% 28%' },
          '70%': { 'border-radius': '50% 50% 53% 47% / 26% 22% 78% 74%' },
          '80%': { 'border-radius': '50% 50% 53% 47% / 26% 69% 31% 74%' },
          '90%': { 'border-radius': '20% 80% 20% 80% / 20% 80% 20% 80%' },
        },
      },
      animation: {
        scrolling: 'move 20s linear infinite',
        scrollingFast: 'move 2s linear infinite alternate',
        border: 'border 10s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
