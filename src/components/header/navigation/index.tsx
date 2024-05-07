import NavigationDesktop from './navigationDesktop';
import NavigationMobile from './navigationMobile';

export default function Navigation() {
  return (
    <nav className="">
      <NavigationDesktop />
      <NavigationMobile />
    </nav>
  );
}
