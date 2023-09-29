
module.exports = {
  content: [ "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature:["Great Vibes"],
    },
  },
  plugins: [ require('tailwindcss'),
    require('autoprefixer'),],
}
