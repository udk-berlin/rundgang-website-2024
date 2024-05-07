import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import './styles/app.css';
import './styles/tailwind.css';
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
        <div className="h-header-height max-header-height min-header-height desktop:h-desktop-header-height desktop:max-desktop-header-height desktop:min-desktop-header-height flex items-center justify-center gap-2">
          <Link href="/locations">Locations</Link>
          <Link href="/timeline">Timeline</Link>
          <Link href="/program">Program</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
