import { cache } from 'react';
import LocationPageComponent from './LocationPage.server';

const getLocations = cache(async (id: string) => {
  const res = await fetch(
    `https://2023.api.rundgang.udk-berlin.de/api/v2/${id}`,
  );
  return res.json();
});

export default async function LocationsPage(props: any) {
  const locations = await getLocations(
    '!ZEZxbNWFYYsDgpkhCL:content.udk-berlin.de',
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div>
        <LocationPageComponent {...props} locations={locations} />
      </div>
    </main>
  );
}
