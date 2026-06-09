import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mist-black': '#0A0A0A',
        'mountain-cream': '#F5E8D3',
        'kimono-white': '#FAFAFA',
        'lime-accent': '#D4F87A',
        'sakura-pink': '#FFB7C5',
        'mouse-gray': '#888888',
        'glass-border': 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        display: ['Bebas Neue', 'Anton', 'Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        editorial: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.18em',
      },
      backdropBlur: {
        'xl': '24px',
        '2xl': '40px',
      },
    },
  },
  plugins: [],
}
export default config
