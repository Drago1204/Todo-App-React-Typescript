/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'dark-desktop': "url('./src/assets/bg-desktop-dark.jpg')",
        'light-desktop': "url('./src/assets/bg-desktop-light.jpg')",
      },
      letterSpacing: {
        'extra-widest': '0.4em',
      },
      colors: {
        light: "#FAFAFA",
        dark: "#181824",
        'light-element': '#FFFFFF',
        'dark-element': '#25273C',
        'color1': '#AA77F6',
        'color2': '#79B5F4',
      },
      height: {
        '1/3': '33.333333%',
       },
       fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
