import Image from 'next/image';

export default function RundgangLogo() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/assets/RNG.svg"
        fill
        alt="rng"
        className="object-contain py-[10px] dark:invert md:hover:dark:filter-none"
      />
    </div>
  );
}
