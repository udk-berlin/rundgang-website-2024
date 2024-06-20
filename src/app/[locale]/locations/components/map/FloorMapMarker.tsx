import { Marker } from 'react-map-gl/maplibre';
import cx from 'classnames';
import Image from 'next/image';
import { Link } from '@/navigation';
import { Building } from '@/types/types';

export default function FloorMapMarker({
  building,
  marker,
  selected,
}: {
  building: GeoJSON.Feature<GeoJSON.Point, Building>;
  marker: any;
  selected: boolean;
}) {
  return (
    <Marker
      longitude={building.geometry.coordinates[0]}
      latitude={building.geometry.coordinates[1]}
      anchor="center"
      className="group w-fit"
    >
      <Link
        href={{
          pathname: `/locations/[place]`,
          params: { place: building.properties.id },
        }}
      >
        <div
          className={cx(
            'absolute bottom-8 left-9 w-fit text-nowrap',
            'rounded-md border-sm  p-1',
            'group-hover:border-primary group-hover:text-primary',
            'group-hover:bg-highlight dark:group-hover:bg-[--highlight-invert]',
            selected
              ? 'border-primary bg-highlight text-primary dark:bg-[--highlight-invert]'
              : 'border-secondary bg-primary text-secondary',
          )}
        >
          {building.properties.name}
        </div>
        <Image
          height={marker?.size ?? 40}
          width={marker?.size ?? 40}
          alt={building.properties.name}
          className="hidden sm:block"
          src={`/assets/svg/map/ground_plan/marker/${building.properties.image}.svg`}
        />
        <Image
          height={30}
          width={30}
          alt={building.properties.name}
          className="sm:hidden"
          src="/assets/svg/map/ground_plan/marker/simple.svg"
        />
      </Link>
    </Marker>
  );
}
