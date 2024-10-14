import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-purple": "#7939FF",
        black: "#080f0f",
        gray: "#3A3F3F",
        "light-gray": "#807E7D",
        white: "#FFFCF9",
      },
    },
  },
  plugins: [],
};
