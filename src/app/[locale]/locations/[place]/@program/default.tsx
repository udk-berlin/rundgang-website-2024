import { getFilteredGraphQLLocationItems } from '@/api/graphql/items';
import ProjectCard from '@/components/project/card.server';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';

export type ProgramPageProps = {
  params: { place: string };
  searchParams: { [key: string]: string | undefined };
};

export const revalidate = 0;

export default async function ProgramPage({
  searchParams,
  params: { place },
}: ProgramPageProps) {
  const items = await getFilteredGraphQLLocationItems(searchParams, place);

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
    <div className="h-locations col-span-1 overflow-scroll xs:col-span-2">
      <div className="grid h-fit columns-1 grid-cols-2 items-start justify-around gap-0 bg-primary xs:columns-2">
        {children}
      </div>
    </div>
  );
}
