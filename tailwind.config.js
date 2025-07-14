module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
      },
    },
    fontFamily: {
      cern: ["Cern", "sans-serif"],
      consolas: ["Consolas", "monospace"],
    },
    fontSize: {
      xs: ".75rem", //12
      sm: ".875rem", //14
      base: "1rem", //16
      md: "1.0625rem", //17
      lg: "1.125rem", //18
      xl: "1.25rem", //20
      "2xl": "1.5rem", //24
      "2xl2": "1.875rem", //30
      "3xl": "2rem", //32
      "4xl": "2.25rem", // 36
      "5xl": "3rem", //48
      "6xl": "3.75rem", //60
      "7xl": "4.5rem", //72
    },
    fontWeight: {
      thin: 100,
      ultrathin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    screens: {
      xs: "412px",
      // => @media (min-width: 412px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1248px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      animation: {
        "slide-up": "slideup 300ms 200ms ease-in forwards",
      },
      keyframes: {
        slideup: {
          "0%": {
            transform: "translateY(50px)",
            opacity: 0,
          },
          "100%": {
            transform: "rotate(0)",
            opacity: 1,
          },
        },
      },

      borderRadius: {
        3: "3px",
        20: "20px",
        10: "10px",
        30: "30px",
        50: "50px",
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        sdv: {
          highlight: "#03C8DE",
          primary: "#01E0C9",
          secondary: "#03AFF1",
          success: "#36B37E",
          warning: "#FAAD13",
          error: "#F16141",
          dark: "#000036",
          gray: "#231F20",
          graylight: "#F7F7F8",
          offwhite: "#FAFAFA",
          border: "#BBC0CB",
        },
        midnight: {
          0: "#FFFFFF",
          25: "#F6F6F9",
          50: "#EFEFF5",
          100: "#E5E8F2",
          200: "#D5DAE8",
          300: "#C1C8DB",
          400: "#AEB5CF",
          500: "#959FBD",
          600: "#727C9E",
          700: "#525C80",
          800: "#353E67",
          900: "#19214E",
          950: "#000036",
        },
        teal: {
          950: "#003438",
          900: "#065255",
          800: "#04696A",
          700: "#008583",
          600: "#00A29B",
          500: "#04C1B3",
          400: "#01E0C9",
          300: "#67E7D4",
          200: "#95EEDE",
          100: "#BBF4E9",
          50: "#DEFAF4",
          25: "#EFFDF9",
        },
        blue: {
          950: "#002152",
          900: "#003C7A",
          800: "#025596",
          700: "#1376B1",
          600: "#0690D1",
          500: "#03AFF1",
          400: "#2EC8FF",
          300: "#77DAFF",
          200: "#B7E9FF",
          100: "#DEF3FF",
          50: "#F0F9FF",
          25: "#F7FDFF",
        },
        light: {
          primary: "rgba(1, 224, 201, .1)",
          secondary: "rgba(3, 175, 241, .1)",
          success: "rgba(54, 179, 126, .1)",
          warning: "rgba(250, 173, 19, .1)",
          error: "rgba(241, 97, 65, .1)",
          dark: "rgba(0, 0, 54, .1)",
          gray: "rgba(35, 31, 32, .1)",
          graylight: "rgba(247, 247, 248, .1)",
          offwhite: "rgba(250, 250, 250, .1)",
        },
      },
      letterSpacing: {
        body: "0.0125rem",
        "2xs": "-0.1rem", // -1.6px
        xs: "-0.025rem", // -0.4px
        sm: "-0.015625rem", // -0.25px
        none: "0",
        md: "-0.0125rem", // -0.2px
        lg: "-0.00625rem", // -0.1px
        xl: "0.1rem", // 1.6px
        label: "0.05rem", // 0.8px
      },
      lineHeight: {
        none: 1, // 1
        "2xs": "1.5rem", // 24px
        xs: "1.75rem", // 28px
        sm: "1.875rem", // 30px
        base: "2rem", //32
        md: "2.5rem", // 40px
        lg: "3.5rem", // 56px
        xl: "3.75rem", // 60px
        "2xl": "4.5rem", // 72px
        "extra-loose": "1.85",
        "extra-relaxed": "1.75",
      },
      maxWidth: {
        form: "956px",
      },
      padding: {
        "4/3": "75%",
        "pimg-lg": "32.15%",
        "pimg-md": "56%",
        "pimg-sm": "60%",
        "pimg-xs": "90%",
        "cimg-xs": "78%",
        "21/9": "35%",
      },
      spacing: {
        input: "1.125rem",
        // 5: "1.875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
