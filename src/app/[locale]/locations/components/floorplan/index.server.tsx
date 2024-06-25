import Image from 'next/image';
import Rooms from './rooms';

export default function Floorplan({ location }: any) {
  return (
    <div className="relative h-1/2 p-1 sm:w-1/2">
      <Image
        fill
        alt="building background"
        className="-mt-7 h-fit w-full object-contain"
        placeholder="empty"
        src={`/assets/svg/map/ground_plan/popup/${location.image}.svg`}
      />
      {location.rooms && <Rooms location={location} />}
    </div>
  );
}
