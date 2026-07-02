import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#070b14",
        panel: "#0B1220",
        accent: "#20D3FF",
        violet: "#8B5CF6"
      },
      boxShadow: {
        glow: "0 0 80px rgba(32, 211, 255, 0.22)",
        card: "0 30px 90px rgba(0,0,0,0.28)"
      }
    }
  },
  plugins: []
};

export default config;
