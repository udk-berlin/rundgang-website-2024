import { getBuildings } from '@/api/graphql/buildings';
import MapComponent from './map';
import { Suspense } from 'react';

export default async function Locations({ mapCut }: { mapCut: number }) {
  const buildings = await getBuildings();

  return (
    <div className="h-full w-full">
      <Suspense>
        <MapComponent buildings={buildings} mapCut={mapCut} />
      </Suspense>
    </div>
  );
}
