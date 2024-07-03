import { unstable_setRequestLocale } from 'next-intl/server';
import LandingDesktop, {
  LandingProps,
} from '@/app/(landing)/components/desktop/landing.server';
import LandingMobile from '@/app/(landing)/components/mobile/landing.server';

export type LandingPageProps = {
  params: { locale: string };
  searchParams?: LandingProps['searchParams'];
};

export default function LandingPage({
  params: { locale },
  searchParams,
}: LandingPageProps) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <LandingDesktop searchParams={searchParams} />
      <LandingMobile searchParams={searchParams} />
    </>
  );
}
