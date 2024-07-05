import { getFilteredGraphQLLocationItems } from '@/api/graphql/items';
import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import JumpToTop from '@/components/jumpToTop';
import ProjectCard from '@/components/project/card/card.server';
import { Suspense } from 'react';

export type ProgramPageProps = {
  place: string;
  searchParams: { [key: string]: string | undefined };
};

export const revalidate = 600;

export default async function ProgramPage({
  place,
  searchParams,
}: ProgramPageProps) {
  const items = await getFilteredGraphQLLocationItems(place, searchParams);

  return (
    items && (
      <ProgramContainer>
        {items.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
            contextTagType="plain"
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
    <div className="z-40 col-span-1 -ml-xs flex h-content max-h-content min-h-content w-full bg-primary md:col-span-2 md:overflow-y-scroll">
      <Suspense>
        <div className="wrap grid w-full grid-cols-2 justify-stretch gap-border bg-primary px-border">
          {children}
        </div>
      </Suspense>
      <JumpToTop />
    </div>
  );
}
