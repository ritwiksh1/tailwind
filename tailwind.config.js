module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {fontSize: {'cus':'80px','cus2':'21px','cus3':'24px','cus4':'16px'},
  textColor: {
    'cus-grey':"#696871",
    'cus-white':"#ffffff"
  },backgroundColor: theme => ({
    ...theme('colors'),
    'cus-theme': '#f7f7fb',
   
   }),
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/images/path-1.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
