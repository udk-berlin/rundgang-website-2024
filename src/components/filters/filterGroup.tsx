import FilterTag from '@/components/filterTag';
import { Filter } from '@/types/graphql';
import { useTranslations } from 'next-intl';

export type FilterGroupProps = {
  title: any;
  list: Filter[];
};

export default function FilterGroup({ title, list }: FilterGroupProps) {
  const t = useTranslations('Filtering');
  return (
    <div className="w-full pt-4">
      <div className="pr-1 text-secondary">{t(title)}</div>
      <div className=" w-full ">
        {list.map((item) => (
          <FilterTag
            key={`filter-${title}-${item.name}`}
            filter={item}
            isReverse
          />
        ))}
      </div>
    </div>
  );
}
