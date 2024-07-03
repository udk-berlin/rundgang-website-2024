import Image from 'next/image';

export default function RundgangLogo() {
  return (
    <div className="relative m-2 h-full w-full justify-around overflow-hidden text-center">
      <Image
        src="/assets/RNG.svg"
        fill
        alt="rng"
        className="object-contain py-2 dark:invert hover:dark:filter-none"
      />
    </div>
  );
}
