import { ReactNode } from 'react';
import { ResponsiveP } from '@/components/html/p';
import LandingInfoProjectSound from '@/app/landing/components/info/project/sound.client';

export default function LandingInfoProject() {
  return (
    <LandingInfoProjectContainer>
      <LandingInfoProjectSound />
      <ResponsiveP className="flex flex-col gap-[2px] text-right text-grey">
        <p>Name</p>
        <p>Language</p>
        <p>Studies</p>
        <p>Faculty</p>
      </ResponsiveP>
    </LandingInfoProjectContainer>
  );
}

function LandingInfoProjectContainer({ children }: { children: ReactNode }) {
  return (
    <div className="ml-auto mt-auto">
      <div className="flex flex-col items-end gap-[12px]">{children}</div>
    </div>
  );
}
