import cx from 'classnames';
import { Link } from '@/navigation';

export type SubLocationTagProps = {
  sublocation: { name: string; id: string };
  prefix: string;
  isSelected?: boolean;
};

export default function SubLocationTag({
  sublocation,
  prefix,
  isSelected,
}: SubLocationTagProps) {
  return (
    <Link
      href={{
        pathname: '/locations/[place]',
        params: { place: sublocation.id },
      }}
      className="cursor-pointer pl-1 pt-1"
      scroll={false}
    >
      <div
        className={cx(
          'relative w-fit rounded-md border-white px-[13px] py-[8px]  text-xxs ring-2 ring-primary',
          isSelected
            ? 'bg-highlight text-black'
            : 'bg-secondary text-primary hover:bg-highlight hover:text-black',
        )}
      >
        {prefix} {sublocation.name}
      </div>
    </Link>
  );
}
