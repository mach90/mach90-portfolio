/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        heading: "'Noto Sans', sans-serif", //100-900
        default: "'Poppins', sans-serif", //100-900
      },
      colors: {
        textlight: "#FFFFFF",
        textmedium: "#595959",
        textdark: "#000000",
        textdisplay: "#000000",
        light: "#f4f4f4",
        medium: "#B1B1B1",
        dark: "#000000",
        accent: "#FFF500",
        backgroundLight: "#e3e3e3",
        backgroundDark: "#1b1b1b",
        alternatelight: "#A0A0A0",
        alternatemedium: "#4b4b4b",
        alternatedark: "#2a2a2a",
      },
      backgroundImage: {
        'profileCasual': "url('img/profile-casual.jpeg')",
      },
      cursor: {
        'dot': 'url("img/cursors/dot-cursor.svg"), default',
        'triangle': 'url("img/cursors/triangle-cursor.svg"), pointer',
        'slider': 'url("img/cursors/slider-cursor.svg"), grab',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
