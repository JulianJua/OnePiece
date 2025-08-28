/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pistachio: {
          50: '#f7fdf4',
          100: '#edfbe8',
          200: '#dbf6d1',
          300: '#c2eeaf',
          400: '#a1e085',
          500: '#81d062',
          600: '#6bc149',
          700: '#559139',
          800: '#487332',
          900: '#3d602d',
        },
        hunter: {
          50: '#f0f8f0',
          100: '#dcefdc',
          200: '#bce0bc',
          300: '#8cc98c',
          400: '#56a756',
          500: '#355a35',
          600: '#2a4a2a',
          700: '#223a22',
          800: '#1d301d',
          900: '#192819',
        }
      }
    },
  },
  plugins: [],
}