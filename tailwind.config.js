module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {    
      height: {
        "87.5vh": '87.5vh',
        '89vh': '89vh',
        'homeboxsm': '120vh',
        'projectsboxsm': '150vh',
        '99vh': '99vh',
      },
      width: {
        "98vw": '98vw',
        '98-5vw': '98.5vw',
        'homeboxsm': '95.5vw',
        'lg': '32rem',
      },
      maxHeight: {
        "75vh": '75vh',
      },
      maxWidth: {
        "30vw": '30vw',
      },
      minWidth: {
        "75vw": "75vw",
      },
      minHeight: {
        "70vh": "70vh",
        "40vh": "40vh",
        "50vh": "50vh",
      },
      margin: {
        "1vw": '1vw',
      },
      left: {
        "1vw": '1vw',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
