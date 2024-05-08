'use client';

import cx from 'classnames';
import { useTranslations } from 'next-intl';
import FilterGroup from './filterGroup';
import { usePathname } from '@/navigation';

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

export default function Filters() {
  const t = useTranslations('Filtering');
  const pathname = usePathname();
  return (
    <div
      className={cx(
        'h-full bg-primary',
        pathname == '/program' ? 'col-span-1' : '',
      )}
    >
      <div className="w-full pr-1 text-primarybg">{t('filter')}</div>
      <FilterGroup title="faculties" list={filterItems} />
      <FilterGroup title="formats" list={filterItems} />
      <FilterGroup title="languages" list={filterItems} />
    </div>
  );
}
