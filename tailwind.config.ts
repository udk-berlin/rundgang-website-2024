import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    screens: {
      xl: { min: '1921px' },
      lg: { max: '1920px' },
      md: { max: '1440px' },
      sm: { max: '1200px' },
      xs: { max: '600px' },
    },
    colors: {
      initial: '#000',
      primary: 'rgb(var(--foreground-rgb))',
      primarybg: 'rgb(var(--background-rgb))',
      secondary: '#00ffa1',
      grey: '#888888',
      black: '#000',
      white: '#fff',
    },
    fontSize: {
      xl: [
        '2.7rem',
        {
          letterSpacing: '-0.05em',
          lineHeight: '0.9em',
        },
      ],
      lg: [
        '2.7rem',
        {
          letterSpacing: '-0.05em',
          lineHeight: '1',
        },
      ],
      md: [
        '1.45rem',
        {
          letterSpacing: '-0.025em',
          lineHeight: '1.3',
        },
      ],
      sm: [
        '1.15rem',
        {
          letterSpacing: '-0.015em',
          lineHeight: '1.12',
        },
      ],
      xs: [
        'max(13px, 0.95rem)',
        {
          letterSpacing: '-0.01em',
          lineHeight: '1.1',
        },
      ],
    },
    fontFamily: {
      sans: ['var(--font-jungka)'],
    },
    extend: {
      spacing: {
        '5xl': '48rem',
        '6xl': '64rem',
        '7xl': '72rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      gridTemplateColumns: {
        footer: 'repeat(3,minmax(200px, 1fr))',
        header: 'repeat(5,minmax(200px, 1fr)) 40px 40px',
      },
    },
  },
  plugins: [],
};
export default config;
