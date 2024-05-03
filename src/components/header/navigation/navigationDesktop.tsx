import { usePathname } from 'next/navigation';
import { ColorSchemePreference } from './colorSchemePreference';
import NavigationItem from './navigationItem';
import SavedItems from './savedItems';

const menuItems = [
  {
    href: '/',
    logo: '/media/rng.png',
    title: '',
  },
  {
    href: '/program',
    logo: '',
    title: 'Program',
  },
  {
    href: '/locations',
    logo: '',
    title: 'Locations',
  },
  {
    href: '/timeline',
    logo: '',
    title: 'Timeline',
  },
  {
    href: '/info',
    logo: '',
    title: 'Info',
  },
];

export default function NavigationDesktop() {
  const pathname = usePathname();
  return (
    <div className="grid-cols-header grid w-screen overflow-hidden md:hidden">
      {menuItems.map((item) => (
        <NavigationItem
          key={item.href}
          item={item}
          active={pathname == item.href}
        />
      ))}
      <SavedItems />
      <ColorSchemePreference />
    </div>
  );
}
