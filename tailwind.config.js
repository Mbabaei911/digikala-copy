/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-45": "linear-gradient(-45deg, var(--tw-gradient-stops))",
      },
      colors: {
        digiRed: "#e5013a",
        digiBlue: "#008eb2",
        digiDarkBlue: "#3F4064",
        digiStoriBorderTopColor: "#8c4a9d",
        digiStoriBorderBottomColor: "#d03f97",
        digiAmazingColorRight: "#d72e4e",
        digiAmazingColorLeft: "#ef4d5c",
        digiAmazingFreshBgLeft: "#f0f0f1",
        digiAmazingFreshBgRight: "#e9eeec",
        digiGreen: "#029a49",
        digiClubLeftColor: "#35a6c8",
        digiClubRightColor: "#007295",
      },
    },
  },
  plugins: [],
};
