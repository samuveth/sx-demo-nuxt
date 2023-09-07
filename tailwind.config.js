/** @type {import('tailwindcss').Config} */

import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      // IMPORTANT: Color variables that require opacity modifiers must be defined
      // without space function and opacity value. They can be recognized by the
      // <alpha-value> placeholder. See: https://tailwindcss.com/docs/customizing-colors#using-css-variables
      transparent: 'transparent',

      // backgrounds
      'bg-color': 'rgba(var(--bg), <alpha-value>)',
      'block-bg-color': 'rgba(var(--block-bg), <alpha-value>)',
      'input-bg-color': 'rgba(var(--input-bg), <alpha-value>)',
      'hover-bg-color': 'rgba(var(--hover-bg), <alpha-value>)',
      'active-bg-color': 'rgba(var(--active-bg), <alpha-value>)',
      'border-color': 'rgba(var(--border), <alpha-value>)',

      // main
      'heading-color': 'rgba(var(--heading), <alpha-value>)',
      'link-color': 'rgba(var(--link), <alpha-value>)',
      'text-color': 'rgba(var(--text), <alpha-value>)',

      'content-color': 'var(--content)',

      // accents
      'primary-color': 'rgba(var(--primary), <alpha-value>)',
      'accent-foreground-color':
        'rgba(var(--accent-foreground), <alpha-value>)',
      'danger-color': 'rgba(var(--danger), <alpha-value>)',
      'positive-color': 'rgba(var(--positive), <alpha-value>)',

      'accent-hover-color': 'var(--accent-hover)',
      'accent-active-color': 'var(--accent-active)',
      'danger-border-color': 'var(--danger-border)',
      'danger-hover-color': 'var(--danger-hover)',
      'danger-active-color': 'var(--danger-active)',
      'positive-border-color': 'var(--positive-border)',
      'positive-hover-color': 'var(--positive-hover)',
      'positive-active-color': 'var(--positive-active)'
    },
    fontSize: {
      heading: ['34px', '36px'],
      large: ['28px', '32px'],
      title: ['22px', '24px'],
      highlight: ['20px', '20px'],
      body: ['18px', '18px'],
      sm: ['16px', '16px'],
      xs: ['14px', '14px']
    },
    fontFamily: {
      serif: ['"Calibre", Helvetica, Arial, sans-serif']
    },
    fontWeight: {
      medium: 500,
      semibold: 600
    }
  },
  plugins: [tailwindTypography, tailwindForms]
}
