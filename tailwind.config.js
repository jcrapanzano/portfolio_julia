/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React
  ],
  theme: {
    extend: {
        colors:{
            espresso : '#3E2723',
            peony : '#F4C9D6',
            pinky :'#FDEFF0',
            wine:'#2E002E',
            vanilla:'#FFFFF0',
            warm :'#C78283',
            cold :'#f3d9dc',

        },
        fontFamily:{
          sans: ['"DM Sans"', 'sans-serif'],
          serif: ['"Playfair Display"', 'serif'],
        },
        animation: {
        'spin-slow': 'spin 5s linear infinite', // 5s par tour
        'spin-slower': 'spin 10s linear infinite', // 10s par tour
      }
    },
  },
  plugins: [],
}
