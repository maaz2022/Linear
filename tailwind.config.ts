import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      rotate: {
        'x-45': 'rotateX(45deg)',   
        'y-45': 'rotateY(45deg)',   
        'z-45': 'rotateZ(45deg)',    
        'x-90': 'rotateX(90deg)',   
        'y-90': 'rotateY(90deg)',
        'z-90': 'rotateZ(90deg)',
        'x-180': 'rotateX(180deg)',
        'y-180': 'rotateY(180deg)',
        'z-180': 'rotateZ(180deg)',
      }
    },
  },
  plugins: [],
};

export default config;
