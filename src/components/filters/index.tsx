'use client';
// make this component server side???

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
    <div className="min-h-100 bg-primary">
      <div
        className={cx(
          'top-md z-5 h-100 fixed left-0 col-span-1 w-1/5 overflow-x-hidden',
          pathname == '/program' ? '' : '',
        )}
      >
        <div className="w-full pr-1 text-secondary">{t('filter')}</div>
        <FilterGroup title="faculties" list={filterItems} />
        <FilterGroup title="formats" list={filterItems} />
        <FilterGroup title="languages" list={filterItems} />
      </div>
    </div>
  );
}
