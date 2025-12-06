import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundPosition: {
        'autoplay-help': '-265px -289px',
        'addto-button': '-451px -308px',
        'share-button': '-479px -295px',
        'more-button': '-287px -362px',
        'like-button': '-109px -143px',
        'deslike-button': '-275px -47px',
        'search': '-420px -459px',
        "youtube": "-68px -333px"
      }
    },
  },
  plugins: [],
}
export default config
