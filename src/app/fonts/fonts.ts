import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const noto = Noto_Sans({
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'devanagari',
    'greek',
    'greek-ext',
    'latin',
    'latin-ext',
    'vietnamese',
  ],
  variable: '--font-noto',
});

const jungka = localFont({
  src: [
    {
      path: './jl-jungka/JLJungkaTrial-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './jl-jungka/JLJungkaTrial-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './jl-jungka/JLJungkaTrial-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './jl-jungka/JLJungkaTrial-BoldItalic.woff2',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: './jl-jungka/JLJungkaTrial-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './jl-jungka/JLJungkaTrial-MediumItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  display: 'swap',
  fallback: ['Noto_Sans', 'system-ui'],
  variable: '--font-jungka',
});

export { jungka, noto };
