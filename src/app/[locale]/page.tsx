import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import LandingPageComponent from './LandingPage';

type Props = {
  params: { locale: string };
};
export default function LandingPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  //const t = useTranslations('IndexPage');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <LandingPageComponent />
      </div>
    </main>
  );
}
