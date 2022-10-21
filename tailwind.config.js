module.exports = {
    content: ["./src/**/*.{html,js,ts,vue}"],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#fff',
            black: '#000',
            primary: {
                100: 'hsl(202, 100%, 86%)',
                DEFAULT: 'hsl(202, 53%, 37%)'
            },
            secondary: {},
            accent: {
                red: {
                    DEFAULT: 'hsl(4, 82%, 86%)'
                },
                green: {
                    100: 'hsl(93, 80%, 90%)',
                    DEFAULT: 'hsl(93, 53%, 71%)'
                }
            },
            gray: {
                100: 'hsl(198, 1%, 78%)',
                DEFAULT: 'hsl(191, 6%, 43%)'
            },
        },
        fontFamily: {
            dmsans: ["'DM Sans'", 'tahoma', 'sans-serif'],
            // dmserif: ["'DM Serif Display'", 'tahoma', 'sans-serif']
        },
      extend: {},
    },
    plugins: [],
  }