import Image from 'next/image';

export default function RundgangLogo() {
  return (
    <div className="relative h-full w-full content-around overflow-hidden text-center">
      <Image
        src="/assets/logo_rng.png"
        fill
        alt="rng"
        className="object-contain py-2 invert"
      />
    </div>
  );
}
