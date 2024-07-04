import Info from '@/app/info/components/info.server';
import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Info' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: ['/assets/ogimages/de.png'],
    },
  };
}
export default function InfoPage(props: any) {
  unstable_setRequestLocale(props.params.locale);
  return <Info />;
}
