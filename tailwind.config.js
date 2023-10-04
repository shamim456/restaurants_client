/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      yellow: "#BB8506",
      white: "#FFFFFF",
      dark: "#151515",
      gray_medium: "#737373",
      gray_light: "#E8E8E8",
      gray_background: "#F3F3F3",
      blue_dark: "#1F2937",
      blue_sky: "#053bf8",
    },
  },
  plugins: [require("daisyui")],
};
