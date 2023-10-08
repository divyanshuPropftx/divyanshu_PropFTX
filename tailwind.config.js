/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'], // 'CustomFont' should match the font's CSS font-family name
      },

      colors:{
        grey:'#79747E',
        navyBlue:'#0D192A',
        blue:'#78F9FF',
        pink:'#D328A7',
        silver:'#212A38',
        lightgrey:"#7E838C",
        darkblue:'#091526',
        paleWhite:'#D3D4D7',
        paleSilver:'#DEDEDE',
        paleGrey:'#ADB9C7'
        
      },

      height: {
        '56':'56px',
        '70':'70px',
        '700': '700px', // Define your custom height value here
        '420':'420px',
        '380':'380px',
        '380':'380px',
        '150':'150px',

        '1400':'1400px',
        '880':'880px',
        '715':'715px',
        '370':'370px',
        '340':'340px',
        '320':'320px',
        '525':'525px',
        '675':'675px',
        '415':'415px',
        '530':'530px',
        '275':'275px',
        '55':'55px',
        '115':'115px',
        '1000':'1000px',
        '900':'920px'
      },
      width: {
        '36':'36px',
        '56':'56px',
        '70':'70px',
        '1720':'1400px',
        '820':'820px',
        '1100':'1100px',
        '140':'140px',
        '150':'150px',
        '180':'180px',
        '680':'680px',
        '420':'420px',
        '2500':'2500px',
        '2800':'2800px',
        '350':'350px',
        '280':'280px'
      },

    },
  },
  plugins: [],
}

