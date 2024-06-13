import Program from './components/program.server';
import { getFilteredGraphQLItems } from '@/api/graphql/items';

export type ProgramPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 0;

export default async function ProgramPage({ searchParams }: ProgramPageProps) {
  const items = await getFilteredGraphQLItems(searchParams);

  return <Program items={items} />;
}
