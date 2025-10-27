/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React
  ],
  theme: {
    extend: {
        colors:{
            espresso : '#3E2723',
            peony : '#F4C9D6'
        },
        fontFamily:{
          sans: ['"DM Sans"', 'sans-serif'],
          serif: ['"Playfair Display"', 'serif'],
        }
    },
  },
  plugins: [],
}
