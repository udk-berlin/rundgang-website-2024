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
      path: './JLJungkaTrial/JLJungkaTrial-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './JLJungkaTrial/JLJungkaTrial-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './JLJungkaTrial/JLJungkaTrial-Bold.otf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './JLJungkaTrial/JLJungkaTrial-BoldItalic.otf',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: './JLJungkaTrial/JLJungkaTrial-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './JLJungkaTrial/JLJungkaTrial-MediumItalic.otf',
      weight: '600',
      style: 'italic',
    },
  ],
  display: 'swap',
  fallback: ['Noto_Sans', 'system-ui'],
  variable: '--font-jungka',
});

export { jungka, noto };
