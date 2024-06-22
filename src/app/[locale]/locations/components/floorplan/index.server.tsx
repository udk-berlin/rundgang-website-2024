import Image from 'next/image';
import Rooms from './rooms';

export default function Floorplan({ location }: any) {
  return (
    <div className="relative h-1/2 w-1/2 p-1">
      <Image
        fill
        alt="building background"
        className="h-fit w-full object-contain"
        placeholder="empty"
        src={`/assets/svg/map/ground_plan/popup/${location.image}.svg`}
      />
      <Rooms location={location} />
    </div>
  );
}
