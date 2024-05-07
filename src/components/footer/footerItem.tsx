import Link from 'next/link';
import cx from 'classnames';

export type FooterItemProps = {
  item: any;
  active: boolean;
};

export default function FooterItem({ item, active }: FooterItemProps) {
  return (
    <Link
      className={cx(
        'border border-primary bg-primarybg hover:bg-secondary hover:text-black',
        active ? 'rounded-b-md border-t-0' : 'rounded-md',
      )}
      href={item.href}
      key={item.href}
    >
      <div className="h-9 content-around text-center">{item.title}</div>
    </Link>
  );
}
