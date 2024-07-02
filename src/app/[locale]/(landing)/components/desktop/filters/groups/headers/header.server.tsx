import { useTranslations } from 'next-intl';
import { ReactNodeProps } from '@/types/types';

export type LandingFiltersGroupsHeadersProps = {
  translationKey: 'format' | 'faculty' | 'language';
};

export default function LandingFiltersGroupsHeader({
  translationKey,
}: LandingFiltersGroupsHeadersProps) {
  const t = useTranslations();
  return (
    <LandingFiltersGroupsHeaderContainer>
      {t(translationKey, { count: 2 })}:
    </LandingFiltersGroupsHeaderContainer>
  );
}

function LandingFiltersGroupsHeaderContainer({ children }: ReactNodeProps) {
  return (
    <div className="px-gutter-sm py-gutter-xs text-xxs text-grey">
      {children}
    </div>
  );
}
