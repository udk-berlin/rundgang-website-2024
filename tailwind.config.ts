import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/constants.ts',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '12px',
        'desktop-sm': '12px',
        md: '16px',
        'desktop-md': '16px',
        lg: '24px',
        'desktop-lg': '24px',
        xl: '96px',
        'desktop-xl': '96px',
      },
      lineHeight: {
        sm: '16px',
        'desktop-sm': '16px',
        md: '16px',
        'desktop-md': '16px',
        lg: '24px',
        'desktop-lg': '24px',
        xl: '96px',
        'desktop-xl': '96px',
      },
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
        'gutter-xxs': '8px',
        'desktop-gutter-xxs': '8px',
        'gutter-xs': '12px',
        'desktop-gutter-xs': '12px',
        'gutter-sm': '20px',
        'desktop-gutter-sm': '20px',
        'gutter-md': '50px',
        'desktop-gutter-md': '50px',
        border: '2px',
      },
    },
    colors: {
      black: '#000',
      white: '#FFF',
      grey: '#858585',
      highlight: '#00FDA0FF',
    },
    screens: {
      desktop: '991px',
    },
  },
  plugins: [],
};
export default config;
