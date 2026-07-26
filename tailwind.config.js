/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "system-ui", "sans-serif"],
        secondary: ["Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: '#fdf5ef',
          100: '#fce6d8',
          200: '#f8c9b0',
          300: '#f4ac88',
          400: '#f08f60',
          500: '#e34813',
          600: '#c73d10',
          700: '#ab320d',
          800: '#8f270a',
          900: '#731c07',
        },
        night: '#0b1220',
        slate: '#1f2933',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}