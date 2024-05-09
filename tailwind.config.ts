import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/constants.ts',
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
    extend: {
      height: {
        sm: '35px',
        'desktop-sm': '35px',
        md: '50px',
        'desktop-md': '50px',
      },
      borderRadius: {
        md: '2px',
        'desktop-md': '2px',
      },
      spacing: {
        'gutter-xxs': '4px',
        'gutter-xs': '8px',
        'gutter-sm': '12px',
        'gutter-md': '20px',
        'gutter-lg': '50px',
        border: '2px',
      },
      gridTemplateColumns: {
        footer: 'repeat(3,minmax(200px, 1fr))',
        header: 'repeat(5,minmax(200px, 1fr))',
        headerinfo: 'minmax(100px, 1fr) 40px 40px 40px',
      },
    },
  },
  plugins: [],
};
export default config;
