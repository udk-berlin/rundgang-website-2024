import Link from "next/link";
export type LocationPageProps = {
  x?: any;
};

export default function LocationPageComponent(props: LocationPageProps) {
  return (
    <div>
      <div>location</div>

      <Link href="/locations">Locations</Link>
      <Link href="/timeline">Timeline</Link>
      <Link href="/program">Program</Link>
    </div>
  );
}
