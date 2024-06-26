'use client';
import { useLocale } from 'next-intl';
import cx from 'classnames';
import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useState, useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { locales } from '@/config';

export default function LocaleSwitcher() {
  const locale = useLocale();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onChangeLanguage(event: any) {
    const nextLocale = locale == 'en' ? 'de' : 'en';

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
    <div className="z-100 group h-full bg-primary">
      <button
        className="p-auto peer h-full w-full content-around rounded-border border-[1px] border-y-border border-primary bg-secondary text-center uppercase group-hover:bg-highlight group-hover:text-black group-focus:text-lg"
        onClick={onChangeLanguage}
      >
        <span>{locale}</span>
      </button>
    </div>
  );
}
