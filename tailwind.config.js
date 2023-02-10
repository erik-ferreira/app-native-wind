/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#AAAAAA",
          900: "#121214",
        },
        green: {
          500: "#015F43",
        },
      },
    },
  },
  plugins: [],
};
