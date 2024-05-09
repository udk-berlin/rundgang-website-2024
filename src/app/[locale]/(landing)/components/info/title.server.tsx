import { ReactNode } from 'react';
import { ResponsiveH1 } from '@/components/html/h1';
import { ResponsiveBr } from '@/components/html/br';
import { ResponsiveH2 } from '@/components/html/h2';

export default function LandingInfoTitle() {
  return (
    <LandingTitleContainer>
      <ResponsiveH1 className="font-medium" textSize="xl">
        UdK Berlin
      </ResponsiveH1>
      <div>
        <ResponsiveBr textSize="xl" />
        <ResponsiveH2 textSize="xl">19. - 21. Juli 2024</ResponsiveH2>
      </div>
    </LandingTitleContainer>
  );
}

function LandingTitleContainer({ children }: { children: ReactNode }) {
  return <div className="flex justify-center">{children}</div>;
}
