import { ResponsiveDiv } from '@/components/html/div';
import { LocalizesObject } from '@/types/types';
import Link from 'next/link';

export type LandingFiltersGroupValueProps = {
  value: LocalizesObject<string>;
};

export default function LandingFiltersGroupValue({
  value,
}: LandingFiltersGroupValueProps) {
  return (
    <Link href="/">
      <ResponsiveDiv className="p-gutter-xs desktop:p-desktop-gutter-xs rounded-md bg-white desktop:hover:bg-highlight">
        {value.en}
      </ResponsiveDiv>
    </Link>
  );
}
