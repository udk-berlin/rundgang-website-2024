import { getFilteredGraphQLItems } from '@/api/graphql/items';
import ProjectCard from '@/components/project/card.server';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';

export type ProgramPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 0;

export default async function ProgramPage({ searchParams }: ProgramPageProps) {
  const items = await getFilteredGraphQLItems(searchParams);

  return (
    <ProgramContainer>
      {items.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
    </ProgramContainer>
  );
}
export type ProgramProps = {
  items: Item[];
};

function ProgramContainer({ children }: ReactNodeProps) {
  return (
    <div className="h-contentpages overflow-y-scroll xs:col-span-4">
      <div className="min-h-contentpages col-span-1 max-h-fit columns-1 items-start justify-start gap-0 bg-primary xs:col-span-4 xs:columns-2 md:columns-4">
        {children}
      </div>
    </div>
  );
}
