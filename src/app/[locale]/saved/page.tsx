import { getGraphQLItems } from '@/api/graphql/items';
import Saved from '@/app/saved/components/saved.server';
import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Saved' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: ['/assets/ogimages/ru.png'],
    },
  };
}

export type SavedPageProps = {
  params: { locale: string };
};

export const revalidate = 600;

export default async function Page({ params }: SavedPageProps) {
  unstable_setRequestLocale(params.locale);
  const items = await getGraphQLItems();
  return <Saved items={items} />;
}
