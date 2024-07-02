import Saved from './saved.client';
import { getGraphQLItems } from '@/api/graphql/items';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Saved');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: ['/assets/projects/ru/writing.png'],
    },
  };
}
export type SavedPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 0; // revalidate the data at most every hour

export default async function SavedPage() {
  const items = await getGraphQLItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Saved items={items} />
    </main>
  );
}
