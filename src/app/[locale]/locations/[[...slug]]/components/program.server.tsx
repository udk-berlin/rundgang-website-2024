import { getFilteredGraphQLLocationItems } from '@/api/graphql/items';
import ProjectCard from '@/components/project/card.server';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import JumpToTop from '@/components/jumpToTop';

export type ProgramPageProps = {
  place: string;
};

export const revalidate = 0;

export default async function ProgramPage({ place }: ProgramPageProps) {
  const items = await getFilteredGraphQLLocationItems({}, place);

  return (
    items && (
      <ProgramContainer>
        {items.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
            linkPathname={`/locations/${place}`}
          />
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
    <div className="max-h-content min-h-content z-50 -ml-[1px] h-content bg-primary md:col-span-2 md:overflow-y-scroll">
      <div className="min-h-content col-span-1 grid max-h-fit w-full columns-1 items-start justify-start gap-border bg-primary px-border md:grid-cols-2">
        {children}
      </div>
      <JumpToTop />
    </div>
  );
}
