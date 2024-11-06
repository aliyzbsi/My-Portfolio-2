/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        112: "28rem", // 112 birim genişlik
        128: "32rem", // 128 birim genişlik
        144: "36rem", // 144 birim genişlik
        // Diğer genişlik değerlerini buraya ekleyebilirsin
      },
      height: {
        112: "28rem", // 112 birim genişlik
        128: "32rem", // 128 birim genişlik
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        200: "50rem",
        // 144 birim genişlik
        // Diğer genişlik değerlerini buraya ekleyebilirsin
      },
    },
  },
  plugins: [],
};
