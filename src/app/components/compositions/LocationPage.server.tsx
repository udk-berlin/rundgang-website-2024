import Link from "next/link";
import { Entry } from "@/types";
export type LocationPageProps = {
  x?: any;
};

export default function LocationPageComponent(
  props: LocationPageProps,
  locations: Entry[]
) {
  return (
    <div>
      <div>location</div>
      {/*       <div>{locations.context.map((loc) => loc.name).join(" ")}</div>
       */}
    </div>
  );
}
