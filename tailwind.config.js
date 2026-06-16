/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#1E2126",
        "signal-red": "#E53935",
        slate: "#687280",
        fog: "#F2F2F2",
        white: "#FFFFFF",
        dept: {
          qa: "#E53935",
          itsm: "#FFB020",
          dev: "#2563EB",
          consulting: "#7C3AED",
          training: "#14B8A6",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
