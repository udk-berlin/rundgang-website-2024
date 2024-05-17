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
        className="p-gutter-xs md:hover:bg-highlight rounded-md bg-white"
        textSize="sm"
      >
        {value.en}
      </ResponsiveDiv>
    </Link>
  );
}
