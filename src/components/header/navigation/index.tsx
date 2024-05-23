'use client';
import NavigationDesktop from './navigationDesktop';
import NavigationMobile from './navigationMobile';

export default function Navigation() {
  return (
    <div className="">
      <NavigationDesktop />
      <NavigationMobile />
    </div>
  );
}
