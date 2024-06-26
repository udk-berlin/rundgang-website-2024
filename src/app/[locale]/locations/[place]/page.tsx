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
    <div className="col-span-3 h-full w-full bg-primary p-border sm:overflow-y-scroll sm:overscroll-contain">
      <LocationsMap mapCut={550} />
      <div className="mt-border h-full w-full items-start rounded-md bg-secondary p-border sm:grid sm:grid-cols-2">
        <Subnavigation location={location} />
        <Floorplan location={location} />
      </div>
    </div>
  );
}
