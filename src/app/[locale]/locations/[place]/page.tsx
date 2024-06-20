import { getLocation } from '@/api/rest/location';
import LocationsMap from '../components/map/index.server';
import BuildingTitle from '../components/title.server';

type LocationsPageProps = {
  params: { place: string };
};

export default async function LocationsPage(props: LocationsPageProps) {
  const location = await getLocation(props.params.place);
  return (
    <div className="h-locations col-span-3 w-full overflow-y-scroll overscroll-contain bg-primary p-border">
      <LocationsMap mapCut={500} />
      <div className="mt-border rounded-md bg-secondary p-border">
        <BuildingTitle location={location.building} />
      </div>
    </div>
  );
}
