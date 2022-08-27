/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        certainblue: {
          100: "#1C214F",
        },
        certainGreen: {
          50: "#C1FF8F",
          100: "#84A46C",
        },
        certainPurple: {
          100: "#C0A4EE",
        },
      },
    },
  },
  plugins: [],
};
