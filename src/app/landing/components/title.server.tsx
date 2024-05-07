import { ReactNode } from 'react';
import { ResponsiveH1 } from '@/components/html/h1';

export default function LandingTitle() {
  return (
    <LandingTitleContainer>
      <span>UdK Berlin</span>
      <span>
        <br />
        19. - 21. Juli 2024
      </span>
    </LandingTitleContainer>
  );
}

function LandingTitleContainer({ children }: { children: ReactNode }) {
  return (
    <ResponsiveH1 className="mb-[50px] mt-auto flex justify-center">
      {children}
    </ResponsiveH1>
  );
}
