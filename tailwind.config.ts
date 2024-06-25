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
        '16px',
        {
          letterSpacing: '1',
          lineHeight: '1',
          fontWeight: '500',
        },
      ],
      xs: [
        '14px',
        {
          letterSpacing: '1',
          lineHeight: '1.2',
          fontWeight: '400',
        },
      ],
      xxs: [
        '12px',
        {
          letterSpacing: '1',
          lineHeight: '1',
          fontWeight: '400',
        },
      ],
      xxxs: [
        '10px',
        {
          letterSpacing: '1',
          lineHeight: '1',
          fontWeight: '400',
        },
      ],
    },
    extend: {
      height: {
        sm: '35px',
        md: '50px',
        header: 'var(--height-header)',
        'content-header': 'var(--height-content-header)',
        content: 'calc(100dvh - var(--height-header) - var(--height-footer))',
        footer: 'var(--height-footer)',
        'design-projects':
          'calc(100dvh - var(--height-header) - var(--height-footer) - var(--height-content-header))',
      },
      borderRadius: {
        md: '4px',
        border: '4px',
      },
      borderWidth: {
        sm: '2px',
        md: '4px',
        border: '2px',
      },
      spacing: {
        'gutter-xxs': '5px',
        'gutter-xs': '8px',
        'gutter-sm': '12px',
        'gutter-md': '20px',
        'gutter-lg': '50px',
        border: '2px',
      },
      gridTemplateColumns: {
        'header-info': 'minmax(100px, 1fr) 50px 50px 50px',
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
