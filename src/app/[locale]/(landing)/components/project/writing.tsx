import Image from 'next/image';
import { ReactNode } from 'react';
import BorderContainer from '@/components/containers/border';

export default function LandingProjectWriting({
  languageSearchParam,
}: {
  languageSearchParam: string;
}) {
  return (
    <LandingProjectWritingContainer>
      <Image
        className="h-auto w-full dark:invert"
        src={`/assets/projects/${languageSearchParam}/writing.png`}
        width={1207}
        height={587}
        alt="Writing"
      />
    </LandingProjectWritingContainer>
  );
}
function LandingProjectWritingContainer({ children }: { children: ReactNode }) {
  return (
    <BorderContainer
      className="h-full bg-secondary"
      innerClassName="flex h-full items-center justify-center px-[9vw] bg-secondary"
      borders={['x', 't']}
    >
      {children}
    </BorderContainer>
  );
}
