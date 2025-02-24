/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: {
               light: "#12a714",
               default: "#149016",
               dark: "#146715",
            },
            secondary: {
               light: "#f3c056",
               default: "#efa525",
               dark: "#e98917",
            },
            dark: "#000a00",
         },
      },
   },
   plugins: [],
};
