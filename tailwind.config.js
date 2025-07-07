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
        },
      },
      animationDelay: {
        200: '0.2s',
        400: '0.4s',
        600: '0.6s',
        800: '0.8s',
        1000: '1s',
        1200: '1.2s',
        1400: '1.4s',
        1600: '1.6s',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const delays = theme('animationDelay');
      const utilities = Object.entries(delays).map(([key, value]) => ({
        [`.animation-delay-${key}`]: {
          'animation-delay': value,
        },
      }));
      addUtilities(utilities);
    }
  ],
}
