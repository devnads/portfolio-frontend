import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minHeight: {
        "calc-100vh-128px": "calc(100vh - 128px)",
      },
      fontFamily: {
        syne: ["var(--font-syne-sans)", "sans-serif"],
        spaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
        digital: ["Digital-7", "monospace"],
      },
      borderWidth: {
        DEFAULT: "0.5px",
      },
      colors: {
        red: "#EB2222",
        green: "#05F858",
      },
    },
  },
  plugins: [animatePlugin],
};
export default config;
