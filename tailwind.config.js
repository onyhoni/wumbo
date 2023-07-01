/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#3B82F6",
        dark: "#193766",
        muted: "#697B98",
        primaryLight: "#C6DBFF",
        mutedLight: "FFFFFF",
        logo: "#6EA4FC",
      },
      fontFamily: {
        sans: "DM sans, Verdana, sans-serif",
      },
    },
  },
  plugins: [],
};
