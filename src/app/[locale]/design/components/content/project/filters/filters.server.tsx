import { HtmlProps } from '@/components/html/html';
import { useTranslations } from 'next-intl';
import DesignContentProjectFilter from '@/app/design/components/content/project/filters/filter.server';

export default function DesignContentProjectFilters({ project }) {
  const t = useTranslations();
  return (
    <DesignContentProjectFiltersContainer>
      <DesignContentProjectFilter
        title={t('faculty', { count: 1 })}
        value={project.faculty}
      />
      <DesignContentProjectFilter
        title={t('language', { count: 1 })}
        value={project.language}
      />
    </DesignContentProjectFiltersContainer>
  );
}

function DesignContentProjectFiltersContainer({ children }: HtmlProps) {
  return <div className="flex gap-[0.5rem]">{children}</div>;
}
