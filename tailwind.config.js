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
        borderlight: "#e6e6e6",
        medium: "#B1B1B1",
        dark: "#000000",
        accent: "#FFF500",
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
        lightText: "#c8c7c8",
        darkHeading: "#ffffff",
        darkSubheading: "#8a8a8c",
        darkText: "#7f7f7f",
        lightPrimaryAccent: "#f8d0c8",
        lightSecondaryAccent: "#e54324",
        darkPrimaryAccent: "#4785c2",
        darkSecondaryAccent: "#d1e0f0",
      },
      backgroundImage: {
        'lightProfileCasual': "url('img/profile-casual.avif')",
        'darkProfileCasual': "url('img/profile-casual.jpeg')",
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
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
