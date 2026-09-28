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
        "q-brand": "#e8200f",
        "q-brand-ember": "#ff3a26",
        "q-ink": "#0b0b0c",
        "q-black": "#000000",
        "q-panel": "#f7f7f8",
        "q-panel-hover": "#efeff1",
        "q-gray-100": "#f4f4f5",
        "q-gray-200": "#e4e4e7",
        "q-gray-300": "#d4d4d8",
        "q-gray-400": "#a1a1aa",
        "q-gray-500": "#71717a",
        "q-gray-600": "#52525b",
        "q-gray-700": "#3f3f46",
        "q-gray-800": "#27272a",
        "q-gray-900": "#18181b",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
