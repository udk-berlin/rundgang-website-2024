import Saved from './saved.client';
import { getGraphQLItems } from '@/api/graphql/items';

export type SavedPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 100; // revalidate the data at most every hour

export default async function SavedPage() {
  const items = await getGraphQLItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Saved items={items} />
    </main>
  );
}
