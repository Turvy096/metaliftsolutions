/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5ef',
          100: '#ffe5d7',
          200: '#ffc8b0',
          300: '#ffa280',
          400: '#ff7a4e',
          500: '#e34813',
          600: '#c1380f',
          700: '#9f2d0c',
          800: '#7c2208',
          900: '#5d1a06',
          950: '#341003'
        },
        night: '#0b1220',
        slate: {
          50: '#f9fbff',
          100: '#edf2ff',
          200: '#d8e1f5',
          300: '#b3c4df',
          400: '#8ea3c4',
          500: '#657da4',
          600: '#425276',
          700: '#2f3d59',
          800: '#202a3d',
          900: '#161d2b',
          950: '#0e131c',
          DEFAULT: '#2f3d59'
        },
        ink: '#1f2933',
        sand: '#fdf5ef',
        shell: '#fbe9dd'
      },
      boxShadow: {
        glow: '0 24px 60px -25px rgba(227, 72, 19, 0.45)'
      }
    }
  },
  plugins: []
};
