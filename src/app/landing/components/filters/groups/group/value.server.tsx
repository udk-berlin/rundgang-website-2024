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
      <ResponsiveDiv className="desktop:hover:bg-highlight rounded-[2px] bg-white px-[10px] py-[3px]">
        {value.en}
      </ResponsiveDiv>
    </Link>
  );
}
