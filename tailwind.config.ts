import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A192F",
          slate: "#1E2D3D",
          gold: "#C5A869",
          goldlight: "#DFCA9B",
          cream: "#FBFBFA",
          offwhite: "#F5F6F8",
          border: "#E5E8EC",
          muted: "#5F6D7E",
          darkmuted: "#334155",
        },
      },
      fontFamily: {
        serif: ["Newsreader", "Playfair Display", "Georgia", "serif"],
        sans: [
          "Plus Jakarta Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
