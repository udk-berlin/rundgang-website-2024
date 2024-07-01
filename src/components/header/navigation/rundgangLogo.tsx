import Image from 'next/image';

export default function RundgangLogo() {
  return (
    <div className="relative h-full w-full content-around overflow-hidden text-center">
      <Image
        src="/assets/RNG.svg"
        fill
        alt="rng"
        className="object-contain py-2 dark:invert"
      />
    </div>
  );
}
