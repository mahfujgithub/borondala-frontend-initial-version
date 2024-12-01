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
<<<<<<< HEAD
    extend: {},
=======
    extend: {
      fontFamily: {
        slab: ['Roboto Slab', 'serif']
      },
    },
>>>>>>> e93f19a911924c8818fded9c7adbb7a816f35fec
  },
  plugins: [],
}

