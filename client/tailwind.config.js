/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx",
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        "body-bg": "#e6f4f1",
        "section-bg": "#dff1ff",
        "active-bg": "#4181cb",
        "selected-bg": "#7fb6ff",
        text: "#000",
        blue: "#00a2ee",
      },
      height: {
        "screen3/4": "calc(3*100vh/4)",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      width: {
        "screen3/4": "calc(3*100vh/4)",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      maxWidth: {
        "pathology-thumbnail": "100px",
      },
    },
  },
  safelist: [
    {
      pattern: /grid-cols-./,
    },
  ],
  plugins: [],
};
