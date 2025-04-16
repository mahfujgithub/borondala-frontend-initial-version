/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slab: ['Roboto Slab', 'serif']
      },
      keyframes: {
        'settle-bounce': {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-30%)' },
          '40%': { transform: 'translateY(0)' },
          '55%': { transform: 'translateY(-15%)' },
          '70%': { transform: 'translateY(0)' },
          '80%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'settle-bounce': 'settle-bounce 1s ease-out 1 forwards',
      },
    },
  },
  plugins: [],
}

