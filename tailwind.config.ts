import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#fffaf2",
        meadow: "#789976",
        moss: "#48614f",
        honey: "#e8b65f",
        coral: "#df826f",
        ink: "#2f3b35",
        mist: "#eaf2ed",
        skysoft: "#cbe5eb",
      },
      boxShadow: {
        card: "0 8px 24px rgba(66, 82, 70, 0.07)",
        soft: "0 16px 42px rgba(66, 82, 70, 0.11)",
        float: "0 12px 28px rgba(66, 82, 70, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [typography],
};

export default config;
