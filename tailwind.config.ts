import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        foreground: "hsl(var(--foreground))",
        // Custom colors for the aerospace theme
        navy: {
          DEFAULT: "#0A2647",
          light: "#144272",
          dark: "#06162B",
        },
        steel: {
          DEFAULT: "#2C3333",
          light: "#395B64",
          dark: "#1C1F1F",
        },
        alert: {
          DEFAULT: "#CF0A0A",
          light: "#DC2626",
          dark: "#991B1B",
        },
        cyber: {
          DEFAULT: "#00FF9D",
          light: "#4ADE80",
          dark: "#059669",
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #1C1F1F 1px, transparent 1px), linear-gradient(to bottom, #1C1F1F 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;