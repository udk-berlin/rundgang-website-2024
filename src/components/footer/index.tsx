'use client';
import { usePathname } from 'next/navigation';
import FooterItem from './footerItem';

const footerItems = [
  {
    href: '/contact',
    logo: '',
    title: 'Contact',
  },
  {
    href: '/imprint',
    logo: '',
    title: 'Imprint',
  },
  {
    href: '/design',
    logo: '',
    title: 'Design',
  },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-screen bg-primary">
      <div className="grid w-screen grid-cols-footer overflow-hidden">
        {footerItems.map((item) => (
          <FooterItem
            item={item}
            key={item.href}
            active={pathname == item.href}
          />
        ))}
      </div>
    </div>
  );
}
