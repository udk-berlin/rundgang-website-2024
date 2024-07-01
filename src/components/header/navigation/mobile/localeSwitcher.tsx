'use client';
import { useLocale } from 'next-intl';
import cx from 'classnames';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onChangeLanguage(nextLocale: 'de' | 'en') {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }
  return (
    <div className="flex-grow-2 text-lg">
      <button
        className={cx(locale == 'en' ? 'font-bold' : '')}
        onClick={() => onChangeLanguage('en')}
      >
        <span>EN</span>
      </button>
      {' / '}
      <button
        className={cx(locale == 'de' ? 'font-bold' : '')}
        onClick={() => onChangeLanguage('de')}
      >
        <span>DE</span>
      </button>
    </div>
  );
}
