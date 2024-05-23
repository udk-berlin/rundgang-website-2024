import Filters from '@/components/filters';
import Program from './components/program.server';
import { getFilteredGraphQLItems } from '@/api/graphql/items';
import { getExistingGraphQLFilters } from '@/api/graphql/filters';

export type ProgramPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 0;

export default async function ProgramPage({ searchParams }: ProgramPageProps) {
  const items = await getFilteredGraphQLItems(searchParams);
  const filters = await getExistingGraphQLFilters(items);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="grid grid-cols-5">
        <Filters filters={filters} />
        <Program items={items} />
      </div>
    </main>
  );
}
