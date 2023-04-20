/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          "primary-color": "var(--primary-color)",
          "secondary-color": "var(--secondary-color)",
          "primary-bg-gradient": "background-image: linear-gradient(to right, #0e6661, #2db182)"
        },
      },
    },
  },
  plugins: [],
}
