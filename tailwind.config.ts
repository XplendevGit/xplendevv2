import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        unicaone: ['Unica One','sans-serif'],
        audiowide: ['Audiowide','sans-serif'],
        mojormono: ['Major Mono Display','monospace'],
        hammersmithOne: ['Hammersmith One','monospace'],
        philosopher: ['Philosopher','sans-serif'],
        oreglega: ['EB Garamond', 'serif'],
        tangerine: ['Tangerine', 'cursive'],
        cinzeldecorative: ['Cinzel Decorative', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        abel: ['Abel','sans-serif'],
        oswald: ['Oswald','sans-serif'],
        darkergrotesque: ['Darker Grotesque','sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
