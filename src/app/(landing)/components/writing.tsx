import Image from 'next/image';
import { ReactNode } from 'react';

export default function LandingWriting() {
  return (
    <LandingWritingContainer>
      <Image
        className="h-auto w-full"
        src="/assets/projects/zho/writing.png"
        width={1207}
        height={587}
        alt="Hand writing"
      />
    </LandingWritingContainer>
  );
}
function LandingWritingContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center px-[5vw]">
      {children}
    </div>
  );
}
