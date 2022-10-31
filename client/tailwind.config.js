/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'body-bg'     : '#b9c1c6',
        'section-bg'  : '#eafcff',
        'active-bg'   : '#83b1cb',
        'text'        : '#000',
        'blue'        : '#00a2ee',
        'green-light' : '#d6e9e5',
        'green'       : '#7fd1ae',
      },
      height: {
        'screen3/4' : 'calc(3*100vh/4)',
        'screen/2'  : '50vh',
        'screen/3'  : 'calc(100vh / 3)',
        'screen/4'  : 'calc(100vh / 4)',
        'screen/5'  : 'calc(100vh / 5)'
      },
      width: {
        'screen3/4' : 'calc(3*100vh/4)',
        'screen/2'  : '50vh',
        'screen/3'  : 'calc(100vh / 3)',
        'screen/4'  : 'calc(100vh / 4)',
        'screen/5'  : 'calc(100vh / 5)'
      },
      maxWidth: {
        'pathology-thumbnail' : '100px'
      }
    },
  },
  safelist: [
    {
        pattern: /grid-cols-./,
    }
  ],
  plugins: [],
}
