const colors = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", ...fontFamily.sans],
        // sans: ["Rubik", ...fontFamily.sans],
        mono: ["Space Mono", ...fontFamily.mono],
        serif: ["Merriweather", ...fontFamily.serif],
        "sans-alt": ["Be Vietnam Pro", ...fontFamily.sans],
      },
      fontSize: {
        xs: "var(--tw-xs)",
        sm: ["var(--tw-sm)", "1.4"],
        base: "var(--tw-base)",
        md: "var(--tw-md)",
        lg: "var(--tw-lg)",
        xl: ["var(--tw-xl)", "1.3"],
        "2xl": "var(--tw-2xl)",
        "3xl": "var(--tw-3xl)",
        "4xl": "var(--tw-4xl)",
        "5xl": "var(--tw-5xl)",
        "6xl": ["var(--tw-6xl)", "1"],
        "7xl": ["var(--tw-7xl)", "1.1"],
        "8xl": ["var(--tw-8xl)", "1.2"],
        "9xl": "var(--tw-9xl)",
        "10xl": "var(--tw-10xl)",
        "11xl": "var(--tw-11xl)",
        "12xl": "var(--tw-12xl)",
      },
      colors: {
        "primary-text": colors.slate[500],
        "primary-text-dark": "#B4BCD0",
        "off-white": "#f7f8f8",
        transparent: "transparent",
        "transparent-white": "rgba(255, 255, 255, 0.08)",
        "transparent-black": "rgba(0, 0, 0, 0.011)",
        background: "#000212",
        black: "#191919",
        white: "#fff",
        grey: "#858699",
        "white-a08": "rgba(255, 255, 255, 0.08)",
        "white-a50": "rgba(255, 255, 255, 0.5)",
        "grey-dark": "#222326",
        "white-text": "#F8F8FF",
        nav: "rgb(100, 116, 139)",
        overlay: "rgba(0, 0, 0, 0.8)",
        page: "var(--page-container-background)",
        btn: {
          light: colors.blue[100],
          DEFAULT: colors.blue[500],
          dark: colors.blue[700],
        },
        ai: {
          bg: "#FFFFF9",
          "side-bg": "#FFE0B5",
          "chat-bg": "#fff",
          "chat-text": "#191919",
          "side-text": "#191919",
          text: colors.slate[800],
          //dark mode
          "dark-bg": "#111E29",
          "dark-side-bg": "#1e3447",
          "dark-chat-bg": "#152533",
          // "dark-chat-bg": "#3A1E47",
          "dark-chat-text": "#EBEBFF",
          "dark-side-text": "#EBEBFF",
          "dark-text": colors.slate[100],
        },
      },
      spacing: {
        // 0: "0",
        // 1: "0.4rem",
        // 2: "0.8rem",
        // 3: "1.2rem",
        // 4: "1.6rem",
        // 5: "2.0rem",
        // 6: "2.4rem",
        // 7: "2.8rem",
        // 8: "3.2rem",
        // 9: "3.6rem",
        // 10: "4.0rem",
        // 11: "4.4rem",
        // 12: "4.8rem",
        // 13: "5.2rem",
        // 14: "5.6rem",
        "navigation-height": "var(--navigation-height)",
        image: "calc(var(--image-width) * 1%)",
        "image-margin": "calc(var(--image-margin) * 1%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 10s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
