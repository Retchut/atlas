/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'theme1-gray'  : '#b9c1c6',
        'theme1-blue-light' : '#83b1cb',
        'theme1-blue-dark'  : '#364954',
        
        'theme2-blue-light'  : '#eafcff',
        'theme2-blue'        : '#00a2ee',
        'theme2-green-light' : '#d6e9e5',
        'theme2-green'       : '#7fd1ae',
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
  plugins: [],
}
