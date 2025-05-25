import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },  
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "red-orange": {
          500: 'color-mix(in srgb, theme(colors.red.500) 50%, theme(colors.orange.500) 50%)',
        } 
      },
      fontFamily: {
        sans: ["var(--font-archivo)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
