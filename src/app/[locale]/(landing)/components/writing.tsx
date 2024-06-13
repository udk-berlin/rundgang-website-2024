import Image from 'next/image';
import { ReactNode } from 'react';
import BorderContainer from '@/components/containers/border';

export default function LandingWriting({ lang }: { lang: string }) {
  return (
    <LandingWritingContainer>
      <Image
        className="h-auto w-full dark:invert"
        src={`/assets/projects/${lang}/writing.png`}
        width={1207}
        height={587}
        alt="Hand writing"
      />
    </LandingWritingContainer>
  );
}
function LandingWritingContainer({ children }: { children: ReactNode }) {
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
