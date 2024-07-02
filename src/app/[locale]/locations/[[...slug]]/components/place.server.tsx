import { Link } from '@/navigation';
import Floorplan from './floorplan/index.server';
import Subnavigation from './subnavigation/index.server';
import Cross from '@/components/icons/cross';
import SmoothButton from '@/components/smoothButton';
import { getLocation } from '@/api/rest/location';

type PlaceProps = {
  place: string;
};

export default async function Place({ place }: PlaceProps) {
  const location = await getLocation(place);
  return (
    <div className="pointer-events-none relative z-40 col-span-3 h-fit pr-0 sm:h-content sm:overflow-y-scroll sm:overscroll-y-contain">
      <div className="bg-transparent pointer-events-none hidden h-[50dvh] border-r-xs sm:block"></div>
      <div className="pointer-events-auto relative max-h-fit min-h-[35dvh] items-start rounded-md border-border border-primary bg-secondary sm:grid sm:min-h-place sm:grid-cols-2 sm:border-r-0 sm:border-t-border">
        <Subnavigation location={location} />
        {location.levels?.length > 0 && <Floorplan location={location} />}
        <Link href="/locations" scroll={true}>
          <SmoothButton
            className="absolute right-2 top-0 p-2"
            top
            color="primary"
          >
            <Cross color="secondary" className="rotate-45" />
          </SmoothButton>
        </Link>
      </div>
    </div>
  );
}
