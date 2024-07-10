'use client';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onChangeLanguage(event: any) {
    startTransition(() => {
      const nextLocale = locale == 'en' ? 'de' : 'en';
      if (pathname == '/project/[id]') {
        router.push({ pathname: '/program' }, { locale: nextLocale });
      } else if (pathname == '/timeline/[[...slug]]') {
        router.push({ pathname: '/timeline' }, { locale: nextLocale });
      } else {
        router.replace(
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          { pathname, params },
          { locale: nextLocale },
        );
      }
    });
  }

  return (
    <div className="z-100 group h-full bg-primary">
      <button
        className="p-auto peer h-full w-full justify-center rounded-border border-xs border-y-border border-primary bg-secondary text-center uppercase group-hover:bg-highlight group-hover:text-black group-focus:text-lg"
        onClick={onChangeLanguage}
      >
        <span>{locale == 'en' ? 'de' : 'en'}</span>
      </button>
    </div>
  );
}
