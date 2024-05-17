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
      xl: '1921px',
      lg: '1920px',
      md: '1200px',
      sm: '1000px',
      xs: '600px',
    },
    colors: {
      initial: '#000',
      primary: 'rgb(var(--primary))',
      secondary: 'rgb(var(--secondary))',
      highlight: '#00ffa1',
      grey: '#888888',
      black: '#000',
      white: '#fff',
    },
    fontSize: {
      xl: [
        '96px',
        {
          letterSpacing: '1',
          lineHeight: '1',
        },
      ],
      lg: [
        '30px',
        {
          letterSpacing: '1',
          lineHeight: '1',
        },
      ],
      md: [
        '24px',
        {
          letterSpacing: '1',
          lineHeight: '1',
        },
      ],
      sm: [
        '18px',
        {
          letterSpacing: '1',
          lineHeight: '1',
        },
      ],
      xs: [
        '14px',
        {
          letterSpacing: '1',
          lineHeight: '1',
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
        md: '4px',
        'desktop-md': '4px',
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
        headerinfo: 'minmax(100px, 1fr) 50px 50px 50px',
      },
      fontFamily: {
        jungka: ['var(--font-jungka)', 'var(--font-noto)', 'sans-serif'],
        noto: ['var(--font-noto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
