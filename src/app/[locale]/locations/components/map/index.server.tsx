import { getBuildings } from '@/api/graphql/buildings';
import MapComponent from './map';
import { Suspense } from 'react';

export const revalidate = 0;
export default async function LocationsMap() {
  const buildings = await getBuildings();

  return (
    <Suspense>
      <MapComponent buildings={buildings} />
    </Suspense>
  );
}
