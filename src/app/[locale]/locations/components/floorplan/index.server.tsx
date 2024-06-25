import Image from 'next/image';
import Rooms from './rooms';
import cx from 'classnames';

export default function Floorplan({ location }: any) {
  return (
    <div className="relative -mt-8 aspect-square w-full p-1 sm:-mt-16">
      <Image
        fill
        alt="building background"
        className="h-full w-full object-contain"
        placeholder="empty"
        src={`/assets/svg/map/ground_plan/popup/${location.image}.svg`}
      />
      {location.rooms && <Rooms location={location} />}
    </div>
  );
}
