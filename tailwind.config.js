/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,mdx}',
    './components/**/*.{js,ts,jsx,mdx}',
    './app/**/*.{js,ts,jsx,mdx}',
  ],
  theme: {
    extend: {  // To add custom colors we extend a variable and then assing its Hexcode into CSS file
      colors: {
        "background-color": "var(--background-color)",
        "secondary-color": "var(--secondary-color)",
        "mytext-color": "var(--mytext-color)",
        "small-text": "var(--small-text)",
        "cards-color": "var(--cards-color)",
      },
      screens:{
        "xs" : "10px",
        "sm" : "400px"
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '90': '22rem',
        '128': '29rem',
        '144': '31rem',
      }
    },
  },
  plugins: [],
}
