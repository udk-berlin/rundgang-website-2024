import Info from '@/app/info/components/info.server';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Info');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: ['/assets/projects/de/writing.png'],
    },
  };
}
export default function InfoPage() {
  return <Info />;
}
