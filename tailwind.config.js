/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Barlow_Semi_Condensed: ['"Barlow Semi Condensed", sans-serif'],
      },
      colors: {
        Light_Gray: "#CFCFCF",
        Light_Grayish_Blue: "#F1F8FC",
        Very_dark_grayish_blue: "#4a5965",
        Very_dark_blackish_blue: "#1d2731",
        Moderate_violet: "#8551A1",
      },
    },
  },
  plugins: [],
};
