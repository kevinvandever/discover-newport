/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        newport: {
          100: 'var(--color-newport-100)',
          200: 'var(--color-newport-200)',
          300: 'var(--color-newport-300)',
          400: 'var(--color-newport-400)',
          500: 'var(--color-newport-500)',
          600: 'var(--color-newport-600)',
          700: 'var(--color-newport-700)',
          accent: 'var(--color-newport-accent)',
        },
      },
    },
  },
  plugins: [],
};