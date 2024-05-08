import { ReactNode } from 'react';
import { ResponsiveH1, ResponsiveH2 } from '@/components/html/h1';
import { ResponsiveBr } from '@/components/html/br';

export default function LandingInfoTitle() {
  return (
    <LandingTitleContainer>
      <ResponsiveH1>UdK Berlin</ResponsiveH1>
      <div>
        <ResponsiveBr textSize="lg" />
        <ResponsiveH2 className="leading-[45px] desktop:leading-[45px]">
          19. - 21. Juli 2024
        </ResponsiveH2>
      </div>
    </LandingTitleContainer>
  );
}

function LandingTitleContainer({ children }: { children: ReactNode }) {
  return <div className="flex">{children}</div>;
}
