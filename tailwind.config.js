/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts}","!./node_modules/**/*"],
  theme: {
    extend: {
      borderRadius: {
       'md': '0.4rem',
       'lg': '1rem',
      },
      fontFamily: {
        modak: ['"Modak"', 'system-ui'], 
        noto: ['"Noto Sans"', 'sans-serif'], 
        open: ['"Open Sans"', 'sans-serif'],   
      },
      colors: {
        customBeige: '#ECE3DC',
        customLBeige: '#EFE9E4',
        customDark: '#424343',
        gradientBeige: '#FDD6BC',
        gradientBlue: '#DCE9F5',
      }
    },
  },
  plugins: [],
}

