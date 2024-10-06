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
        background: "#e3e3e3",
        alternatelight: "#A0A0A0",
        alternatemedium: "#3b3b3b",
        alternatedark: "#282828",
      },
      backgroundImage: {
        'grainyLight': "url('img/grainybglight.avif')",
        'grainyMedium': "url('img/grainybgmedium.avif')",
        'profileCasual': "url('img/profile-casual.jpeg')",
        'plainBrand': "url('img/plainbrand.avif')",
        'background0': "url('img/background.svg')",
      }
    },
  },
  plugins: [],
}
