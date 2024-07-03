import { HtmlProps } from '@/components/html/html';
import { useTranslations } from 'next-intl';
import DesignContentProjectFilter from '@/app/design/components/content/project/filters/filter.server';
import ISO6391 from 'iso-639-1';

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
        value={
          project.language.nativeName
            ? project.language.nativeName
            : ISO6391.getNativeName(project.language.iso_639_1_code)
        }
      />
    </DesignContentProjectFiltersContainer>
  );
}

function DesignContentProjectFiltersContainer({ children }: HtmlProps) {
  return <div className="flex gap-[0.5rem]">{children}</div>;
}
