import Image from 'next/image';

export type RundgangLogoProps = {
  logo: string;
};

export default function RundgangLogo({ logo }: RundgangLogoProps) {
  return (
    <div className="relative h-9 w-full overflow-hidden">
      RNG{/* <Image src={logo} fill alt="rng" /> */}
    </div>
  );
}
