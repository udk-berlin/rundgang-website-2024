import { ReactNode } from 'react';
import { LandingInfoProps } from '@/app/(landing)/components/desktop/info/info.server';
import Image from 'next/image';

export default function LandingProjectHandwriting({
  language,
}: LandingInfoProps) {
  return (
    <LandingProjectHandwritingContainer>
      <Image
        className="h-[80%] w-auto dark:invert"
        src={`/assets/projects/${language}/mobile.png`}
        width={1207}
        height={587}
        alt="Handwriting"
      />
    </LandingProjectHandwritingContainer>
  );
}

function LandingProjectHandwritingContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0">
      <div className="flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}
