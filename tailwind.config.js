/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        spaceBlack: '#02011c',
        spaceNavy: '#001f53',
        spaceBlue: '#035d82',
        spaceTeal: '#04aa9b',
        spaceLime: '#01eaa6',
      },
    },
  },
  plugins: [],
}
