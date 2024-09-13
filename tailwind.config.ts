import type { Config } from "tailwindcss";

const config: Config = {
  // Enable JIT mode for optimal CSS size
  mode: "jit",
  
  // Paths to all your components/pages to purge unused styles
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        // Custom colors using CSS variables
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  
  // Add your plugins if needed here
  plugins: [],
};

export default config;
