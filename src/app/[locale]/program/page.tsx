import Filters from '@/components/filters';
import Program from './components/program.server';
import { getFilteredGraphQLItems } from '@/api/graphql/items';
import { getExistingGraphQLFilters } from '@/api/graphql/filters';

export const revalidate = 0;

export default async function ProgramPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const program = await getFilteredGraphQLItems(searchParams);
  const filters = await getExistingGraphQLFilters(program);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="grid grid-cols-5">
        <Filters filters={filters} />
        <Program program={program} />
      </div>
    </main>
  );
}
