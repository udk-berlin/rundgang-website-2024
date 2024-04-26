import {
  LocationPageComponent,
  LocationPageProps,
} from "@/components/compositions/LocationPage";

export async function getServerSideProps(props: any) {
  return {
    props: {},
  };
}

export default function LocationsPage(props: LocationsPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <LocationPageComponent />
      </div>
    </main>
  );
}
