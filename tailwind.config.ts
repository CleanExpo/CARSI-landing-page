import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'carsi-blue': '#2B8FD8',
        'carsi-blue-light': '#4AA3E3',
        'carsi-blue-dark': '#1E6FB8',
        'carsi-orange': '#F39C12',
        'carsi-gold': '#E67E22',
        'charcoal': '#444444',
        'charcoal-light': '#666666',
        'silver': '#C0C0C0',
        'silver-light': '#D3D3D3',
      },
      screens: {
        'xs': '475px',
      },
      boxShadow: {
        '3d': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 -2px 0 rgba(0, 0, 0, 0.1)',
        '3d-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 -3px 0 rgba(0, 0, 0, 0.1)',
        'inner-3d': 'inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
