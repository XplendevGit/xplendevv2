import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    safelist: [
    'text-[#32DC7E]',
    'border-[#32DC7E]',
    'hover:border-[#32DC7E]',
    'text-[#00D4FF]',
    'border-[#00D4FF]',
    'hover:border-[#00D4FF]',
    'text-[#FF6F00]',
    'border-[#FF6F00]',
    'hover:border-[#FF6F00]',
    'text-[#D43EFF]',
    'border-[#D43EFF]',
    'hover:border-[#D43EFF]',
    'text-[#C6FF00]',
    'border-[#C6FF00]',
    'hover:border-[#C6FF00]'
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
        roboto: ['Roboto','sans-serif'],
        notoserif: ['Noto Serif JP', 'serif'],
        economica: ['Economica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
