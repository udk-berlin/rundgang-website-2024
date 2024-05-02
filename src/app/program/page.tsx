import Program from '@/app/program/components/program.server';
import { getGraphQLItems } from '@/api/graphql/items';

export const revalidate = 0;

export default async function ProgramPage() {
  const program = await getGraphQLItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div>
        <Program program={program} />
      </div>
    </main>
  );
}
