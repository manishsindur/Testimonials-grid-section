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
        Light_Grayish_Blue: "#ECF4FB",
        Very_dark_grayish_blue: "#4a5968",
        Very_dark_blackish_blue: "#1e2733",
        Moderate_violet: "#7853ab",
      },
    },
  },
  plugins: [],
};
