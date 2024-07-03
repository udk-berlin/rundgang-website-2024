import { Link } from '@/navigation';
import TagPlain from '@/components/tag/plain.server';

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
      <TagPlain
        className={
          isSelected
            ? '!bg-highlight text-black'
            : 'hover:bg-highlight hover:text-black'
        }
        prefix={prefix}
        title={sublocation.name}
        withBorder
      />
    </Link>
  );
}
