module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    fontFamily: {
      Kaushan: ['Kaushan Script'],
      Quicksand: ['Quicksand']
    },
    boxShadow: {
      custom_light: '0 0 10px #313131',
      custom_dark: '5px 5px 10px #0a0c0e , -5px -5px 10px #14161c'
    },
    extend: {
      height: theme => ({
        screen65: '65vh'
      })
    }
  },
  plugins: []
};

// background-color: #fc5296;
// background-image: linear-gradient(315deg, #fc5296 0%, #f67062 74%);
