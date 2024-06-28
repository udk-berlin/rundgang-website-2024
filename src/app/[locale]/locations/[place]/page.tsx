import { getLocation } from '@/api/rest/location';
import { Link } from '@/navigation';
import Floorplan from '../components/floorplan/index.server';
import Subnavigation from '../components/subnavigation/index.server';

type LocationsPageProps = {
  params: { place: string };
};

export default async function LocationsPage(props: LocationsPageProps) {
  const location = await getLocation(props.params.place);

  return (
    <div className="relative z-50 col-span-3 h-full w-full bg-primary p-border sm:top-[50dvh] sm:overflow-y-scroll sm:overscroll-contain">
      <div className="h-full w-full items-start rounded-md bg-secondary sm:grid sm:grid-cols-2">
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
