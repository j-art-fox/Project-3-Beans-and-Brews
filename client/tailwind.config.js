/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tiny: '375px',
      xsm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        dark: {
          100: '#121212',
          200: '#191919',
          300: '#282828',
          400: '#404040',
          500: '#b3b3b3'
        }
      }
    }
  },
  plugins: []
};
