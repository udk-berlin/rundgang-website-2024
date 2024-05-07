import { useLocale } from 'next-intl';
import LocaleSwitcherSelect from './localeSwitcherSelect';
import { locales } from '@/config';

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={locale}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
