// added file
import { type Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        lighBlue: "#D5E4E5",
        blue1: "#79B5BA",
        purple1: "#AAA7C1",
        darkGreen1: "#324B4D",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
