import FilterBar from '@/components/filterBar';
import { ReactNode } from 'react';
import { ReactNodeProps } from '@/types/types';
import LayoutMovableContentContainer from '@/app/program/components/layout/movableContentContainer.client';

export type ProgramLayoutProps = {
  children: ReactNode;
  selected: ReactNode;
};

export default function Layout({ children, selected }: ProgramLayoutProps) {
  return (
    <LayoutContainer>
      <FilterBar />
      <LayoutMovableContentContainer>
        {children}
        {selected}
      </LayoutMovableContentContainer>
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
