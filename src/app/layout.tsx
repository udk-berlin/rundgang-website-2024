import type { Metadata } from 'next';
import Link from 'next/link';
import { noto, jungka } from './fonts/fonts';
import './globals.css';
import Header from '@/components/header';

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
      <body
        className={`${jungka.variable} ${noto.variable} ${jungka.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
