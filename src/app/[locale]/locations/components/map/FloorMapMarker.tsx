import { Marker } from 'react-map-gl/maplibre';
import cx from 'classnames';
import Image from 'next/image';
import { Building } from '@/types/types';

export default function FloorMapMarker({
  building,
  marker,
  selected,
  handleClick,
}: {
  building: GeoJSON.Feature<GeoJSON.Point, Building>;
  marker: any;
  selected: boolean;
  handleClick: (e: any) => void;
}) {
  return (
    <Marker
      longitude={building.geometry.coordinates[0]}
      latitude={building.geometry.coordinates[1]}
      anchor="center"
      className="group w-fit"
      onClick={(e) => handleClick({ ...e, features: [building] })}
    >
      <div>
        <div
          className={cx(
            'absolute w-fit text-nowrap',
            'rounded-md border-sm  p-1',
            'group-hover:border-primary group-hover:text-primary',
            'group-hover:bg-highlight dark:group-hover:bg-[--highlight-invert]',
            selected
              ? 'border-primary bg-highlight text-primary dark:bg-[--highlight-invert]'
              : 'border-black bg-black text-white',
            building.properties.labelPosition,
          )}
        >
          {building.properties.name}
        </div>
        <Image
          height={marker?.size ?? 40}
          width={marker?.size ?? 40}
          alt={building.properties.name}
          priority={true}
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
      </div>
    </Marker>
  );
}
