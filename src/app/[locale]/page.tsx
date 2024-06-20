import { unstable_setRequestLocale } from 'next-intl/server';
import Landing, { LandingProps } from './(landing)/components/landing.server';

export type LandingPageProps = {
  params: { locale: string };
  searchParams?: LandingProps['searchParams'];
};

export default function LandingPage({
  params: { locale },
  searchParams,
}: LandingPageProps) {
  unstable_setRequestLocale(locale);
  return <Landing searchParams={searchParams} />;
}
