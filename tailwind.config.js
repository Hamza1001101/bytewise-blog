// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.gray,
        gray: colors.gray,
        paleSand: '#ebdbb2',
        'dark-bg': '#282828',
        'dark-heading': '#b3b3b3'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'p,li': {
              fontSize: '18px',
            },
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              //code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.fuchsia.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.paleSand'),
             // code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.paleSand'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.50'), 
            'h1, h2,h3,h4': {
              color: theme('colors.paleSand')
            }
          }
        }
      }),
    },
  },
  variants : {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
