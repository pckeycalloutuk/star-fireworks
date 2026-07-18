import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0A0A12",
        smoke: "#14141F",
        gold: "#F5B82E",
        ember: "#FF4D2E",
        success: "#22C55E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      borderRadius: {
        card: "16px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      backgroundImage: {
        "ember-gradient": "linear-gradient(135deg, #F5B82E 0%, #FF4D2E 100%)",
        "night-fade": "linear-gradient(180deg, rgba(10,10,18,0) 0%, #0A0A12 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
