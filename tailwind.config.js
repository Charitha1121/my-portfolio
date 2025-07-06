/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#4f46e5',    // Indigo
        primary2: '#ec4899',    // Pink
        primary3: '#fbbf24',    // Yellow
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
