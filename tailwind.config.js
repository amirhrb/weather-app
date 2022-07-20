module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            filter: "blur(10px)",
          },
          "100%": {
            filter: "blur(0)",
          },
        },
        skeleton: {
          "0%": {
            backgroundPosition: "0% , 50%",
          },
          "100%": {
            backgroundPosition: "200% , 50%",
          },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out 1",
        skeleton: "skeleton 1s ease-in-out infinite",
      },
    },
  },
  daisyui: {
    themes: ["winter", "night"],
  },
  plugins: [require("daisyui")],
};
