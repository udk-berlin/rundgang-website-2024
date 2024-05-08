import { ReactNode } from 'react';
import { ResponsiveP } from '@/components/html/p';

export default function LandingInfoProject() {
  return (
    <LandingInfoProjectContainer>
      <div className="pb-[20px]">Sound On</div>
      <ResponsiveP className="text-grey">Name</ResponsiveP>
      <ResponsiveP className="text-grey">Language</ResponsiveP>
      <ResponsiveP className="text-grey">Studies</ResponsiveP>
      <ResponsiveP className="text-grey">Faculty</ResponsiveP>
    </LandingInfoProjectContainer>
  );
}

function LandingInfoProjectContainer({ children }: { children: ReactNode }) {
  return (
    <div className="ml-auto mt-auto">
      <div className="flex flex-col text-right">{children}</div>
    </div>
  );
}
