/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
   
    extend: {
      colors: {
        'blue': '#0858a2',
      'indigo': '#6610f2',
      'purple': '#6f42c1',
      'pink': '#e83e8c',
      'red': '#ed1c24',
      'orange': '#fc5120',
      'yellow': '#ffdb3c',
      'green': '#43b02a',
      'teal': '#20c997',
      'cyan': '#1ba9e0',
      'white': '#fff',
      'gray': '#e1e1e1',
      'gray-dark': '#ccc',
      'gray-darker':'#475569',
      'primary': '#0858a2',
      'secondary': '#6c757d',
      'success': '#43b02a',
      'info': '#1ba9e0',
      'warning': '#ffdb3c',
      'danger': '#ed1c24',
      'light': '#f8f9fa',
      'dark': '#343a40',
      'blackfooter' :'#111',
       },
      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1536px",
      },
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
   
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

    },
  },
   plugins: [
 
  ],
}