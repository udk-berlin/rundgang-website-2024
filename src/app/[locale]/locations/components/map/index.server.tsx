import { getBuildings } from '@/api/graphql/buildings';
import MapComponent from './map';
import { Suspense } from 'react';

export const revalidate = 0;
export default async function LocationsMap({ mapCut }: { mapCut: number }) {
  const buildings = await getBuildings();

  return (
    <div className="h-fit w-full rounded-md bg-secondary p-1">
      <Suspense>
        <MapComponent buildings={buildings} mapCut={mapCut} />
      </Suspense>
    </div>
  );
}
