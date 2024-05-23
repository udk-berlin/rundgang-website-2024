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
      path: './JLJungkaBBIM/JLJungka-Book.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './JLJungkaBBIM/JLJungka-BookItalic.woff2',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: './JLJungkaBBIM/JLJungka-Medium.woff2',
      weight: 'bold',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['Noto_Sans', 'system-ui'],
  variable: '--font-jungka',
});

export { jungka, noto };
