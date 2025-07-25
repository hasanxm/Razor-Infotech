/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // watches all your components/pages
    "./public/index.html"
  ],
  theme: {
    extend: {
      // You can customize colors, spacing, fonts, etc. here
    },
  },
  plugins: [
    require('@tailwindcss/typography') // enables `prose` utility classes
  ],
};
