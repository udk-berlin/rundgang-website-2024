import { useTranslations } from 'next-intl';
import FilterTag from '@/components/filterTag';
import { Item } from '@/types/item';

export type ProjectCardProps = {
  item: Item;
};

export default function ProjectCardFilters({ item }: ProjectCardProps) {
  const t = useTranslations('Filtering');
  if (!item.format) {
    return <></>;
  }

  return (
    <div className="px-gutter-md pb-gutter-md">
      <div>
        <div className="pb-[10px] text-xxxs text-grey">{t('format')}</div>
        <FilterTag filter={item.format} />
      </div>
    </div>
  );
}
