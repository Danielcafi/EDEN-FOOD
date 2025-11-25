/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fbd8a5',
          300: '#f8bc6d',
          400: '#f59e33',
          500: '#f2850a',
          600: '#e36a05',
          700: '#bc4f08',
          800: '#963f0e',
          900: '#79350f',
        },
      },
    },
  },
  plugins: [],
}
