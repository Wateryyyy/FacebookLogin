/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        facebook: "#0866FF",
        facebookLogin: "#1372F6",
        loginBackground: "#F0F2F5",
      },
    },
  },
  plugins: [],
};
