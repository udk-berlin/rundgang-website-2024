import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Landing from './(landing)/components/landing.server';

export type LandingPageProps = {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function LandingPage({
  params: { locale },
  searchParams,
}: LandingPageProps) {
  unstable_setRequestLocale(locale);
  // const t = useTranslations('IndexPage');
  return <Landing searchParams={searchParams} />;
}
