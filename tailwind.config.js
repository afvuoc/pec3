module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundColor: theme => ({
      'black': 'rgb(0, 0, 0)',
      'white': 'rgb(255, 255, 255)',
      'hr': '#414040',
      'nav': 'hsla(0,0%,100%,.22)',
      'logo': '#999999',
      'hover-card': 'rgba(0, 0, 0, .87)',
      'social-media': '#00000094',
    }),
    screens: {
      'lg': { 'max': '1100px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '567px' },
    },

    fontFamily: {
      'sans': ['Lato', 'Arial', 'sans-serif'],
      'serif': ['"Holtwood One SC"', 'ui-serif', 'Georgia'],
    },

    backgroundImage: {
      'card-image-flex-a': "url('/src/assets/images/atarashii-gakko-member-info-1.jpg')",
      'card-image-flex-b': "url('/src/assets/images/atarashii-gakko-member-info-2.jpg')",
      'card-image-flex-c': "url('/src/assets/images/atarashii-gakko-member-info-3.jpg')",
      'card-image-flex-d': "url('/src/assets/images/atarashii-gakko-member-info-4.jpg')",
      'card-image-flex-e': "url('/src/assets/images/atarashii-gakko-member-info-5.jpg')",
      'card-image-flex-f': "url('/src/assets/images/atarashii-gakko-member-info-6.jpg')",
      'card-image-flex-g': "url('/src/assets/images/atarashii-gakko-member-info-7.jpg')",
      'card-image-flex-h': "url('/src/assets/images/atarashii-gakko-member-info-8.jpg')",
    },
    fontSize: {
      'xxs': '0.88rem',
      'xs': '0.95rem',
      'base': '1rem',
      'sm': '1.05rem',
      'md': '1.1rem',
      'lg': '1.3rem',
      '1xl': '1.4rem',
      '2xl': '1.6rem',
      '3xl': '2rem',
      '4xl': '4rem',
    },

    extend: {
      rotate: {
        '-30': '-30deg',
      },
      listStyleType: {
        circle: 'circle',
      },
      textColor: {
        'corporate-color-blue': '#6ad0ff',
      },
      scale: {
        '102': '1.02',
      },
      keyframes: {
        movelogo: {
          '0%': {
            top: '18vh'
          },
          '100%': {
            top: '34vh'
          },
        },
        movevynil: {
          '0%': {
            top: '-10vh'
          },
          '100%': {
            top: '32vh'
          },
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite 1.5s',
        movelogo: 'movelogo 1.5s ease',
        movevynil: 'movevynil 1.5s ease',
      },
      width: {
        '21': '5.25rem',
        '6/2': '300%',
        '30vh': '30vh',
        '38vh': '38vh',
        '40vh': '40vh',
        '46vh': '46vh',
        '50vh': '50vh',
        '96vw': '96vw',
      },
      inset: {
        '-4/2': '-200%',
        '13vh': '13vh',
        '14vh': '14vh',
        '20vh': '20vh',
        '21vh': '21vh',
        '32vh': '32vh',
        '34vh': '34vh',
      },
      height: {
        '0.75': '0.2rem',
        '50vh': '50vh',
        '70vh': '70vh',
        '80vh': '80vh',
      },
      transitionDuration: {
        '0': '0ms',
      }
    },
  },
  plugins: [],
  purge: ["./src/*/.html", "./src/*/.js"],
}
