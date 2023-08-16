/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        "bg-color": "hsl(180, 52%, 96%)",
        "filter-color": "hsl(180, 31%, 95%)",
        "neutral-1": "hsl(180, 8%, 52%)",
        "neutral-2": "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        main: ["League Spartan", "sans-serif"],
      },
      backgroundImage: {
        "wave-pattern": "url('/images/bg-header-desktop.svg')",
      },
      boxShadow: {
        lg: "0px 0px 25px -10px rgba(91,164,164,0.75)",
      },
      screens: {
        sm: { min: "0px", max: "767px" },
        md: { min: "768px", max: "1024px" },
        lg: { min: "1024px", max: "9999px" },
      },
    },
    fontWeight: {
      normal: "500",
      bold: "700",
    },
  },
  plugins: [],
};
