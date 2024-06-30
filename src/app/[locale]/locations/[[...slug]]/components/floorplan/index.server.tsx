import Image from 'next/image';
import Rooms from './rooms';
import { LocationItem } from '@/types/types';

export default function Floorplan({ location }: { location: LocationItem }) {
  return (
    <div className="relative aspect-square w-full p-1">
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
