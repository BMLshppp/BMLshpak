import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: "#0B0B0F",
          gold: "#D4AF37",
          goldLight: "#F5D76E",
          goldDim: "#B8860B",
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F5D76E 50%, #D4AF37 100%)",
        "gold-gradient-subtle": "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(245, 215, 110, 0.1) 100%)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(212, 175, 55, 0.3)",
        "gold-glow-sm": "0 0 15px rgba(212, 175, 55, 0.2)",
        "card-glow": "0 0 40px rgba(212, 175, 55, 0.15)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "gold-shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "1", backgroundPosition: "0% 50%" },
          "50%": { opacity: "1", backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(212, 175, 55, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
