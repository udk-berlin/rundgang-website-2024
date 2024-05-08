import Filters from '@/components/filters';
import Program from './components/program.server';
import { getGraphQLItems } from '@/api/graphql/items';

export const revalidate = 0;

export default async function ProgramPage() {
  const program = await getGraphQLItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="grid grid-cols-5">
        <Filters />
        <Program program={program} />
      </div>
    </main>
  );
}
