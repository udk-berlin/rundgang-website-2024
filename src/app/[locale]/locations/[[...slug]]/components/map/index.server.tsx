import { getBuildings } from '@/api/graphql/buildings';
import MapComponent from './map';
import MapProviderContainer from './container';
import { LocationSummary } from '@/types/types';

export const revalidate = 100;
export default async function LocationsMap({
  location,
}: {
  location: LocationSummary | null;
}) {
  const buildings = await getBuildings();

  return (
    <MapProviderContainer>
      <MapComponent buildings={buildings} location={location} />
    </MapProviderContainer>
  );
}
