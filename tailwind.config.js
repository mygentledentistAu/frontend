/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // './src/pages/*/.{js,ts,jsx,tsx,mdx}',
    // './src/components/*/.{js,ts,jsx,tsx,mdx}',
    // "./src/slices/*/.{js,ts,jsx,tsx,mdx}",
    // './src/app/*/.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {

    },
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     fontFamily: {
//       sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
//       serif:
//         '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
//     },
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/aspect-ratio")],
// };
