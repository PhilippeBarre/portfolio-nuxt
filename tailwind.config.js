module.exports = {
  theme: {
    darkSelector: ".dark-mode",
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      colors: {
        dark: {
          default: 'var(--dark-default)',
          primary: 'var(--dark-primary)'
        },
        light: {
          default: 'var(--light-default)',
          primary: 'var(--light-primary)'
        },
        accent: {
          default: 'var(--accent-default)'
        }
      }
    }
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
      "responsive"
    ],
    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "responsive"
    ],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};
