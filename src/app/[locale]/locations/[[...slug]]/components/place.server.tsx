import { Link } from '@/navigation';
import Floorplan from './floorplan/index.server';
import Subnavigation from './subnavigation/index.server';
import { LocationItem } from '@/types/types';
import Cross from '@/components/icons/cross';
import SmoothButton from '@/components/smoothButton';

type PlaceProps = {
  location: LocationItem;
};

export default async function Place({ location }: PlaceProps) {
  return (
    <div className="pointer-events-none relative z-50 col-span-3 h-fit w-full p-border pr-0 sm:h-content sm:overflow-y-scroll sm:overscroll-y-contain">
      <div className="bg-transparent pointer-events-none hidden h-[50dvh] sm:block"></div>
      <div className="pointer-events-auto relative max-h-fit min-h-[400px] w-full items-start rounded-md border-t-border border-primary bg-secondary sm:grid sm:min-h-place sm:grid-cols-2">
        <Subnavigation location={location} />
        {location.levels?.length > 0 && <Floorplan location={location} />}
        <Link href="/locations" scroll={true}>
          <SmoothButton
            className="absolute right-2 top-0 fill-secondary p-2"
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
