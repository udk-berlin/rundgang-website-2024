import FilterTag from '@/components/filterTag';
import { useTranslations } from 'next-intl';

const filterItems = [
  {
    id: '!nDYduJRtgnwzcXbKSh:content.udk-berlin.de',
    name: 'Ausstellung',
    template: 'format-element',
    type: 'context',
  },
  {
    id: '!FSclTMeSxXrzfKXQke:content.udk-berlin.de',
    name: 'Beratungsangebot',
    template: 'format-element',
    type: 'context',
  },
  {
    id: '!qUraMMnYQuALoROEcw:content.udk-berlin.de',
    name: 'Deutsch',
    template: 'language',
    type: 'context',
  },
];

export default function FilterBar() {
  const t = useTranslations('Filtering');
  return (
    <div className="flex h-md rounded-md border border-t-0 bg-secondary p-2">
      <div className="pr-1">{t('filter')}</div>
      {filterItems.map((item) => (
        <div className="pl-1" key={`selected-filter-${item.id}`}>
          <FilterTag filter={item} isSelected />
        </div>
      ))}
    </div>
  );
}
