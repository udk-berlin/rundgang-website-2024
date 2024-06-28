import { getFilteredGraphQLItems } from '@/api/graphql/items';
import Program from "@/app/program/components/program.server";
import ProgramContainer from "@/app/program/components/container.client";

export type ProgramPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 0;

export default async function Page({ searchParams }: ProgramPageProps) {
  const items = await getFilteredGraphQLItems(searchParams);
  return (
      <ProgramContainer>
        <Program items={items} />
      </ProgramContainer>
  );
}
