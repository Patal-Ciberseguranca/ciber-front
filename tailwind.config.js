/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'primary': '#BB86FC',
        'secundary': '#03DAC5',
        'background': '#121212',
        'blend': '#674C87',
      },
    },
  },
  plugins: [],
};
