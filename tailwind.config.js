/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Hanken Grotesk"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg':        ['72px',  { lineHeight: '80px',  letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-lg-mobile': ['40px',  { lineHeight: '48px',  letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md':       ['32px',  { lineHeight: '40px',  letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg':           ['18px',  { lineHeight: '32px',  letterSpacing: '0.01em',  fontWeight: '400' }],
        'body-md':           ['16px',  { lineHeight: '24px',  letterSpacing: '0.01em',  fontWeight: '400' }],
        'label-sm':          ['12px',  { lineHeight: '16px',  letterSpacing: '0.1em',   fontWeight: '600' }],
      },
      spacing: {
        'section-gap':    '160px',
        'gutter':         '32px',
        'margin-desktop': '80px',
        'margin-mobile':  '24px',
        'unit':           '8px',
      },
      maxWidth: {
        'container-max': '1200px',
      },
    },
  },
  plugins: [],
}
