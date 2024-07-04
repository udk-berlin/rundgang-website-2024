import Content from '@/components/modal/content.server';
import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Imprint' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: ['/assets/ogimages/hi.png'],
    },
  };
}

export default async function Page(props: any) {
  unstable_setRequestLocale(props.params.locale);
  return (
    <main className="border-x-border border-primary">
      <Content title="Imprint" />
    </main>
  );
}
