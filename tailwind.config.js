/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        well: {
          bg1: "#0F1C2E",
          bg2: "#133B5C",
          mint: "#6CC4A1",
          sky:  "#4A90E2",
          glass: "rgba(255,255,255,0.08)",
          stroke: "rgba(255,255,255,0.15)"
        }
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0,0,0,0.25)"
      }
    },
  },
  plugins: [],
};
