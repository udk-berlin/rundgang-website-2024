'use server';
import { useTranslations } from 'next-intl';
import { ReactNodeProps } from '@/types/types';

export type SidebarFilterGroupHeaderProps = {
  translation: 'faculty' | 'format' | 'language';
};

export default async function ProgramFiltersGroupHeader({
  translation,
}: SidebarFilterGroupHeaderProps) {
  const t = useTranslations();

  return (
    <ProgramFiltersGroupHeaderContainer>
      {t(translation, { count: 2 })}:
    </ProgramFiltersGroupHeaderContainer>
  );
}

function ProgramFiltersGroupHeaderContainer({ children }: ReactNodeProps) {
  return (
    <div className="flex min-h-content-header items-center bg-primary px-gutter-sm text-xs text-secondary">
      {children}
    </div>
  );
}
