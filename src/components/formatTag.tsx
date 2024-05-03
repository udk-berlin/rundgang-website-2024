import Link from 'next/link';
import { Item } from '@/types/types';

export type FormatTagProps = {
  format: Item;
};

export default function FormatTag({ format }: FormatTagProps) {
  return (
    <Link
      href={{
        pathname: '/program',
        query: {
          format: format?.id,
        },
      }}
    >
      <div className="w-fit rounded-md border border-black bg-secondary px-1 text-black hover:bg-black hover:text-white">
        {format.name}
      </div>
    </Link>
  );
}
