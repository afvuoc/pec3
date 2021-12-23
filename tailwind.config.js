module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundColor: theme => theme('colors'),
    backgroundColor: {
      'black': 'rgb(0, 0, 0)',
      'black-a-6': 'rgba(0, 0, 0, .6)',
      'black-a-75': 'rgba(0, 0, 0, .75)',
      'black-a-9': 'rgba(0, 0, 0, .9)',
      'white': 'rgb(255,255,255)',
      'white-a-2': 'rgba(255, 255, 255, .2)',
      'gray-100': 'rgb(153,153,153)',
      'gray-200': 'rgb(64,64,64)',
    },
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
      'card-image-a': "url('/src/assets/images/atarashii-gakko-member-info-1.jpg')",
      'card-image-b': "url('/src/assets/images/atarashii-gakko-member-info-2.jpg')",
      'card-image-c': "url('/src/assets/images/atarashii-gakko-member-info-3.jpg')",
      'card-image-d': "url('/src/assets/images/atarashii-gakko-member-info-4.jpg')",
      'card-image-e': "url('/src/assets/images/atarashii-gakko-member-info-5.jpg')",
      'card-image-f': "url('/src/assets/images/atarashii-gakko-member-info-6.jpg')",
      'card-image-g': "url('/src/assets/images/atarashii-gakko-member-info-7.jpg')",
      'card-image-h': "url('/src/assets/images/atarashii-gakko-member-info-8.jpg')",
      'index-image': "url('/src/assets/images/atarashii-gakko-background.jpg')", 
    },
    fontSize: {
      '2xs': '0.88rem',
      'sm': '0.95rem',
      'md': '1rem',
      'lg': '1.05rem',
      'xl': '1.1rem',
      '2xl': '1.3rem',
      '3xl': '1.4rem',
      '4xl': '1.6rem',
      '5xl': '2rem',
      '6xl': '4rem',
    },
    extend: {
      rotate: {
        '-30': '-30deg',
      },
      listStyleType: {
        circle: 'circle',
      },
      textColor: {
        'blue': 'rgb(133,206,250)',
      },
      scale: {
        '102': '1.02',
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
      height: {
        '50vh': '50vh',
        '70vh': '70vh',
        '80vh': '80vh',
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
      transitionDuration: {
        '0': '0ms',
      },
      keyframes: {
        movelogo: {
          '0%': { top: '18vh' },
          '100%': { top: '34vh' },
        },
        movevynil: {
          '0%': { top: '-10vh' },
          '100%': { top: '32vh' },
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite 1.5s',
        movelogo: 'movelogo 1.5s ease',
        movevynil: 'movevynil 1.5s ease',
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.html", "./src/**/*.js"]
}