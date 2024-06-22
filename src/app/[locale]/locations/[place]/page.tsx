import { getLocation } from '@/api/rest/location';
import LocationsMap from '../components/map/index.server';
import Floorplan from '../components/floorplan/index.server';
import Subnavigation from '../components/subnavigation/index.server';

type LocationsPageProps = {
  params: { place: string };
};

export default async function LocationsPage(props: LocationsPageProps) {
  const location = await getLocation(props.params.place);
  return (
    <div className="h-contentpages col-span-3 w-full overflow-y-scroll overscroll-contain bg-primary p-border">
      <LocationsMap mapCut={600} />
      <div className="mt-border flex h-full items-start rounded-md bg-secondary p-border">
        <Subnavigation location={location} />
        <Floorplan location={location} />
      </div>
    </div>
  );
}
