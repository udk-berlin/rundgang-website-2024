import { getBuildings } from '@/api/graphql/buildings';
import MapComponent from './map';
import MapProviderContainer from './container';
import { Suspense } from 'react';
import { LocationItem } from '@/types/types';

export const revalidate = 100;
export default async function LocationsMap({
  location,
}: {
  location: LocationItem | null;
}) {
  const buildings = await getBuildings();

  return (
    <Suspense>
      <MapProviderContainer>
        <MapComponent buildings={buildings} location={location} />
      </MapProviderContainer>
    </Suspense>
  );
}
