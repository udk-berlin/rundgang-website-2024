import Image from 'next/image';
import cx from 'classnames';
import Rooms from './rooms';
import { LocationItem } from '@/types/types';

export default function Floorplan({ location }: { location: LocationItem }) {
  return (
    <div
      className={cx(
        'pointer-events-none relative col-span-1 aspect-square w-full p-1',
        location.margin,
      )}
    >
      <Image
        fill
        alt="building background"
        className="pointer-events-none h-full w-full object-contain"
        placeholder="empty"
        src={`/assets/svg/map/ground_plan/popup/${location.image}.svg`}
      />
      {location.rooms && <Rooms location={location} />}
    </div>
  );
}
