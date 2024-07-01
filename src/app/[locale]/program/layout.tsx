import FilterBar from '@/components/filterBar';
import { ReactNode } from 'react';
import { ReactNodeProps } from '@/types/types';

export type ProgramLayoutProps = {
  children: ReactNode;
  selected: ReactNode;
  sidebar: ReactNode;
};

export default function Layout({
  children,
  selected,
  sidebar,
}: ProgramLayoutProps) {
  return (
    <LayoutContainer>
      <FilterBar />
      <div
        id="movable-content"
        className="fixed left-[0vw] h-content max-h-content min-h-content w-screen overflow-hidden transition-[left] duration-700 md:left-0"
      >
        <div className="grid h-content max-h-content min-h-content w-[266.666vw] grid-cols-8 md:w-[140vw] md:grid-cols-7">
          {children}
          {sidebar}
          {selected}
        </div>
      </div>
    </LayoutContainer>
  );
}

function LayoutContainer({ children }: ReactNodeProps) {
  return (
    <main className="relative flex h-content max-h-content min-h-content flex-col">
      {children}
    </main>
  );
}
