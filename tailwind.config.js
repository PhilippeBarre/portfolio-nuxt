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
          default:  "var(--dark-default-500)",
          50: "var(--dark-default-50)",
          100: "var(--dark-default-100)",
          200: "var(--dark-default-200)",
          300: "var(--dark-default-300)",
          400: "var(--dark-default-400)",
          500: "var(--dark-default-500)",
          600: "var(--dark-default-600)",
          700: "var(--dark-default-700)",
          800: "var(--dark-default-800)",
          900: "var(--dark-default-900)"
        },
        dark_primary: {
          default:  "var(--dark-primary-500)",
          50: "var(--dark-primary-50)",
          100: "var(--dark-primary-100)",
          200: "var(--dark-primary-200)",
          300: "var(--dark-primary-300)",
          400: "var(--dark-primary-400)",
          500: "var(--dark-primary-500)",
          600: "var(--dark-primary-600)",
          700: "var(--dark-primary-700)",
          800: "var(--dark-primary-800)",
          900: "var(--dark-primary-900)"
        },
        light: {
          default:  "var(--light-default-500)",
          50: "var(--light-default-50)",
          100: "var(--light-default-100)",
          200: "var(--light-default-200)",
          300: "var(--light-default-300)",
          400: "var(--light-default-400)",
          500: "var(--light-default-500)",
          600: "var(--light-default-600)",
          700: "var(--light-default-700)",
          800: "var(--light-default-800)",
          900: "var(--light-default-900)"
        },
        light_primary: {
          default:  "var(--light-primary-500)",
          50: "var(--light-primary-50)",
          100: "var(--light-primary-100)",
          200: "var(--light-primary-200)",
          300: "var(--light-primary-300)",
          400: "var(--light-primary-400)",
          500: "var(--light-primary-500)",
          600: "var(--light-primary-600)",
          700: "var(--light-primary-700)",
          800: "var(--light-primary-800)",
          900: "var(--light-primary-900)"
        },
        accent: {
          default:  "var(--accent-default-500)",
          50: "var(--accent-default-50)",
          100: "var(--accent-default-100)",
          200: "var(--accent-default-200)",
          300: "var(--accent-default-300)",
          400: "var(--accent-default-400)",
          500: "var(--accent-default-500)",
          600: "var(--accent-default-600)",
          700: "var(--accent-default-700)",
          800: "var(--accent-default-800)",
          900: "var(--accent-default-900)"
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
  plugins: [
    require("tailwindcss-dark-mode")()
  ]
};
