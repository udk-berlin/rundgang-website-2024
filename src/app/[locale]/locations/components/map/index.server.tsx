import { getBuildings } from '@/api/graphql/buildings';
import MapComponent from './map';
import { Suspense } from 'react';

export const revalidate = 0;
export default async function LocationsMap({ mapCut }: { mapCut: number }) {
  const buildings = await getBuildings();

  return (
    <Suspense>
      <MapComponent buildings={buildings} mapCut={mapCut} />
    </Suspense>
  );
}
