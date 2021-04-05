module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.875rem'
      }
    },
    fontSize: {
      'xs': '.75rem',    //12
      'sm': '.875rem',   //14
      'base': '1rem',    //16
      'lg': '1.125rem',  //18
      'xl': '1.25rem',  //20
      '2xl': '1.5rem',  //24
      '3xl': '2rem',     //32
      '4xl': '2.625rem', //42
      '5xl': '3rem',     //48 - h1 on mobile
      '6xl': '3.25rem',  //52
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    
    extend: {
      borderRadius: {
        '3': "3px",
        '20': "20px",
        '10': "10px",
        '30': "30px",
        '50': "50px"
      },
      colors: {
        sdv: {
          white: '#FFFFFF',
          placeholder: '#FAFAFA',
          mute: '#F1F2F9',
          disabled: '#C8CCD8',
          secondary: '#8A90A2',
          primary: '#2D3142',
          purple: '#7550EE',
          pink: '#FF3B9B',
          green: '#01DFC8', // sdv
          dark: '#24292E',
          font: '#183B56',
          stroke: '#E5EAF4',
          link: '#03AFF1',
          heading: '#000036',
          subheading: '#24292E',
          highlight: '#03C8DE',
          separator: '#02C7DD',
          footer: '#183B56',
          fbg: '#B3BAC5',
        }
      },
      fontFamily: {
        cern: ['Cern', 'sans-serif'],
        proxima: ['Proxima Nova', 'sans-serif'],
      },
      letterSpacing: {
        body: '0.0125rem'
      },
      lineHeight: {
        'extra-loose': '1.85',
      },
      maxWidth: {
        form: "956px"
      },
      padding: {
        '4/3': '75%',
      },
      spacing: {
        'input': '1.125rem',
        '5': '1.875rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
