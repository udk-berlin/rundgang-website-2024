import { ResponsiveMultiLineText } from '@/components/texts/multiLine';
import { getTranslations } from 'next-intl/server';

export default async function Content(props: { title: 'Contact' | 'Imprint' }) {
  const t = await getTranslations(props.title);
  return (
    <div className="flex h-content flex-col items-center justify-start overflow-y-scroll overscroll-contain">
      <div className="h-fit bg-secondary text-primary">
        <h1 className="p-8 text-lg ">{t('title')}</h1>
        <ResponsiveMultiLineText
          className="min-h-content p-8 text-sm"
          text={t.raw('text')}
        />
      </div>
    </div>
  );
}
