/* eslint @typescript-eslint/no-var-requires: "off" */
const plugin = require('tailwindcss/plugin')

function spacing() {
  const scale = Array(101)
    .fill(null)
    .map((_, i) => [i * 0.5, `${i * 0.5 * 8}px`])
  const values = Object.fromEntries(scale)
  values.px = '1px'
  values.xs = '2px'
  values.sm = '4px'
  return values
}

function opacity() {
  const scale = Array(21)
    .fill(null)
    .map((_, i) => [i * 5, Math.round(i * 0.05 * 100) / 100])
  const values = Object.fromEntries(scale)
  return values
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      px: '1px',
      xs: '2px',
      sm: '6px',
      DEFAULT: '8px',
      md: '10px',
      lg: '12px',
      xl: '20px',
      full: '9999px'
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      gray: {
        50: '#fafafa',
        100: '#ebebeb',
        200: '#dbdbdb',
        300: '#c1c1c1',
        400: '#a1a1a1',
        500: '#818181',
        600: '#616161',
        700: '#414141',
        800: '#2b2b2b',
        850: '#1a1a1a',
        900: '#111111'
      },
      red: {
        500: '#ea6b67'
      },
      orange: {
        500: '#ee8f3e'
      },
      blue: {
        500: '#4c90e7'
      }
    },
    fontFamily: {
      sans: [
        'Inter var',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ],
      mono: [
        'Roboto Mono',
        'ui-monospace',
        'SF-Regular',
        'SF Mono',
        'Menlo',
        'Consolas',
        'Liberation Mono',
        'monospace'
      ]
    },
    fontSize: {
      '4xs': [
        '8px',
        {
          letterSpacing: '0.192px',
          lineHeight: 'normal'
        }
      ],
      '3xs': [
        '10px',
        {
          letterSpacing: '0.100px',
          lineHeight: 'normal'
        }
      ],
      '2xs': [
        '12px',
        {
          letterSpacing: '0',
          lineHeight: 'normal'
        }
      ],
      xs: [
        '14px',
        {
          letterSpacing: '-0.08px',
          lineHeight: '1.5'
        }
      ],
      sm: [
        '16px',
        {
          letterSpacing: '-0.18px',
          lineHeight: '1.5'
        }
      ],
      base: [
        '18px',
        {
          letterSpacing: '-0.252px',
          lineHeight: 'normal'
        }
      ],
      lg: [
        '20px',
        {
          letterSpacing: '-0.34px',
          lineHeight: '1.5'
        }
      ],
      xl: [
        '24px',
        {
          letterSpacing: '-0.46px',
          lineHeight: 'normal'
        }
      ],
      '2xl': [
        '28px',
        {
          letterSpacing: '-0.588px',
          lineHeight: '1.3'
        }
      ],
      '3xl': [
        '32px',
        {
          letterSpacing: '-0.704px',
          lineHeight: 'normal'
        }
      ],
      '4xl': [
        '42px',
        {
          letterSpacing: '-0.924px',
          lineHeight: 'normal'
        }
      ],
      '5xl': [
        '56px',
        {
          letterSpacing: '-1.232px',
          lineHeight: 'normal'
        }
      ]
    },
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)'
      },
      opacity: opacity(),
      spacing: spacing(),
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        light: 'var(--text-light)',
        dark: 'var(--text-dark)',
        red: 'var(--text-red)',
        orange: 'var(--text-orange)',
        blue: 'var(--text-blue)'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant }) {
      addVariant('supports-bg-blur', '@supports (backdrop-filter: blur())')
    })
  ]
}
