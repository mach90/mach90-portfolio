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
        backgroundLight: "#e3e3e3",
        backgroundDark: "#1b1b1b",
        alternatelight: "#A0A0A0",
        alternatemedium: "#4b4b4b",
        alternatedark: "#2a2a2a",
        lightPrimary: "#ffffff",
        lightSecondary: "#f4f4f4",
        darkPrimary: "#141517",
        darkSecondary: "#191a1d",
        lightPrimaryBorder: "#f0f0f0",
        lightSecondaryBorder: "#e6e6e6",
        darkPrimaryBorder: "#222326",
        darkSecondaryBorder: "#252629",
        lightHeading: "#333333",
        lightSubheading: "#7f7f7f",
        lightText: "#abaaab",
        darkHeading: "#ffffff",
        darkSubheading: "#8a8a8c",
        darkText: "#7f7f7f",
        lightPrimaryAccent: "#f8d0c8",
        lightSecondaryAccent: "#e54324",
        darkPrimaryAccent: "#4785c2",
        darkSecondaryAccent: "#d1e0f0",
        lightTertiaryAccent: "#ac5efb",
        darkTertiaryAccent: "#ead7fe",
        lightValidation: "#3fa153",
        darkValidation: "#67b342",
      },
      backgroundImage: {
        'lightProfileCasual': "url('img/profile-casual-light.jpeg')",
        'darkProfileCasual': "url('img/profile-casual-dark.jpeg')",
      },
      cursor: {
        'dot': 'url("img/cursors/dot-cursor.svg"), default',
        'triangle': 'url("img/cursors/triangle-cursor.svg"), pointer',
        'slider': 'url("img/cursors/slider-cursor.svg"), grab',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-out',
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
