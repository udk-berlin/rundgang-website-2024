import { getFilteredGraphQLLocationItems } from '@/api/graphql/items';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import JumpToTop from '@/components/jumpToTop';
import ProjectCard from '@/components/project/card/card.server';
import { Suspense } from 'react';

export type ProgramPageProps = {
  place: string;
};

export const revalidate = 120;

export default async function ProgramPage({ place }: ProgramPageProps) {
  const items = await getFilteredGraphQLLocationItems(place);

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
    <div className="z-40 -ml-xs h-content max-h-content min-h-content bg-primary md:col-span-2 md:overflow-y-scroll">
      <Suspense fallback="Loading...">
        <div className="col-span-1 grid max-h-fit min-h-content w-full columns-1 items-start justify-start gap-border bg-primary px-border md:grid-cols-2">
          {children}
        </div>
      </Suspense>
      <JumpToTop />
    </div>
  );
}
