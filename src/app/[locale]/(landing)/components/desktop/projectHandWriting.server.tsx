import Image from 'next/image';
import { ReactNode } from 'react';
import { ProjectLanguages } from '@/projects';

export type LandingProjectWritingProps = {
  language: ProjectLanguages;
};

export default function LandingProjectHandWriting({
  language,
}: LandingProjectWritingProps) {
  return (
    <LandingProjectHandWritingContainer>
      <Image
        className="h-auto min-w-[calc(80vw-4rem)] max-w-[calc(100vw-4rem)] dark:invert"
        src={`/assets/projects/${language}/writing.png`}
        width={1207}
        height={587}
        alt="Handwriting"
      />
    </LandingProjectHandWritingContainer>
  );
}
function LandingProjectHandWritingContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="hidden h-full w-full items-center justify-center md:flex">
      {children}
    </div>
  );
}
