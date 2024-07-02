import { useTranslations } from 'next-intl';
import FilterTag from '@/components/filterTag';
import { Item } from '@/types/item';

export type ProjectCardProps = {
  item: Item;
};

const filterFetchers: {
  translation: 'format' | 'faculty' | 'language';
  data: 'formats' | 'faculties' | 'languages';
}[] = [
  { translation: 'format', data: 'formats' },
  { translation: 'faculty', data: 'faculties' },
  { translation: 'language', data: 'languages' },
];

export default function ProjectCardFilters({ item }: ProjectCardProps) {
  const t = useTranslations();
  return (
    <div className="flex w-full max-w-full flex-wrap gap-gutter-sm">
      {filterFetchers.map((fetcher) => {
        const filters = item[fetcher.data].filter((f) => f.name);

        if (filters.length === 0) {
          return <></>;
        }

        return (
          <div key={fetcher.translation}>
            <div className="pb-gutter-xs text-xxxs text-grey">
              {t(fetcher.translation, { count: 2 })}
            </div>
            <div className="wrap flex gap-gutter-sm">
              {filters.map((filter) => (
                <FilterTag key={filter.id} filter={filter} withBorder />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
