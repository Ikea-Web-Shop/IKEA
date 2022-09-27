/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    container: {
      center: true,
      // backgroundColor: '#fff',
      padding: '5rem',
      // {
      //   DEFAULT: '2rem',
      //   sm: '2rem',
      //   lg: '2rem',
      //   xl: '2rem',
      //   '2xl': '6rem',
      // },
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray1': '#ccc',
      'gray-light': '#d3dce6',
      'white':"#fff",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {

    },
  },
   plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-children'),
  ],
}