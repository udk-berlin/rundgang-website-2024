import { Filter, ReactNodeProps } from '@/types/types';
import { useTranslations } from 'next-intl';
import ContextTagLink from '@/components/contextTag/link';
import ContextTag from '@/components/contextTag/contextTag.server';

export type FilterGroupProps = {
  translationKey: 'format' | 'faculty' | 'language';
  filters: Filter[];
};

export default function LandingFiltersGroup({
  translationKey,
  filters,
}: FilterGroupProps) {
  const t = useTranslations();
  return (
    <LandingFiltersGroupContainer>
      <div className="flex h-content-header w-fit max-w-full items-center truncate px-gutter-sm text-xs text-secondary">
        {t(translationKey, { count: 2 })}
      </div>
      {filters.map((filter) => (
        <ContextTag key={filter.id} type="link" context={filter} />
      ))}
    </LandingFiltersGroupContainer>
  );
}

function LandingFiltersGroupContainer({ children }: ReactNodeProps) {
  return <div className="flex flex-col gap-border">{children}</div>;
}
