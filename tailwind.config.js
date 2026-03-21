/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        border: 'rgb(var(--color-border) / var(--border-opacity))',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        paper: 'rgb(var(--color-bg) / <alpha-value>)',
        ink: 'rgb(var(--color-fg) / <alpha-value>)',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
        mono: 'var(--font-mono)',
      }
    },
  },
  plugins: [],
}
