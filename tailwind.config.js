const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  corePlugins: {
    preflight: true,
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        tag: "13px",
        ...defaultTheme.fontSize,
      },
      fontFamily: {
        sans: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        primary: "#152b52",
        ...defaultTheme.textColor,
      },
      colors: {
        coolgray: colors.coolGray,
        bluegray: colors.blueGray,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        lightblue: colors.lightBlue,
        rose: colors.rose,
        orange: colors.orange,
        ...defaultTheme.colors,
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}