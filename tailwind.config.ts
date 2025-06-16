import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00aeef",
          dark: "#005170",
        },
        secondary: "#9333ea",
        tertiary: "#14b8a6",
        accent: "#f8f5f2",
      },
    },
  },
  plugins: [],
};

export default config;
