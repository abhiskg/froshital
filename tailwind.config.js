module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui", "Helvetica", "sans-serif"],
    },
    fontSize: {
      xs: [".75rem", "1rem"],
      sm: [".875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.5rem", "2.5rem"],
      "5xl": ["3rem", 1],
      "6xl": ["3.75rem", 1],
      "7xl": ["4.5rem", 1],
      "8xl": ["6rem", 1],
      "9xl": ["8rem", 1],
    },
    extend: {
      transitionProperty: {
        primary: "opacity, transform",
        height: "height",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              color: theme("colors.blue.500"),
              fontWeight: "600",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
