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
      <ResponsiveDiv
        className="rounded-[2px] bg-white p-[10px] desktop:hover:bg-highlight"
        textSize="sm"
      >
        {value.en}
      </ResponsiveDiv>
    </Link>
  );
}
