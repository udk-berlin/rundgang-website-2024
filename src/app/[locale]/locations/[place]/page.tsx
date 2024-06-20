import Locations from '../components/locations.server';

type LocationsPageProps = {
  place: string[];
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function LocationsPage(props: LocationsPageProps) {
  return (
    <div className="h-full w-full">
      <Locations mapCut={500} />
      <div className="h-fit bg-black text-white">{props.place}</div>
    </div>
  );
}
