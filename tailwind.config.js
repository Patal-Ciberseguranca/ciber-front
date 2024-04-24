/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4c4c4c' /* #BB86FC */ /* #596773 */,
        secundary:
          '#d6b6fd' /* #03DAC5 */ /* #BB86FC */ /* #77aaff */ /* #9C2A22 */ /* #5b3e31 */ /* #5d437e */ /* #d6b6fd */,
        background: '#121212',
        blend: '#5A5352 ' /* #674C87 */ /* #7B494B */,
      },
    },
  },
  plugins: [],
};
