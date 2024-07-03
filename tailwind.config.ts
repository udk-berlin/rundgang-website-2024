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
      grey: '#888888ff',
      black: '#000000ff',
      white: '#ffffffff',
    },
    fontSize: {
      xl: [
        '70px',
        {
          letterSpacing: '1',
          lineHeight: '1',
        },
      ],
      l: [
        '45px',
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
        tag: 'var(--height-tag)',
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
        tag: 'var(--height-tag)',
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
        tag: 'var(--height-tag)',
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
        xs: '1px',
        sm: '2px',
        md: '4px',
        border: '2px',
      },
      spacing: {
        xs: '1px',
        'gutter-xxs': '5px',
        'gutter-xs': '8px',
        'gutter-sm': '12px',
        'gutter-md': '20px',
        'gutter-m': '30px',
        'gutter-l': '40px',
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
        'landing-writing-info': '2fr 1fr',
      },
      fontFamily: {
        jungka: ['var(--font-jungka)', 'var(--font-noto)', 'sans-serif'],
        noto: ['var(--font-noto)', 'sans-serif'],
      },
      animation: {
        bounceLeft: `bounceLeft 1s infinite`,
        bounceRight: `bounceRight 1s infinite`,
        showModal: `showModal 800ms linear normal`,
        hideModal: `hideModal 800ms linear normal`,
        showMenu: `showMenu 800ms ease normal`,
        closeMenu: `closeMenu 800ms ease normal`,
        openDetail: `openDetail 800ms ease normal`,
        closeDetail: `closeDetail 500ms ease-out normal`,
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
        showModal: {
          from: {
            transform: 'translateY(200%)',
            borderTop: '2px solid white',
          },
          to: {
            transform: 'translateY(0%)',
            borderTop: '0px solid white',
          },
        },
        hideModal: {
          from: {
            transform: 'translateY(0%)',
            borderTop: '2px solid white',
          },
          to: {
            transform: 'translateY(200%)',
            borderTop: '0px solid white',
          },
        },
        showMenu: {
          '0%': {
            transform: 'translateY(-200%) scaleX(33%)',
            borderWidth: '0px 6px',
            color: 'var(--secondary)',
          },
          '60%': {
            transform: 'translateY(0%) scaleX(33%)',
            borderWidth: '0px 6px',
            color: 'var(--secondary)',
          },
          '100%': {
            transform: 'translateX(0%) scaleX(100%)',
            borderWidth: '0px 2px',
            color: 'var(--primary)',
          },
        },
        closeMenu: {
          '0%': {
            transform: 'translateX(0%) scaleX(100%)',
            borderWidth: '0px 2px',
          },
          '40%': {
            transform: 'translateY(0%) scaleX(33%)',
            borderWidth: '0px 6px',
          },
          '100%': {
            transform: 'translateY(-200%) scaleX(33%)',
            borderWidth: '0px 6px',
          },
        },
        openDetail: {
          from: {
            maxHeight: 'var(--height-header)',
            overflow: 'hidden',
          },
          to: {
            maxHeight: '500px',
          },
        },
        closeDetail: {
          from: {
            maxHeight: '500px',
            minHeight: '120px',
            height: '100%',
          },
          to: {
            minHeight: 'var(--height-header)',
            maxHeight: 'var(--height-header)',
            height: 'var(--height-header)',
            overflow: 'hidden',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
