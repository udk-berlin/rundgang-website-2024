import Design from '@/app/design/components/design.server';
import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Design');
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      images: ['/assets/projects/ka/writing.png'],
    },
  };
}
export default async function Page(props: any) {
  unstable_setRequestLocale(props.params.locale);
  return <Design />;
}
