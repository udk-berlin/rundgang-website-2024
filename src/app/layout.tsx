import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';

import './globals.css';

const noto = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rundgang 2024',
  description: 'Rundgang 2024',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <div>header</div>

        <Link href="/locations">Locations</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/program">Program</Link>
        {children}
      </body>
    </html>
  );
}
