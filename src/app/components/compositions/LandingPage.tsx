import Link from "next/link";

export type LandingPageProps = {
  x?: any;
};

export default function LandingPageComponent(props: LandingPageProps) {
  return (
    <div>
      <div>landingpage</div>

      <Link href="/locations">Locations</Link>
      <Link href="/timeline">Timeline</Link>
      <Link href="/program">Program</Link>
    </div>
  );
}
