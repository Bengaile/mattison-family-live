/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        heritage: {
          green: '#2F4734',
          orange: '#E07A2C',
          gold: '#C7A24A',
          cream: '#FAF6EE',
          charcoal: '#3A332C',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
};
