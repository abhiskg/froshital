module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui", "Helvetica", "sans-serif"],
    },
    extend: {
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
