import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '12px',
        'desktop-sm': '12px',
        md: '20px',
        'desktop-md': '20px',
        lg: '96px',
        'desktop-lg': '96px',
      },
      lineHeight: {
        sm: '12px',
        'desktop-sm': '12px',
        md: '20px',
        'desktop-md': '20px',
        lg: '96px',
        'desktop-lg': '96px',
      },
      spacing: {
        'header-height': '20px',
        'desktop-header-height': '20px',
        'min-content-height': 'calc(100vh - 20px)',
        'desktop-min-content-height': 'calc(100vh - 20px)',
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
