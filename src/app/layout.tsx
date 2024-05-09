import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import '@/styles/app.css';
import '@/styles/tailwind.css';
import '/node_modules/modern-normalize/modern-normalize.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rundgang 2024',
  description: 'Rundgang 2024',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-md max-h-md min-h-md items-center justify-center desktop:h-desktop-md desktop:max-h-desktop-md desktop:min-h-desktop-md">
          <Link href="/locations">Locations</Link>
          <Link href="/timeline">Timeline</Link>
          <Link href="/program">Program</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
