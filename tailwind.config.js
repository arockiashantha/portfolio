const v = (n) => `rgb(var(--${n}) / <alpha-value>)`
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bg: v('bg'), surface: v('surface'), fg: v('fg'), muted: v('muted'), accent: v('accent'), accent2: v('accent2') },
      fontFamily: { display: ['Sora', 'sans-serif'], sans: ['"DM Sans"', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
