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
      },
      animation: {
        scrolling: 'move 30s linear infinite',
      },
    },
  },
  plugins: [],
};
