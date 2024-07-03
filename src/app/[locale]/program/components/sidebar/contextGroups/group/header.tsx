import { useTranslations } from 'next-intl';
import { ReactNodeProps } from '@/types/types';

export type ProgramSidebarContextGroupHeaderProps = {
  translationKey: 'faculty' | 'format' | 'language';
};

export default function ProgramSidebarContextGroupHeader({
  translationKey,
}: ProgramSidebarContextGroupHeaderProps) {
  const t = useTranslations();

  return (
    <ProgramSidebarContextGroupHeaderContainer>
      {t(translationKey, { count: 2 })}:
    </ProgramSidebarContextGroupHeaderContainer>
  );
}

function ProgramSidebarContextGroupHeaderContainer({ children }: ReactNodeProps) {
  return (
    <div className="flex min-h-content-header items-center bg-primary px-gutter-sm text-xs text-secondary">
      {children}
    </div>
  );
}
