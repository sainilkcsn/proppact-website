import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003c00",
          foreground: "#F8F7F4",
        },
        accent: {
          DEFAULT: "#4c8b2e",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#6b3500",
          foreground: "#F8F7F4",
        },
        background: "#F8F7F4",
        foreground: "#1A1A1A",
        muted: {
          DEFAULT: "#E8E6E1",
          foreground: "#5C5C5C",
        },
        border: "#D9D5CC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0, 60, 0, 0.08)",
        card: "0 2px 12px rgba(26, 26, 26, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
