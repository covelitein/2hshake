import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D12",
        mist: "#F6F7FB",
        calm: "#E4E8F2",
        accent: "#5562FF"
      },
      boxShadow: {
        soft: "0 24px 48px -32px rgba(15, 23, 42, 0.35)"
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;
