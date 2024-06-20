import { getFilteredGraphQLLocationItems } from '@/api/graphql/items';
import ProjectCard from '@/components/project/card.server';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';

export type ProgramPageProps = {
  searchParams: { [key: string]: string | undefined };
};

export const revalidate = 0;

export default async function ProgramPage({ searchParams }: ProgramPageProps) {
  const items = await getFilteredGraphQLLocationItems(searchParams);

  return (
    items && (
      <ProgramContainer>
        {items.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </ProgramContainer>
    )
  );
}
export type ProgramProps = {
  items: Item[];
};

function ProgramContainer({ children }: ReactNodeProps) {
  return (
    <div className="col-span-1 h-[calc(100vh-var(--header-height)-var(--footer-height))] overflow-y-scroll xs:col-span-2">
      <div className="grid h-fit columns-1 grid-cols-2 items-start justify-start gap-0 bg-primary xs:columns-2">
        {children}
      </div>
    </div>
  );
}
