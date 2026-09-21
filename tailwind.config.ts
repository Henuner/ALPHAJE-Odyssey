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
        parchment: "#fff8ec",
        meadow: "#6f9f72",
        moss: "#4f6f52",
        honey: "#f4b860",
        coral: "#ec7f66",
        ink: "#24332d",
        mist: "#e7f0ec",
        skysoft: "#b9dce5",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(73, 92, 74, 0.13)",
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
