/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#F5F3DF",
      pink: "#C0038D",
      blue: "#009FD3",
      green: "#028F3D",
      yellow: "#F3A916",
      orange: "#E98020",
      red: "#DE2E2E",
      black: "#000000",
      gray: {
        default: "#ACACAC",
        light: "#D8D8D8",
        dark: "#737373",
      },
    },
    fontFamily: {
      title: ["Berkshire Swash"],
      body: ["Hubbali"],
    },
    plugins: [],
  },
};
