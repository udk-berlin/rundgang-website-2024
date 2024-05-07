import RundgangLogo from './rundgangLogo';
import Link from 'next/link';
import cx from 'classnames';

export type NavigationItemProps = {
  item: any;
  active: boolean;
};

export default function NavigationItem({ item, active }: NavigationItemProps) {
  return (
    <Link
      className={cx(
        'border border-primary bg-primarybg hover:bg-secondary hover:text-black',
        active ? 'rounded-t-md border-b-0' : 'rounded-md',
      )}
      href={item.href}
      key={item.href}
    >
      <div className="h-9 content-around text-center">
        {item.title != '' ? item.title : <RundgangLogo logo={item.logo} />}
      </div>
    </Link>
  );
}
