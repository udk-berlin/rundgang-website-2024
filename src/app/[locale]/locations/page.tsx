import Locations from './components/locations.server';

type LocationsPageProps = {
  params: { place: string[] };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function LocationsPage(props: LocationsPageProps) {
  return (
    <div className="h-full w-full">
      <Locations mapCut={0} />
    </div>
  );
}
