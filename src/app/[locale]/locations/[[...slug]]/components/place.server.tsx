import { Link } from '@/navigation';
import Floorplan from './floorplan/index.server';
import Subnavigation from './subnavigation/index.server';
import { LocationItem } from '@/types/types';

type PlaceProps = {
  location: LocationItem;
};

export default async function Place({ location }: PlaceProps) {
  return (
    <div className="pointer-events-none relative z-50 col-span-3 h-fit w-full p-border pr-0 sm:h-content sm:overflow-y-scroll sm:overscroll-contain">
      <div className="bg-transparent pointer-events-none hidden h-[50dvh] sm:block">
        .
      </div>
      <div className="sm:min-h-place pointer-events-auto relative max-h-fit min-h-[400px] w-full items-start rounded-md bg-secondary sm:grid sm:grid-cols-2">
        <Subnavigation location={location} />
        {location.levels?.length > 0 && <Floorplan location={location} />}
        <Link href="/locations" scroll={true}>
          <div className="absolute right-2 top-0 rotate-45 text-xl text-primary hover:text-highlight">
            +
          </div>
        </Link>
      </div>
    </div>
  );
}
