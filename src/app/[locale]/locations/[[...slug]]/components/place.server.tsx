import { Link } from '@/navigation';
import Floorplan from './floorplan/index.server';
import Subnavigation from './subnavigation/index.server';
import Cross from '@/components/icons/cross';
import SmoothButton from '@/components/smoothButton';
import { getLocation } from '@/api/rest/location';
import { Suspense } from 'react';

type PlaceProps = {
  place: string;
};

export default async function Place({ place }: PlaceProps) {
  const location = await getLocation(place);
  return (
    <div className="pointer-events-none relative z-40 col-span-3 h-fit pr-0 sm:h-content sm:overflow-y-scroll sm:overscroll-y-contain">
      <div className="bg-transparent pointer-events-none h-[50dvh] border-r-xs "></div>
      <Suspense>
          <div className="bg-primary">
              <div className="min-h-[calc(50dvh - var(--header-height) - var(--footer-height))] pointer-events-auto relative max-h-fit items-start rounded-md border-border border-primary bg-secondary sm:grid sm:min-h-place sm:grid-cols-2 sm:border-r-0 sm:border-t-border">
                  <Subnavigation location={location} />
                  {location.image != 'simple' && <Floorplan location={location} />}
                  <Link href="/locations" scroll={false}>
                      <SmoothButton
                          className="absolute right-2 top-0 p-2"
                          top
                          color="primary"
                      >
                          <Cross color="secondary" className="rotate-45 p-gutter-sm" />
                      </SmoothButton>
                  </Link>
              </div>
          </div>
      </Suspense>
    </div>
  );
}
