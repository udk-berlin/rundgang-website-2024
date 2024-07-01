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
        alt="Handwriting"
      />
    </LandingProjectWritingContainer>
  );
}
function LandingProjectWritingContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center bg-secondary px-[9vw]">
      {children}
    </div>
  );
}
