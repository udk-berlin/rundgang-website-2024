import Link from "next/link";
import { Entry } from "@/types";
export type LocationPageProps = {
  locations: Entry;
};

export default function LocationPageComponent(props: LocationPageProps) {
  return (
    <div>
      <div>location</div>
      {/*       <div>{locations.context.map((loc) => loc.name).join(" ")}</div>
       */}
    </div>
  );
}
