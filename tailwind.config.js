/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,tsx,jsx}',
    './src/components/**/*.{js,jsx,ts,tsx,jsx}',
  ],
  theme: {
    screens: {
      
      'laptop': {'max': '1180px'},
      'tablet': {'max': '914px'},
      'phone': {'max': '450px'}
    },
    extend: {
      fontFamily: {
        'sans': ['Lato']
      },
      boxShadow: {
        'md': '1px 1px 8px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}