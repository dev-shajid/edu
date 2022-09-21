/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:{
          light:'#4666F6',
          dark:'#4666F6',
          DEFAULT: '#4666F6'
        },
        primary: {
          DEFAULT: '#f3f4f6',
          light: {
            DEFAULT: '#f6faff',
            1: '#eaf0f7',
            2: '#f6faff',
          },
          dark: {
            DEFAULT: '#0e1325',
            1: '#0a1127',
            2: '#161c35',
          }
        },
        stackBorder: {
          light: '#00000025',
          dark: '#ffffff25',
          DEFAULT: '#00000025'
        }
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
