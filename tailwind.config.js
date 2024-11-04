/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts}","!./node_modules/**/*"],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans"', 'sans-serif'], 
        open: ['"Open Sans"', 'sans-serif'],   
      },
      colors: {
        customBeige: '#ECE3DC',
        customLBeige: '#EFE9E4',
        customDark: '#323232',
      }
    },
  },
  plugins: [],
}

