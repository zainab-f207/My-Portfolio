/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
  cream: "#fdf6ec",
  card: "#ffffff",
  plum: "#3d2c56",        
  lavender: "#8b5cf6",
  peach: "#fb923c",
  coral: "#f87171",
  mint: "#2dd4bf",
  gold: "#fbbf24",
  sky: "#38bdf8",
},

      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
  clay: "8px 8px 0px rgba(139,92,246,0.18)",
  "clay-lg": "12px 12px 0px rgba(139,92,246,0.18)",
  "clay-hover": "4px 4px 0px rgba(139,92,246,0.25)",
  "clay-peach": "8px 8px 0px rgba(251,146,60,0.2)",
  "clay-mint": "8px 8px 0px rgba(45,212,191,0.2)",
},

      animation: {
        blob: "blob 14s infinite",
        float: "float 6s ease-in-out infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-rev": "spin-rev 25s linear infinite",
      },

      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1) rotate(0deg)",
          },
          "33%": {
            transform: "translate(30px, -40px) scale(1.1) rotate(8deg)",
          },
          "66%": {
            transform: "translate(-25px, 25px) scale(0.95) rotate(-6deg)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-18px) rotate(4deg)",
          },
        },

        wiggle: {
          "0%, 100%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(4deg)",
          },
        },

        "spin-rev": {
          "0%": {
            transform: "rotate(360deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },

  plugins: [],
};