import Program from '@/app/program/components/program.server';
import { getGraphQLProgram } from '@/api/graphql/items';

export default async function ProgramPage(props: any) {
  const program = await getGraphQLProgram();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div>
        <Program program={program} />
      </div>
    </main>
  );
}
