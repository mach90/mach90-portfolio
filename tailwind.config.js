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
        light: "#FFFFFF",
        medium: "#B1B1B1",
        dark: "#000000",
        accent: "#FFF500",
        alternatedark: "#282828",
        alternatelight: "#A0A0A0",
      },
      backgroundImage: {
        'grainyLight': "url('img/grainybglight.png')",
        'grainyMedium': "url('img/grainybgmedium.png')",
        'profileCasual': "url('img/profile-casual.jpeg')",
      }
    },
  },
  plugins: [],
}
