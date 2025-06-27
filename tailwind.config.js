module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          light: "#F5F3EE",
          DEFAULT: "#E8E3D9",
          dark: "#D6CFC3",
        },
        gray: {
          light: "#F7F7F7",
          DEFAULT: "#B0B0B0",
          dark: "#444444",
        },
        black: "#171717",
        white: "#FFFFFF",
        accent: "#BFA980",
      },
      fontFamily: {
        sans: ["Geist", "Noto Sans JP", "Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
