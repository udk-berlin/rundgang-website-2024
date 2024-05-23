import Saved from './saved.client';
import { getGraphQLItems } from '@/api/graphql/items';

export type SavedPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 0;

export default async function SavedPage() {
  const items = await getGraphQLItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <Saved items={items} />
      </div>
    </main>
  );
}
