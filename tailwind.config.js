module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "28px"],
      "2xl": ["26px", "32px"],
      "3xl": ["30px", "36px"],
      "4xl": ["36px", "40px"],
      "5xl": ["48px", "1"],
      "6xl": ["60px", "1"],
      "7xl": ["72px", "1"],
      "8xl": ["96px", "1"],
      "9xl": ["128px", "1"],
      "10xl": ["230px", "1"],
    },
    extend: {
      screens: {
        "3xl": "2160px",
        "4xl": "3000px",
        "5xl": "4096px",
      },
    },
  },
  plugins: [],
};
