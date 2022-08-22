/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      height: {
        'screen3/4' : 'calc(3*100vh/4)',
        'screen/2' : '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)'
      },
      width: {
        'screen3/4' : 'calc(3*100vh/4)',
        'screen/2' : '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)'
      }
    },
  },
  plugins: [],
}
