module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1.875rem',
      }
    },
    fontFamily: {
      cern: ['Cern', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',    //12
      'sm': '.875rem',   //14
      'base': '1rem',    //16
      'lg': '1.125rem',  //18
      'xl': '1.25rem',  //20
      '2xl': '1.375rem',  //22
      '3xl': '1.5rem',     //24
      '4xl': '1.75rem', //28
      '5xl': '2rem',     //32 - h1 on mobile
      '6xl': '2.25rem',  //36
      '7xl': '2.5rem',  //40
      '8xl': '3rem',  //48
      '9xl': '3.5rem',  //56
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
      animation: {
        'slide-up': 'slideup 300ms ease-in forwards',
      },
      keyframes: {
        slideup: {
          '0%': { 
            transform: 'translateY(50px)',
            opacity: 0
            },
          '100%': { 
            transform: 'rotate(0)',
            opacity: 1
          },
        }
      },
      
      borderRadius: {
        '3': "3px",
        '20': "20px",
        '10': "10px",
        '30': "30px",
        '50': "50px"
      },
      borderWidth: {
        '3': '3px'
      },
      colors: {
        sdv: {
          highlight: '#03C8DE',
          primary: '#01E0C9',
          secondary: '#03AFF1',
          success: '#36B37E',
          warning: '#FAAD13',
          error: '#F16141',
          dark: '#000036',
          gray: '#231F20',
          graylight: '#F7F7F8',
          offwhite: '#FAFAFA',
          border: '#BBC0CB'
        },

        light: {
          primary: 'rgba(1, 224, 201, .1)',
          secondary: 'rgba(3, 175, 241, .1)',
          success: 'rgba(54, 179, 126, .1)',
          warning: 'rgba(250, 173, 19, .1)',
          error: 'rgba(241, 97, 65, .1)',
          dark: 'rgba(0, 0, 54, .1)',
          gray: 'rgba(35, 31, 32, .1)',
          graylight: 'rgba(247, 247, 248, .1)',
          offwhite: 'rgba(250, 250, 250, .1)',
        }
      },
      letterSpacing: {
        body: '0.0125rem'
      },
      lineHeight: {
        'extra-loose': '1.85',
        'extra-relaxed': '1.75',
      },
      maxWidth: {
        form: "956px"
      },
      padding: {
        '4/3': '75%',
        'pimg-lg': '32.15%',
        'pimg-md': '56%',
        'pimg-sm': '60%',
        'pimg-xs': '90%',
        'cimg-xs': '78%',
        '21/9': '35%'
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
