/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      //MIN
      "md-xxs-min": "320px",

      "md-xs-min": "480px",

      "md-sm-min": "640px",

      "md-md-min": "769px",

      "md-lg-min": "961px",

      xxs: { max: "320px" },
      // => @media (min-width: 640px) { ... }

      xs: { max: "480px" },
      // => @media (min-width: 640px) { ... }

      sm: { max: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { max: "768px" },

      "md-lg-max": { max: "960px" },
      // => @media (min-width: 768px) { ... }

      lg: { max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      xl: { max: "1280px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": { max: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
