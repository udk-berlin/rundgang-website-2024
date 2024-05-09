import { ReactNode } from 'react';
import LandingInfoProjectSound from '@/app/(landing)/components/info/project/sound.client';
import { ResponsiveDiv } from '@/components/html/div';

export default function LandingInfoProject() {
  return (
    <LandingInfoProjectContainer>
      <LandingInfoProjectSound />
      <ResponsiveDiv className="text-right text-grey" textSize="sm">
        <p>Name</p>
        <p>Language</p>
        <p>Studies</p>
        <p>Faculty</p>
      </ResponsiveDiv>
    </LandingInfoProjectContainer>
  );
}

function LandingInfoProjectContainer({ children }: { children: ReactNode }) {
  return (
    <div className="ml-auto mt-auto">
      <div className="gap-gutter-sm desktop:gap-desktop-gutter-sm flex flex-col items-end">
        {children}
      </div>
    </div>
  );
}
