import LocationsMap from './components/map/index.server';

type LocationsPageProps = {
  params: { place: string[] };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function LocationsPage(props: LocationsPageProps) {
  return (
    <div className="h-full w-full">
      <LocationsMap mapCut={0} />
    </div>
  );
}
