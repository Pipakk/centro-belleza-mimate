import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcfb',
          100: '#f9f7f4',
          200: '#f2ede8',
          300: '#e8e0d8',
        },
        rose: {
          50: '#fdf6f5',
          100: '#f9ebe8',
          200: '#f2d9d4',
          300: '#e8bfb8',
          400: '#d49a90',
          500: '#c17d72',
        },
        sand: {
          100: '#f5f0eb',
          200: '#e8dfd6',
          300: '#d4c4b8',
        },
        gold: {
          100: '#f7f2e8',
          200: '#e8dcc8',
          300: '#d4c4a8',
        },
        charcoal: '#2d2926',
        ink: '#1a1816',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(0,0,0,0.06)',
        card: '0 4px 20px rgba(0,0,0,0.06)',
        float: '0 8px 30px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
