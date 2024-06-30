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
        '70px',
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
      m: [
        '18px',
        {
          letterSpacing: '1',
          lineHeight: '1.5',
        },
      ],
      sm: [
        '16px',
        {
          letterSpacing: '1',
          lineHeight: '1.4',
          fontWeight: '400',
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
      minHeight: {
        header: 'var(--height-header)',
        'content-header': 'var(--height-content-header)',
        content: 'var(--height-content)',
        'content-height': 'var(--height-content-height)',
        'content-body': 'var(--height-content-body)',
        footer: 'var(--height-footer)',
        place: 'calc(50dvh - var(--height-header) - var(--height-footer))',
      },
      height: {
        sm: '35px',
        md: '50px',
        header: 'var(--height-header)',
        content: 'var(--height-content)',
        modal: 'var(--height-modal)',
        'content-header': 'var(--height-content-header)',
        'content-body': 'var(--height-content-body)',
        footer: 'var(--height-footer)',
        gridcell: 'var(--height-gridcell)',
        timeline:
          'calc(100dvh - var(--height-header) - var(--height-footer) - 2 * var(--height-gridcell))',
      },
      maxHeight: {
        header: 'var(--height-header)',
        'content-header': 'var(--height-content-header)',
        content: 'var(--height-content)',
        'content-height': 'var(--height-content-height)',
        'content-body': 'var(--height-content-body)',
        footer: 'var(--height-footer)',
      },
      width: {
        header: 'var(--height-header)',
        'content-header': 'var(--height-content-header)',
        content: 'var(--height-content)',
        'content-height': 'var(--height-content-height)',
        'content-body': 'var(--height-content-body)',
        footer: 'var(--height-footer)',
        timeline: '6000px',
      },
      top: {
        header: 'var(--height-header)',
        'content-header': 'var(--height-content-header)',
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
        'gutter-m': '30px',
        'gutter-lg': '50px',
        border: '2px',
        header: 'var(--height-header)',
        'content-header': 'var(--height-content-header)',
        content: 'var(--height-content)',
        'content-height': 'var(--height-content-height)',
        'content-body': 'var(--height-content-body)',
        footer: 'var(--height-footer)',
      },
      inset: {
        border: '2px',
        header: 'var(--height-header)',
        'content-header': 'var(--height-content-header)',
        footer: 'var(--height-footer)',
      },
      gridTemplateColumns: {
        'header-info': 'minmax(100px, 1fr) 50px 50px 50px',
      },
      fontFamily: {
        jungka: ['var(--font-jungka)', 'var(--font-noto)', 'sans-serif'],
        noto: ['var(--font-noto)', 'sans-serif'],
      },
      animation: {
        bounceLeft: `bounceLeft 1s infinite`,
        bounceRight: `bounceRight 1s infinite`,
        height: `max-height 0.25s ease-in`,
      },
      keyframes: {
        bounceLeft: {
          '0%': {
            transform: 'translateX(10%) rotate(180deg)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'rotate(180deg)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
          '100%': {
            transform: 'translateX(10%) rotate(180deg)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
        },
        bounceRight: {
          '0%': {
            transform: 'translateX(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
          '100%': {
            transform: 'translateX(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
