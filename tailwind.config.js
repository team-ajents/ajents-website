/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ajents-blue": "#1a3a5c",
        "ajents-bg": "#f8f8f6",
        "ajents-gray-light": "#f1f1ef",
        "ajents-gray": "#6b7280",
        "ajents-text": "#1a1a1a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
