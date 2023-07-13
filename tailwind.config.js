/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        bouncing: 'bounce 6s linear infinite',
      },
      keyframes: {
        bouncing: {
          '0%': { transform: 'translateY(-20)' },
          '50%': { transform: 'translateY(20)' },
          '100%': { transform: 'translateY(-20)' },
        },
      },
    },
  },
  plugins: [],
};
